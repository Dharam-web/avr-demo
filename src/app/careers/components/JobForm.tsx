"use client";
import useClickOutside from "@/hooks/useClickOutside";
import axios from "axios";
import { useMemo, useRef, useState } from "react";
import { contact } from "../../../../constent";
import { ArrowUpIcon } from "@/components/cards/RoomAndSuitesCard";

const JobForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userJobDetails: "",
    userPhone: "",
    userLinkedin: "",
    userResume: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    userJobDetails: "",
    userPhone: "",
    userLinkedin: "",
    userResume: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const jobs = useMemo(
    () => ["Select Job Title", "Job1", "Job2", "Job3", "Job4"],
    []
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropDownRef, () => {
    if (isDropdownOpen) setIsDropdownOpen(false);
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {
      userName: "",
      userEmail: "",
      userJobDetails: "",
      userPhone: "",
      userLinkedin: "",
      userResume: "",
    };

    // Name validation
    if (!formData.userName.trim()) {
      newErrors.userName = "Full name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.userEmail)) {
      newErrors.userEmail = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.userPhone) {
      newErrors.userPhone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.userPhone)) {
      newErrors.userPhone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Job title validation
    if (!formData.userJobDetails || formData.userJobDetails === "Select Job Title") {
      newErrors.userJobDetails = "Please select a job title";
      isValid = false;
    }

    // LinkedIn URL validation
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i;
    if (!formData.userLinkedin) {
      newErrors.userLinkedin = "LinkedIn URL is required";
      isValid = false;
    } else if (!linkedinRegex.test(formData.userLinkedin)) {
      newErrors.userLinkedin = "Please enter a valid LinkedIn URL";
      isValid = false;
    }

    // Resume URL validation
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;
    if (!formData.userResume) {
      newErrors.userResume = "Resume URL is required";
      isValid = false;
    } else if (!urlRegex.test(formData.userResume)) {
      newErrors.userResume = "Please enter a valid URL";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // For phone input, only allow numbers and limit to 10 digits
    if (name === "userPhone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        // "https://nexon.eazotel.com/career/create",
        "https://google.com",
        {
          domain: contact.domain,
          name: formData.userName,
          email: formData.userEmail,
          contact: formData.userPhone,
          jobtitle: formData.userJobDetails,
          linkedin: formData.userLinkedin,
          resume: formData.userResume,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setSubmitSuccess(true);
        // Reset form on success
        setFormData({
          userName: "",
          userEmail: "",
          userJobDetails: "",
          userPhone: "",
          userLinkedin: "",
          userResume: "",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        alert("Something went wrong with the submission");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      {/* Success Message */}
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 font-medium">Application submitted successfully!</span>
          </div>
          <p className="text-green-600 text-sm mt-1">We&apos;ll review your application and get back to you soon.</p>
        </div>
      )}
      
      <form className="" onSubmit={handleSubmit}>
        <div className="lg:grid flex flex-col grid-cols-2 gap-4 text-black">
          {/* Name Field */}
          <div className="rounded-md">
            <input
              type="text"
              name="userName"
              placeholder="Your Name*"
              className="w-full p-4 outline-none focus:outline-none bg-white placeholder:text-Light"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && (
              <p className="text-sm text-red-500 mt-1">{errors.userName}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="rounded-md">
            <input
              type="tel"
              name="userPhone"
              placeholder="Your Phone Number*"
              className="w-full p-4 outline-none focus:outline-none bg-white placeholder:text-Light"
              value={formData.userPhone}
              onChange={handleChange}
            />
            {errors.userPhone && (
              <p className="text-sm text-red-500 mt-1">{errors.userPhone}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="rounded-md">
            <input
              type="email"
              name="userEmail"
              className="w-full p-4 outline-none focus:outline-none bg-white placeholder:text-Light"
              placeholder="Your Email*"
              value={formData.userEmail}
              onChange={handleChange}
            />
            {errors.userEmail && (
              <p className="text-sm text-red-500 mt-1">{errors.userEmail}</p>
            )}
          </div>

          {/* Job Title Dropdown */}
          <div className="rounded-md">
            <div className="relative md:col-span-2 w-full" ref={dropDownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full p-4 text-left bg-white flex items-center justify-between ${
                  !formData.userJobDetails ? "text-Light" : "text-black"
                }`}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
              >
                {formData.userJobDetails || "Select Position"}
                <span
                  className={`${isDropdownOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                >
                  <FromDropDown />
                </span>
              </button>
              {isDropdownOpen && (
                <div
                  role="listbox"
                  className="absolute z-30 top-full left-0 w-full mt-1 bg-white border border-light shadow-lg"
                >
                  {jobs.map((job) => (
                    <button
                      key={job}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          userJobDetails: job,
                        }));
                        setIsDropdownOpen(false);
                        setErrors((prev) => ({
                          ...prev,
                          userJobDetails: "",
                        }));
                      }}
                      className="block w-full px-4 py-2 text-dark hover:bg-gray-100 text-start"
                      role="option"
                      aria-selected={formData.userJobDetails === job}
                    >
                      {job}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.userJobDetails && (
              <p className="text-sm text-red-500 mt-1">
                {errors.userJobDetails}
              </p>
            )}
          </div>

          {/* LinkedIn URL */}
          <div className="rounded-md">
            <input
              type="url"
              name="userLinkedin"
              placeholder="Linkedin"
              className="w-full p-4 outline-none focus:outline-none bg-white placeholder:text-Light"
              value={formData.userLinkedin}
              onChange={handleChange}
            />
            {errors.userLinkedin && (
              <p className="text-sm text-red-500 mt-1">{errors.userLinkedin}</p>
            )}
          </div>

          {/* Resume URL */}
          <div className="rounded-md">
            <input
              type="url"
              name="userResume"
              placeholder="Resume URL (Google Drive, Dropbox, etc.)"
              className="w-full p-4 outline-none focus:outline-none bg-white placeholder:text-Light"
              value={formData.userResume}
              onChange={handleChange}
            />
            {errors.userResume && (
              <p className="text-sm text-red-500 mt-1">{errors.userResume}</p>
            )}
          </div>
        </div>

        <div className="py-4 flex justify-center mt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-5 py-3 w-fit rounded-full active:scale-90  ${
              isSubmitting
                ? "bg-light cursor-not-allowed"
                : "bg-clr1 hover:bg-orange-600 text-white"
            } duration-500 `}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <span className="flex items-center gap-2">
                Submit
                <span className="">
                  <ArrowUpIcon />
                </span>
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;

export const FromDropDown = () => (
  <svg
    width={28}
    height={17}
    viewBox="0 0 28 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 2.17778L25.6667 -1.01993e-07L14 11.5111L2.33333 -1.12193e-06L-9.51937e-08 2.17778L14 16.1778L28 2.17778Z"
      fill="#FF8A47"
    />
  </svg>
);