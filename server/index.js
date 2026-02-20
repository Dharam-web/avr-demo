require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

app.post("/api/send-enquiry", async (req, res) => {
  try {
    const { Name, Email, Phone, Querydate } = req.body;
    const toEmail = process.env.TO_EMAIL;

    if (!Name?.trim() || !Email?.trim() || !Phone?.trim()) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const queryDate = Querydate || new Date().toISOString();

    // 1) Send email via Nodemailer
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

    // 2) Forward to Google Apps Script to save in sheet (if URL is set)
    if (GOOGLE_SCRIPT_URL) {
      const params = new URLSearchParams({
        Name: Name.trim(),
        Email: Email.trim(),
        Phone: String(Phone).trim(),
        Querydate: queryDate,
      });
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Enquiry error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Enquiry server running on http://localhost:${PORT}`);
});
