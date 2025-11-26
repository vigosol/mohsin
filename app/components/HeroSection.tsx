"use client";
import Image from "next/image";
import Button from "./ui/button";
function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[85vh] overflow-hidden max-w-[1280px] p-8 mx-auto flex flex-col md:flex-row items-center justify-between bg-[url('/herobg.svg')] bg-cover bg-center z-1"
    >
      <div className="w-full md:w-1/2 relative flex flex-col gap-6 text-center md:text-left mt-8 md:mt-0">
        <h1 className="font-Inter xl:text-[46px] md:text-[30px] sm:text-[25px] xs:text-[25px] text-[46px] font-bold text-[#1E1E1E] leading-tight">
          <span className="whitespace-nowrap">Learn Pashto the Right Way</span><br />From a Certified Tutor
        </h1>
        <p className="text-gray-600 text-[18px] leading-relaxed">
          Master the Pashto language through your native language — English,
          Arabic or Urdu — with a trusted expert who has worked with
          international governments and authored widely respected books.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
          <Button
            text="Start Learning"
            bgColor="bg-[var(--buttons-primary-bg-button-primary,#0072DE)]"
            hoverColor="hover:bg-[#0052CC]"
            textColor="text-white"
            width="w-36"
            fontSize="text-[16px]"
            height="h-12"
            rounded="rounded-lg"
          />
          <button className="inline-flex items-center gap-2 text-[#1E1E1E] font-medium hover:text-[#0066FF] transition-colors align-middle">
            <span className="leading-none text-[#374151] text-[16px] cursor-pointer">
              Book a Free Consultation
            </span>
            <Image
              src="/arrow-right.svg"
              alt="Arrow Right"
              width={20}
              height={20}
              className="object-contain translate-y-[1px] flex-shrink-0 inline-block"
            />
          </button>
        </div>
        <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
          <Image
            src="/avatarstack.png"
            alt="student1"
            width={100}
            height={100}
            className="rounded-full border-2 border-white"
          />
          <p className="text-[14px] text-gray-600">Over 9k+ happy students</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative z-10 flex justify-center items-center mt-10 md:mt-0">
        <Image
  src="./man.svg"
  alt="Tutor"
  width={420}
  height={420}
  priority
  className="relative z-10 object-contain w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px] h-auto mx-auto"
/>
      </div>
    </section>
  );
};
export default HeroSection;
