"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/button";

function PashtoBooks() {
  const books = [
    { image: "./book.png", title: "Learn Pashto – Core Foundations" },
    { image: "./book.png", title: "Pashto Grammar Essentials" },
    { image: "./book.png", title: "Pashto for Arabic Speakers" },
    { image: "./book.png", title: "Business Pashto – Professional Use" },
    { image: "./book.png", title: "Conversational Pashto – Daily Dialogue" },
  ];

  const [activeBookIndex, setActiveBookIndex] = useState(0);

  const handlePrev = () => {
    setActiveBookIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const handleNext = () => {
    setActiveBookIndex((prev) => (prev + 1) % books.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          <div className="flex-1 min-w-[300px] lg:min-w-[480px] max-w-[592px] sm:max-w-full sm:px-6 md:px-8">
            <div className="max-w-[517px] sm:max-w-full">
              <div className="mb-8">
                <h1 className="text-[36px] leading-[44px] font-semibold text-heading-primary mb-4 tracking-[-0.02em]">
                  Read My Pashto Language Books — Trusted by Students & Institutions
                </h1>
                <p className="text-lg leading-7 text-body">
                  I've authored multiple Pashto learning guides and textbooks that simplify the
                  language for students around the world. Whether you're a beginner or brushing up
                  your skills, these books are an excellent resource for self-study.
                </p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.75 7.5L8.75 12.5L6.67 10.42M18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.4 18.33 1.67 14.6 1.67 10C1.67 5.4 5.4 1.67 10 1.67C14.6 1.67 18.33 5.4 18.33 10Z"
                      stroke="#0072DE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-6 text-body flex-1">
                    Learn Pashto Through English – A Step-by-Step Guide
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.75 7.5L8.75 12.5L6.67 10.42M18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.4 18.33 1.67 14.6 1.67 10C1.67 5.4 5.4 1.67 10 1.67C14.6 1.67 18.33 5.4 18.33 10Z"
                      stroke="#0072DE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-6 text-body flex-1">
                    Pashto Made Easy – For Arabic Speakers
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.75 7.5L8.75 12.5L6.67 10.42M18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.4 18.33 1.67 14.6 1.67 10C1.67 5.4 5.4 1.67 10 1.67C14.6 1.67 18.33 5.4 18.33 10Z"
                      stroke="#0072DE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-base leading-6 text-body flex-1">
                    Pashto for Professionals – Business and Formal Language Use
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Button
                  text="Buy Now"
                  bgColor="bg-[var(--buttons-primary-bg-button-primary,#0072DE)]"
                  border="border border-[#0066FF]"
                  textColor="text-white"
                  width="w-26"
                  height="h-10"
                  fontSize="text-sm"
                  rounded="rounded-md"
                  hoverColor="hover:bg-[#0052CC]"
                />
                <button className="flex items-center gap-2 cursor-pointer text-button-link text-base leading-6 hover:opacity-80 transition-opacity">
                  <span>Download sample chapter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M15.8333 9.99984L4.16666 9.99984M15.8333 9.99984L9.99999 4.1665M15.8333 9.99984L9.99999 15.8332"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Carousel Controls - Desktop (beside text) */}
              <div className="hidden lg:flex items-center gap-4 mt-8 justify-start">
                <button
                  onClick={handlePrev}
                  aria-label="Previous book"
                  className="p-2 cursor-pointer flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white hover:bg-gray-50 transition-colors leading-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="block w-4 h-4"
                    fill="none"
                  >
                    <path
                      d="M12.5 5L7.5 10L12.5 15"
                      stroke="#374151"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next book"
                  className="p-2 cursor-pointer flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white hover:bg-gray-50 transition-colors leading-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="block w-4 h-4"
                    fill="none"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="#374151"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
         <div className="flex-1 min-w-[260px] sm:min-w-[340px] lg:min-w-[480px] max-w-[592px] relative">
  <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[588px] flex items-center justify-center overflow-hidden perspective-[1200px]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={books[activeBookIndex].title}
                  src={books[activeBookIndex].image}
                  alt={books[activeBookIndex].title}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[460px] h-auto object-contain relative z-10"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </AnimatePresence>
              <div
                className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none"
                style={{ top: "80%" }}
              ></div>
            </div>

            {/* Carousel Controls - Mobile (below image) */}
            <div className="flex lg:hidden items-center gap-4 mt-6 justify-center">
              <button
                onClick={handlePrev}
                aria-label="Previous book"
                className="p-2 cursor-pointer flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white hover:bg-gray-50 transition-colors leading-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="block w-4 h-4"
                  fill="none"
                >
                  <path
                    d="M12.5 5L7.5 10L12.5 15"
                    stroke="#374151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next book"
                className="p-2 cursor-pointer flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white hover:bg-gray-50 transition-colors leading-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="block w-4 h-4"
                  fill="none"
                >
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="#374151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PashtoBooks;
