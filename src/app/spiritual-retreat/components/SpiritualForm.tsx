"use client";
import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  offer: string;
  checkin: string;
  checkout: string;
};

type Errors = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  offer?: string;
  checkin?: string;
  checkout?: string;
};

export default function BookingForm() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date: Date) =>
    date.toISOString().split("T")[0];

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    offer: "",
    checkin: formatDate(today),
    checkout: formatDate(tomorrow),
  });

  const [errors, setErrors] = useState<Errors>({});

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

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    // First name validation
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last name validation
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Offer validation
    if (!form.offer) {
      newErrors.offer = "Please select an offer";
    }

    // Date validation
    if (!form.checkin) {
      newErrors.checkin = "Please select check-in date";
    }

    if (!form.checkout) {
      newErrors.checkout = "Please select check-out date";
    }

    if (form.checkin && form.checkout && form.checkin >= form.checkout) {
      newErrors.checkout = "Check-out must be after check-in";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setForm({ ...form, [name]: e.target.value });

    // Clear error for this field when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Read phone from intl-tel-input
    let fullNumber = itiRef.current?.getNumber() ?? "";
    if (!fullNumber && inputRef.current?.value?.trim()) {
      const country = itiRef.current?.getSelectedCountryData();
      const dialCode = country?.dialCode ? `+${country.dialCode}` : "+91";
      fullNumber = dialCode + inputRef.current.value.replace(/\D/g, "");
    }

    const payload = {
      ...form,
      phone: fullNumber,
    };

    console.log(payload); // send to API here
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-4"
      >
        {/* First Name */}
        <div>
          <input
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleChange}
            className={`input ${errors.firstName ? "border-red-500" : ""}`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            name="lastName"
            placeholder="Last Name*"
            value={form.lastName}
            onChange={handleChange}
            className={`input ${errors.lastName ? "border-red-500" : ""}`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Phone */}
        <div className="phoneNumberInput">
          <input
            ref={inputRef}
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={form.phone}
            onChange={handleChange}
            className={`input ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={form.email}
            onChange={handleChange}
            className={`input ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Offer */}
        <div>
          <select
            name="offer"
            value={form.offer}
            onChange={handleChange}
            className={`input ${errors.offer ? "border-red-500" : ""}`}
          >
            <option value="">Select Offer*</option>
            <option value="Wellness Package">Wellness Package</option>
            <option value="Spiritual Retreat">Spiritual Retreat</option>
          </select>
          {errors.offer && (
            <p className="text-red-500 text-sm mt-1">{errors.offer}</p>
          )}
        </div>

        {/* Check-in & Check-out Dates */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm">Check-in*</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              min={formatDate(today)}
              onChange={handleChange}
              className={`input ${errors.checkin ? "border-red-500" : ""}`}
            />
            {errors.checkin && (
              <p className="text-red-500 text-sm mt-1">{errors.checkin}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Check-out*</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              min={form.checkin}
              onChange={handleChange}
              className={`input ${errors.checkout ? "border-red-500" : ""}`}
            />
            {errors.checkout && (
              <p className="text-red-500 text-sm mt-1">{errors.checkout}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 px-6 bg-clr1 text-white rounded-full uppercase font-medium hover:bg-secondary transition-colors"
        >
          Submit
        </button>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.3s;
        }
        .input:focus {
          border-color: #333;
        }
        .input.border-red-500 {
          border-color: #ef4444;
        }
      `}</style>
    </div>
  );
}
