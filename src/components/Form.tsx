"use client";

import axios from "axios";
import React, { useState, useCallback, useMemo } from "react";
import { countries } from "@/data/countryCode";
import CustomCaptchaForm from "./form/CaptchaForm";

// Validation constants
const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_LENGTH: 10,
  PHONE_REGEX: /^\d+$/,
  DEBOUNCE_DELAY: 300,
} as const;

// Enhanced helper function to detect random character sequences
const isRandomCharacterSequence = (name: string): boolean => {
  const trimmedName = name.trim();

  // Check if it's at least 8 characters (typical for random strings)
  if (trimmedName.length < 8) return false;

  // Check 1: Contains only letters (no spaces, numbers, or special chars)
  if (!/^[A-Za-z]+$/.test(trimmedName)) return false;

  // Check 2: Look for keyboard patterns (common in random typing)
  const keyboardPatterns = [
    /qwerty/i,
    /asdf/i,
    /zxcv/i,
    /qwer/i,
    /asdfgh/i,
    /zxcvbn/i,
    /qawsed/i,
    /rfvtgb/i,
    /yhnujm/i,
    /ikolp/i,
    /qazwsx/i,
    /edcrfv/i,
    /tgbyhn/i,
    /ujmikol/i,
    /plmokn/i,
    /ijnbhg/i,
    /vfrcdx/i,
    /eszrdx/i,
  ];

  for (const pattern of keyboardPatterns) {
    if (pattern.test(trimmedName.toLowerCase())) {
      return true;
    }
  }

  // Check 3: Check for repeating character patterns
  const repeatingPatterns = [
    /(.)\1{2,}/, // Same character repeated 3+ times
    /(..)\1{2,}/, // Two-character pattern repeated 3+ times
    /(...)\1{2,}/, // Three-character pattern repeated 3+ times
  ];

  for (const pattern of repeatingPatterns) {
    if (pattern.test(trimmedName.toLowerCase())) {
      return true;
    }
  }

  // Check 4: Very low vowel-to-consonant ratio
  const vowelCount = (trimmedName.match(/[aeiouAEIOU]/g) || []).length;
  const vowelRatio = vowelCount / trimmedName.length;

  // If vowel ratio is very low (less than 15%), likely random
  if (vowelRatio < 0.15 && trimmedName.length > 10) return true;

  // Check 5: Check for sequential letters (alphabetical sequences)
  const lowerName = trimmedName.toLowerCase();
  for (let i = 0; i < lowerName.length - 3; i++) {
    const charCode1 = lowerName.charCodeAt(i);
    const charCode2 = lowerName.charCodeAt(i + 1);
    const charCode3 = lowerName.charCodeAt(i + 2);
    const charCode4 = lowerName.charCodeAt(i + 3);

    // Check if 4 consecutive characters are in alphabetical order
    if (
      charCode2 === charCode1 + 1 &&
      charCode3 === charCode2 + 1 &&
      charCode4 === charCode3 + 1
    ) {
      return true;
    }
  }

  // Check 6: Check for common random string characteristics
  // Too many consecutive consonants
  const consonantSequences = trimmedName.match(
    /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/g
  );
  if (consonantSequences && consonantSequences.length > 0) {
    return true;
  }

  // Check 7: No repeating patterns and high entropy
  const charFrequency: { [key: string]: number } = {};
  for (const char of trimmedName.toLowerCase()) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  let entropy = 0;
  for (const char in charFrequency) {
    const probability = charFrequency[char] / trimmedName.length;
    entropy -= probability * Math.log2(probability);
  }

  // Random strings tend to have higher entropy than real names
  // Real names typically have entropy around 2-3, random strings higher
  if (entropy > 3.2 && trimmedName.length > 10) return true;

  // Check 8: Detect patterns like "asdefczvderfrvrgseafd"
  // - long strings with no apparent structure
  if (trimmedName.length > 15) {
    // Check if it looks like random keyboard mashing
    // Count direction changes in alphabetical order
    let directionChanges = 0;
    for (let i = 0; i < trimmedName.length - 1; i++) {
      const diff1 =
        trimmedName.toLowerCase().charCodeAt(i + 1) -
        trimmedName.toLowerCase().charCodeAt(i);
      const diff2 =
        i < trimmedName.length - 2
          ? trimmedName.toLowerCase().charCodeAt(i + 2) -
            trimmedName.toLowerCase().charCodeAt(i + 1)
          : 0;

      if (Math.sign(diff1) !== Math.sign(diff2) && diff1 !== 0 && diff2 !== 0) {
        directionChanges++;
      }
    }

    // If too many random direction changes, likely random
    if (directionChanges > trimmedName.length * 0.3) {
      return true;
    }
  }

  return false;
};

// Type definitions
type FormData = {
  userName: string;
  userEmail: string;
  userMessage: string;
  userPhone: string;
  countryCode: string;
};

// Validation errors only for fields that need validation
type ValidationErrors = {
  userName?: string;
  userEmail?: string;
  userPhone?: string;
};

