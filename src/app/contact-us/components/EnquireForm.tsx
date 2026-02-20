"use client";

import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";



interface FormData {
  name: string;
  email: string;
  phone: string;
}

const EnquiryForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    itiRef.current = intlTelInput(inputRef.current, {
      initialCountry: "in",
      separateDialCode: true,
    });

    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const ENQUIRY_API_URL =
    process.env.NEXT_PUBLIC_ENQUIRY_API_URL || "http://localhost:3001";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    let fullNumber = itiRef.current?.getNumber() ?? "";
    if (!fullNumber && inputRef.current?.value?.trim()) {
      const country = itiRef.current?.getSelectedCountryData();
      const dialCode = country?.dialCode ? `+${country.dialCode}` : "+91";
      fullNumber = dialCode + inputRef.current.value.replace(/\D/g, "");
    }

    const payload: Record<string, string> = {
      Name: form.name.trim(),
      Email: form.email.trim(),
      Phone: String(fullNumber || "").trim(),
      Querydate: new Date().toISOString(),
    };

    if (!payload.Phone) {
      setSubmitError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${ENQUIRY_API_URL}/api/send-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Submission failed. Please try again.");
        return;
      }
      setForm({ name: "", email: "", phone: "" });
      itiRef.current?.setNumber("");
      alert("Thank you! We have received your enquiry.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(
        message.includes("fetch") || message.includes("Failed")
          ? "Cannot reach server. Is the enquiry server running (npm run server)?"
          : message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-1 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 font-normal text-black">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full text-black font-normal text-sm border border-gray-400 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-normal text-black">
            Email Id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full text-black font-normal text-sm border border-gray-400 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-500 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-normal text-black">
            Phone No <span className="text-red-500">*</span>
          </label>
          <div className="w-full phoneNumberInput">
            <input
              ref={inputRef}
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
              className="w-full text-black font-normal text-sm border border-gray-400 rounded-md px-4 py-3 focus:ring-1 focus:ring-gray-500 outline-none"
            />
          </div>
        </div>

        {submitError && (
          <p className="text-sm text-red-500 text-center">{submitError}</p>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="min-w-52 bg-[#b3003e] hover:bg-[#8b002e] text-white font-bold py-3 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting…" : "Enquire Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
