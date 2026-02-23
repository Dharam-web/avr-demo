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
    resumeFile: null as File | null,
  });

  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    userJobDetails: "",
    userPhone: "",
    resumeFile: "",
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
      resumeFile: "",
    };

    // Name validation
    if (!formData.userName.trim()) {
      newErrors.userName = "Full name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
      isValid = false;
    }

    // Phone validation
    if (!formData.userPhone) {
      newErrors.userPhone = "Phone number is required";
      isValid = false;
    }

    // Job title validation
    if (!formData.userJobDetails || formData.userJobDetails === "Select Job Title") {
      newErrors.userJobDetails = "Please select a job title";
      isValid = false;
    }

    // Resume File validation
    if (!formData.resumeFile) {
      newErrors.resumeFile = "Please upload a resume";
      isValid = false;
    } else {
      const fileSize = formData.resumeFile.size / (1024 * 1024); // Size in MB
      if (fileSize > 20) {
        newErrors.resumeFile = "File size must be less than 20 MB";
        isValid = false;
      }
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resumeFile: file }));
    if (errors.resumeFile) {
      setErrors((prev) => ({ ...prev, resumeFile: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append("domain", contact.domain);
      formDataWithFile.append("name", formData.userName);
      formDataWithFile.append("email", formData.userEmail);
      formDataWithFile.append("contact", formData.userPhone);
      formDataWithFile.append("jobtitle", formData.userJobDetails);
      if (formData.resumeFile) {
        formDataWithFile.append("resume", formData.resumeFile);
      }

      const { data } = await axios.post(
        "https://google.com",
        formDataWithFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.Status || data.success) {
        setSubmitSuccess(true);
        // Reset form on success
        setFormData({
          userName: "",
          userEmail: "",
          userJobDetails: "",
          userPhone: "",
          resumeFile: null,
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
                className={`w-full p-4 text-left bg-white flex items-center justify-between ${!formData.userJobDetails ? "text-Light" : "text-black"
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

          {/* Resume File Upload Field */}
          <div className="lg:col-span-2 rounded-md">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Resume
            </label>
            <p className="text-xs text-gray-500 mb-3">
              Upload Resume PDF File Type (20 MB max)
            </p>
            <input
              type="file"
              name="resumeFile"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white cursor-pointer file:cursor-pointer file:bg-clr1 file:text-white file:border-0 file:px-4 file:py-2 file:rounded hover:border-clr1 transition-colors"
            />
            {formData.resumeFile && (
              <p className="text-sm text-green-600 mt-2">✓ {formData.resumeFile.name} selected</p>
            )}
            {errors.resumeFile && (
              <p className="text-sm text-red-500 mt-2">{errors.resumeFile}</p>
            )}
          </div>
        </div>

        <div className="py-4 flex justify-center mt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-5 py-3 w-fit rounded-full active:scale-90  ${isSubmitting
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