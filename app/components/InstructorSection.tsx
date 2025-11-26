"use client";
import Image from "next/image";
function Instructor() {
  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-[1280px] p-8 mx-auto">
        <div className="relative w-full lg:flex-1 flex justify-center py-12">
          <div className="relative w-full  max-w-[592px] rounded-[10px] overflow-hidden mx-auto">
           <Image
  src="/instructor.svg"
  alt="Mohsin Ali Khan - Pashto Instructor"
  width={592}
  height={588}
  priority
  className="relative object-contain mx-auto h-auto w-[240px] sm:w-[360px] md:w-[480px] lg:w-[592px] transition-all duration-500 ease-in-out"
/>

          </div>
         <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 xl:bottom-20 xl:left-[58%] xl:translate-x-0 bg-white w-[80%] sm:w-[260px] md:w-[300px] p-4 sm:p-5 md:p-6 flex flex-col items-start gap-2 rounded-[10px] border-[6px] md:border-[7px] border-[#e2e3e2]/90 shadow-[-10px_12px_18px_-6px_rgba(18,26,43,0.5),-4px_6px_12px_-4px_rgba(18,26,43,0.3)] transition-all duration-300 z-10">
  <h3 className="text-[#111827] !font-['Roboto'] text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-[26px] sm:leading-[32px] md:leading-[36px]">
    Mohsin Ali Khan
  </h3>
  <div className="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 9L13.5 13.5L10.5 10.5L6 15M4.10526 4H19.8947C21.0574 4 22 4.89543 22 6V18C22 19.1046 21.0574 20 19.8947 20H4.10526C2.94256 20 2 19.1046 2 18V6C2 4.89543 2.94256 4 4.10526 4Z"
        stroke="#4B5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-[#6B7280] !font-['Roboto'] text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-4 sm:leading-5">
      Instructor
    </span>
  </div>
</div>

        </div>
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          <div className="max-w-[517px] sm:max-w-full sm:px-6 md:px-8 w-full text-center lg:text-left">
            <div className="mb-2">
              <span className="text-[#0072DE] font-['Inter'] text-[14px] sm:text-base font-semibold leading-6">
                About me
              </span>
            </div>
            <h1 className="text-[#111827] font-['Inter'] text-[24px] sm:text-[30px] md:text-[36px] font-semibold leading-tight tracking-[-0.72px] mb-4">
              Your Pashto Learning Journey Starts With the Right Guide
            </h1>
            <p className="text-[#4B5563] font-['Inter'] text-[14px] sm:text-[16px] md:text-[18px] leading-6 sm:leading-7">
              With years of experience teaching students from across the globe, I specialize in helping learners
              understand Pashto through their native language — be it English, Arabic, or Urdu. I hold certified degrees
              in languages and have proudly collaborated with various government institutions, which speaks to my
              credibility and expertise.
            </p>
            <p className="text-[#4B5563] font-['Inter'] text-[14px] sm:text-[16px] md:text-[18px] leading-6 sm:leading-7 mt-4">
              Whether you're learning Pashto for travel, work, academic goals, or cultural connection — I make the
              journey smooth, engaging, and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
