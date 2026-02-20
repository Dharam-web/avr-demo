import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Name, Email, Phone, Querydate } = body;
    const toEmail = process.env.TO_EMAIL;

    if (!Name?.trim() || !Email?.trim() || !Phone?.trim()) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const queryDate = Querydate || new Date().toISOString();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: `New Enquiry: ${Name}`,
      text: [
        "New enquiry from website form",
        "",
        `Name: ${Name}`,
        `Email: ${Email}`,
        `Phone: ${Phone}`,
        `Query date: ${queryDate}`,
        "",
        "--",
        "Anand Vardhan Resorts",
      ].join("\n"),
    });

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (googleScriptUrl) {
      const params = new URLSearchParams({
        Name: Name.trim(),
        Email: Email.trim(),
        Phone: String(Phone).trim(),
        Querydate: queryDate,
      });
      await fetch(googleScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry error:", err);
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
