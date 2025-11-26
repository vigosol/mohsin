"use client";
import { useRef, useState } from "react";

type FaqItem = { question: string; answer: string };

function Questions() {
  const faqItems: FaqItem[] = [
    {
      question: "How do I get started with your product?",
      answer:
        "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfer for annual invoices.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes—enjoy a 14-day free trial with full access to core features. No credit card required to start.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Absolutely. You can reach us via in-app chat and email, 24/5. Paid plans include priority support and access to our help center.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, cancel anytime from the Billing page. Your plan stays active until the end of the current billing period—no hidden fees.",
    },
    {
      question: "Is my data secure with your product?",
      answer:
        "We use encryption in transit and at rest, role-based access, regular backups, and industry-standard security practices to protect your data.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const toggle = (i: number) => setOpenIndex((curr) => (curr === i ? null : i));

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex w-full lg:max-w-[1280px] flex-col items-center gap-10 sm:gap-14 lg:gap-16 px-4 sm:px-6 md:px-8 py-10 sm:py-14">
        {/* Header Section */}
        <div className="flex w-full max-w-[768px] flex-col items-center gap-3 sm:gap-4 text-center">
          <h1 className="text-[22px] sm:text-[28px] md:text-[36px] font-bold leading-[30px] sm:leading-[38px] md:leading-[44px] tracking-[-0.72px] text-[#111827]">
            Frequently asked questions
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] text-[#4B5563] max-w-[640px]">
            For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-[768px]">
          <div className="border-t border-[#E5E7EB]">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              const contentId = `faq-content-${i}`;
              const triggerId = `faq-trigger-${i}`;

              const currentRef = (el: HTMLDivElement | null) => {
                contentRefs.current[i] = el;
              };

              const maxHeight =
                isOpen && contentRefs.current[i]
                  ? `${contentRefs.current[i]!.scrollHeight}px`
                  : "0px";

              return (
                <div key={i} className="border-b border-[#E5E7EB]">
                  <button
                    id={triggerId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    className="flex cursor-pointer w-full items-start justify-between gap-4 sm:gap-6 py-4 sm:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/10"
                  >
                    <span className="pr-4 sm:pr-6 text-[15px] sm:text-[17px] md:text-[18px] font-medium leading-[22px] sm:leading-[26px] md:leading-[28px] text-[#111827]">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0">
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19 12L5 12"
                            stroke="#4B5563"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 19L12 5.00002M19 12L5.00002 12"
                            stroke="#4B5563"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  {item.answer && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={triggerId}
                      style={{ maxHeight }}
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div
                        ref={currentRef}
                        className="pb-5 sm:pb-6 pt-1 text-[13px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[24px] text-[#4B5563]"
                      >
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