// Type guard to check if a key is in ValidationErrors
const isValidatableField = (
  field: keyof FormData
): field is keyof ValidationErrors => {
  return ["userName", "userEmail", "userPhone"].includes(field);
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
  });
  const [error, setError] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Memoized country options
  const countryOptions = useMemo(
    () =>
      countries.map((country, index) => (
        <option key={index} value={country.code}>
          {country.code}
        </option>
      )),
    []
  );

  // Validate individual field
  const validateField = useCallback(
    (name: keyof ValidationErrors, value: string): string => {
      switch (name) {
        case "userName":
          if (!value.trim()) return "Name is required";
          if (value.length < 2) return "Name must be at least 2 characters";
          if (value.length > 50) return "Name is too long";

          // Check for random character sequences
          if (isRandomCharacterSequence(value)) {
            return "Please enter a valid name, not random characters";
          }

          // Additional check: Names should have at least one space or be reasonable length
          if (
            value.length > 15 &&
            !/\s/.test(value) &&
            !/[aeiouAEIOU]{2,}/.test(value)
          ) {
            return "Please enter a valid name";
          }

          return "";

        case "userEmail":
          if (!value.trim()) return "Email is required";
          if (!VALIDATION.EMAIL_REGEX.test(value))
            return "Please enter a valid email address";
          if (value.length > 100) return "Email is too long";
          return "";

        case "userPhone":
          if (!value.trim()) return "Phone number is required";
          if (!VALIDATION.PHONE_REGEX.test(value))
            return "Phone number must contain only digits";
          if (value.length !== VALIDATION.PHONE_LENGTH)
            return "Phone number must be exactly 10 digits";
          return "";

        default:
          return "";
      }
    },
    []
  );

  // Validate all fields (except message)
  const validateForm = useCallback((): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    // Validate only required fields (not including message)
    const fieldsToValidate: Array<keyof ValidationErrors> = [
      "userName",
      "userEmail",
      "userPhone",
    ];

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  }, [formData, validateField]);

  // Debounced field validation
  const validateFieldWithDebounce = useCallback(
    (name: keyof FormData, value: string) => {
      if (!submitAttempted) return;

      // Skip validation for message field
      if (name === "userMessage") return;

      // Type guard to ensure we're only validating validatable fields
      if (isValidatableField(name)) {
        const error = validateField(name, value);
        setValidationErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [submitAttempted, validateField]
  );

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
      const fieldName = name as keyof FormData;

      // Process value based on field type
      let processedValue = value;
      if (fieldName === "userPhone") {
        processedValue = value
          .replace(/\D/g, "")
          .slice(0, VALIDATION.PHONE_LENGTH);
      }

      setFormData((prev) => ({
        ...prev,
        [fieldName]: processedValue,
      }));

      // Validate field after state update (skip message field)
      if (fieldName !== "userMessage") {
        setTimeout(() => {
          validateFieldWithDebounce(fieldName, processedValue);
        }, VALIDATION.DEBOUNCE_DELAY);
      }
    },
    [validateFieldWithDebounce]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!validateForm()) {
      return;
    }

    if (!captchaInput) {
      setError("Captcha is required");
      return;
    }

    const correctAnswer = captcha;

    if (captchaInput !== correctAnswer) {
      setError("Captcha incorrect. Please try again.");
      //   generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        Domain: "anandvardhanresort",
        // Domain: "testmulti",
        email: formData.userEmail,
        Name: formData.userName,
        Contact: formData.userPhone,
        Description: formData.userMessage,
        created_from: "web-form",
        source_url: window.location.href,
      };

      const { data } = await axios.post(
        // "https://nexon.eazotel.com/eazotel/addcontacts",
        "https://google.com",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        // Reset form
        setFormData({
          userName: "",
          userEmail: "",
          userMessage: "",
          userPhone: "",
          countryCode: "+91",
        });
        setValidationErrors({});
        setSubmitAttempted(false);

        alert("Form submitted successfully!");
      } else {
        throw new Error("API returned non-success status");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form has any validation errors
  const hasErrors = useMemo(
    () => Object.values(validationErrors).some((error) => error),
    [validationErrors]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-base w-full h-full rounded-lg text-[#222]"
      id="contact"
      noValidate
    >
      {/* Name Field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 bg-white rounded-lg overflow-hidden border">
          <input
            id="Name"
            type="text"
            name="userName"
            placeholder="Full Name*"
            value={formData.userName}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full h-max px-4 py-3 outline-none bg-transparent disabled:opacity-50 "
          />
        </div>
        {validationErrors.userName && (
          <p className="text-red-500 text-sm px-1">
            {validationErrors.userName}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 bg-white rounded-lg overflow-hidden border">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="text-sm text-[#222] outline-none px-1 py-3 rounded-lg disabled:opacity-50"
            style={{ width: `${formData.countryCode.length + 5}ch` }}
          >
            {countryOptions}
          </select>
          <input
            type="tel"
            name="userPhone"
            placeholder="Phone Number*"
            value={formData.userPhone}
            onChange={handleChange}
            required
            maxLength={VALIDATION.PHONE_LENGTH}
            disabled={isSubmitting}
            pattern="\d{10}"
            className="w-full px-4 py-3 rounded-lg outline-none disabled:opacity-50"
          />
        </div>
        {validationErrors.userPhone && (
          <p className="text-red-500 text-sm px-1">
            {validationErrors.userPhone}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 bg-white rounded-lg overflow-hidden border">
          <input
            type="email"
            name="userEmail"
            placeholder="Email Address*"
            value={formData.userEmail}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg outline-none disabled:opacity-50"
          />
        </div>
        {validationErrors.userEmail && (
          <p className="text-red-500 text-sm px-1">
            {validationErrors.userEmail}
          </p>
        )}
      </div>

      {/* Message Field - No validation */}
      <div className="flex gap-3 bg-white rounded-lg overflow-hidden border">
        <textarea
          name="userMessage"
          placeholder="Tell us something about your enquiry!"
          value={formData.userMessage}
          onChange={handleChange}
          rows={5}
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg resize-none outline-none disabled:opacity-50"
        />
      </div>

      <CustomCaptchaForm
        isOpen={true}
        captcha={captcha}
        setCaptcha={setCaptcha}
        setCaptchaInput={setCaptchaInput}
        captchaInput={captchaInput}
        error={error}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || (submitAttempted && hasErrors)}
        className="bg-secondary text-sm font-semibold text-white px-5 py-3 capitalize hover:bg-secondary/80 duration-500 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
