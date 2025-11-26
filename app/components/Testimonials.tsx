"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  avatarUrl?: string;
};

const DEFAULT_AVATAR = "/avatar.svg";
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I tried learning Pashto before, but never made progress — until I started sessions with this tutor. Learning through my native language made all the difference.",
    name: "Sara",
    location: "UAE",
    avatarUrl: "./avatar_testimonials.png",
  },
  {
    quote:
      "Clear structure, patient teaching, and practical speaking drills. I started using Pashto at work within weeks.",
    name: "Hamza",
    location: "KSA",
    avatarUrl: "./avatar_testimonials.png",
  },
  {
    quote:
      "Loved the bilingual approach. Explaining grammar in my native language removed the confusion completely.",
    name: "Amina",
    location: "Qatar",
    avatarUrl: "./avatar_testimonials.png",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <div className="flex py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 w-full">
      <div className="flex max-w-[1280px] flex-col items-center gap-4 sm:gap-6 w-full">
        <div className="flex max-w-[768px] flex-col items-start gap-3 sm:gap-4 w-full">
          <h1 className="w-full text-[#111827] text-center font-inter text-[22px] sm:text-[28px] md:text-4xl font-bold leading-[30px] sm:leading-[38px] md:leading-[44px] tracking-[-0.72px]">
            What our customers say
          </h1>
          <p className="w-full text-[#4B5563] text-center font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[26px] md:leading-[28px]">
            Explore the genuine feedback and testimonials from our satisfied students
          </p>
        </div>
        <div className="flex py-6 sm:py-8 md:py-16 px-4 sm:px-6 md:px-12 flex-col items-center gap-6 sm:gap-8 w-full rounded-2xl md:rounded-[32px] bg-[#F9FAFB] overflow-hidden">
          <div className="flex max-w-[768px] flex-col items-center gap-6 sm:gap-8 w-full relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.name + t.location}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center gap-6 sm:gap-8 text-center"
              >
                <blockquote className="w-full text-[#111827] font-inter text-[18px] sm:text-[22px] md:text-[30px] font-normal leading-[28px] sm:leading-[34px] md:leading-[42px] tracking-[-0.72px]">
                  “{t.quote}”
                </blockquote>

                <div className="flex flex-col justify-center items-center gap-3 sm:gap-4">
                  <motion.img
                    key={t.avatarUrl}
                    src={t.avatarUrl ?? DEFAULT_AVATAR}
                    alt={t.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    loading="lazy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-[#111827] font-inter text-[14px] sm:text-base font-bold leading-5 sm:leading-6">
                      {t.name}, {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
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
            onClick={next}
            aria-label="Next testimonial"
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

        <div className="sr-only" aria-live="polite">
          Showing testimonial {index + 1} of {TESTIMONIALS.length}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
