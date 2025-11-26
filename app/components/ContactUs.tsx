"use client";
import { useState, useRef, useEffect } from "react";
import Button from "./ui/button";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US (+1)",
    phone: "",
    message: "",
    agreedToPrivacy: false,
  });

  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (formRef.current && window.innerWidth >= 1024) {
        setFormHeight(formRef.current.clientHeight);
      } else {
        setFormHeight(null);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 md:py-24">
      <div className="w-full max-w-[1280px] px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT SIDE FORM */}
          <div
            ref={formRef}
            className="w-full max-w-full lg:max-w-[592px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-[#111827] leading-[44px] tracking-[-0.72px]">
                  Reach out to us
                </h1>
                <p className="text-lg text-[#4B5563] leading-7">
                  Contact us for questions, feedback, or inquiries.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm text-[#374151] leading-5">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="w-full px-3 py-2.5 text-base border border-[#D1D5DB] rounded-[10px] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#0072DE] focus:border-transparent shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm text-[#374151] leading-5">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="w-full px-3 py-2.5 text-base border border-[#D1D5DB] rounded-[10px] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#0072DE] focus:border-transparent shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-[#374151] leading-5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2.5 text-base border border-[#D1D5DB] rounded-[10px] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#0072DE] focus:border-transparent shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm text-[#374151] leading-5">
                    Phone number
                  </label>
                  <div className="relative w-full flex items-center rounded-[10px] border border-[#D1D5DB] shadow-sm focus-within:ring-2 focus-within:ring-[#0072DE] focus-within:border-transparent">
                    <div className="relative">
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none bg-transparent pl-3 pr-8 py-2.5 text-base text-[#111827] outline-none"
                      >
                        <option>US (+1)</option>
                        <option>UK (+44)</option>
                        <option>CA (+1)</option>
                        <option>PK (+92)</option>
                        <option>AE (+971)</option>
                        <option>AU (+61)</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 0.75L5.75 5.75L0.75 0.75"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="flex-1 bg-transparent py-2.5 pr-3 pl-3 text-base placeholder:text-[#6B7280] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm text-[#374151] leading-5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows={5}
                    className="w-full px-3.5 py-3 text-base border border-[#D1D5DB] rounded-[10px] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#0072DE] focus:border-transparent shadow-sm resize-none"
                  />
                  <p className="text-sm text-[#6B7280] leading-5">Helper text</p>
                </div>

                <div className="flex gap-2 items-start">
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      id="agreedToPrivacy"
                      name="agreedToPrivacy"
                      checked={formData.agreedToPrivacy}
                      onChange={handleChange}
                      className="w-4 h-4 border border-[#D1D5DB] rounded accent-[#0072DE] focus:ring-2 focus:ring-[#0072DE]"
                    />
                  </div>
                  <label htmlFor="agreedToPrivacy" className="text-sm text-[#4B5563] leading-5">
                    By reaching out to us, you agree to our{" "}
                    <a href="#" className="text-[#0072DE] hover:underline">
                      Privacy Policy.
                    </a>
                  </label>
                </div>

                <Button
                  text="Send message"
                  bgColor="bg-[var(--buttons-primary-bg-button-primary,#0072DE)]"
                  border="border border-[#0066FF]"
                  textColor="text-white"
                  width="w-full"
                  height="h-11"
                  fontSize="text-sm"
                  rounded="rounded-lg"
                  hoverColor="hover:bg-[#0052CC]"
                />
              </form>
            </div>
          </div>

          {/* RIGHT SIDE - Responsive Map */}
          <div
            className="w-full lg:max-w-[592px] mx-auto lg:mx-0 lg:ml-auto flex-grow"
            style={{
              height:
                formHeight && window.innerWidth >= 1024
                  ? `${formHeight}px`
                  : "260px", // reduced height for small screens
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24155.170541127057!2d-74.0110668!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316eccbfa9%3A0x94f6dba61e7a25d6!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1730625859001!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
