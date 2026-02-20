"use client";
import axios from "axios";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { ArrowUpIcon, CalendarIcon, DropDownIcon } from "@/icons/icons";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { countries } from "@/data/countryCode";

const Form = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  //  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const { min } = getDateInputLimits({
    showPast: false,
  });
  const offers = [
    // "Wellness Offers",
    "Wellness Package",
    "Spiritual Retreat",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    wellnessOffer: "",
    checkIn: "",
    checkOut: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    wellnessOffer: "",
    dateRange: "",
  });

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropDownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleDateRangeChange = (update: [Date | null, Date | null]) => {
    setDateRange(update);

    const [start, end] = update;
    const checkInString = start ? start.toISOString().split("T")[0] : "";
    const checkOutString = end ? end.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      checkIn: checkInString,
      checkOut: checkOutString,
    }));

    // Clear error when date is selected
    if (errors.dateRange) {
      setErrors((prev) => ({ ...prev, dateRange: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      wellnessOffer: "",
      dateRange: "",
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    // Offer validation
    if (!formData.wellnessOffer) {
      newErrors.wellnessOffer = "Please select an offer";
      isValid = false;
    }

    // Date range validation
    if (!formData.checkIn.trim() || !formData.checkOut.trim()) {
      newErrors.dateRange = "Please select both check-in and check-out dates";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.dateRange = "Check-out must be after check-in";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        // "https://nexon.eazotel.com/eazotel/addcontacts",
        "https://google.com",
        {
          Domain: "anandvardhanresort",
          email: formData.email,
          Name: `${formData.firstName} ${formData.lastName}`,
          Contact: formData.phone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          Description: `Offer: ${formData.wellnessOffer}, Check-in: ${formData.checkIn}, Check-out: ${formData.checkOut},`,
          created_from: "landing_page",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          wellnessOffer: "",
        });
        setDateRange([null, null]);
        setSubmitSuccess(true);
        window.open("/thank-you/", "_blank");
      } else {
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name*",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name*",
      required: true,
    },

    {
      name: "phone",
      type: "tel",
      placeholder: "Phone Number*",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address*",
      required: true,
    },
    {
      name: "wellnessOffer",
      type: "select",
      placeholder: "Select Offer*",
      required: true,
    },
    {
      name: "dateRange",
      type: "dateRange",
      placeholder: "Check-in & Check-out Dates*",
      required: true,
    },
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {inputFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            {field.type === "tel" ? (
              <div className="flex items-center rounded-lg divide-x divide-light bg-white">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className={`ps-3 py-3.5 bg-white focus:outline-none border-light rounded-l-md `}
                  aria-label="Country code"
                  style={{ width: `${countryCode.length * 2.5}ch` }}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="pl-2 w-full py-3.5 bg-white outline-none rounded-r-md"
                  aria-required={field.required}
                />
              </div>
            ) : field.type === "select" ? (
              <div className="relative md:col-span-2" ref={dropDownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-4 py-3.5 text-left bg-white border border-light rounded-lg  flex items-center justify-between ${
                    !formData.wellnessOffer ? "text-gray-400" : ""
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  {formData.wellnessOffer || field.placeholder}
                  <span
                    className={`${isDropdownOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                  >
                    <DropDownIcon />
                  </span>
                </button>
                {isDropdownOpen && (
                  <div
                    role="listbox"
                    className="absolute z-10 w-full mt-1 bg-white border border-light rounded-lg shadow-lg"
                  >
                    {offers.map((offer) => (
                      <button
                        key={offer}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            wellnessOffer: offer,
                          }));
                          setIsDropdownOpen(false);
                          setErrors((prev) => ({
                            ...prev,
                            wellnessOffer: "",
                          }));
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg"
                        role="option"
                        aria-selected={formData.wellnessOffer === offer}
                      >
                        {offer}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : field.type === "dateRange" ? (
              <div className="bg-white border border-light rounded-lg relative">
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={handleDateRangeChange}
                  minDate={new Date(min ?? Date.now())}
                  placeholderText={field.placeholder}
                  wrapperClassName="w-full !p-0 h-full bg-white border border-light rounded-lg"
                  className="px-4 py-4 bg-white w-full h-full rounded-lg focus:outline-none"
                  aria-required={field.required}
                  isClearable={true}
                />
                <div className="pointer-events-none absolute top-3.5 right-4">
                  <CalendarIcon />
                </div>
              </div>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="px-4 py-3.5 bg-white border border-light rounded-lg"
                aria-required={field.required}
              />
            )}
            {errors[field.name as keyof typeof errors] && (
              <p className="text-sm text-red-500 col-span-full px-2">
                {errors[field.name as keyof typeof errors]}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`py-4 px-6 bg-clr1 text-white rounded-full uppercase font-medium hover:bg-secondary transition-colors ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="flex items-center gap-2 justify-center">
              Submit <ArrowUpIcon />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
