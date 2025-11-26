"use client";
import { useState } from "react";
import Button from "./ui/button";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] px-8 mx-auto py-12 border-b border-[#E5E7EB]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full text-center lg:text-left">
          {/* Left Text Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-[20px] font-semibold text-[#111827]">
              Subscribe to our newsletter
            </h2>
            <p className="text-base text-[#4B5563]">
              Join our community and never miss out on exciting opportunities.
            </p>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-[360px] h-12 px-3
                border border-[#D1D5DB] rounded-md
                text-sm placeholder:text-[#6B7280]
                focus:outline-none focus:ring-1 focus:ring-[#0072DE]
              "
            />

            <div className="flex-shrink-0">
              <Button
                text="Subscribe"
                bgColor="bg-[var(--buttons-primary-bg-button-primary,#0072DE)]"
                border="border border-[#0066FF]"
                textColor="text-white"
                width="w-[120px]"
                height="h-12"
                fontSize="text-base"
                rounded="rounded-lg"
                hoverColor="hover:bg-[#0052CC]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
