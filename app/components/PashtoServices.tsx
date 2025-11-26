import Button from "./ui/button";

function PashtoServices() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row max-w-[1280px] mx-auto w-full items-center px-4 sm:px-6 md:px-8 py-10 sm:py-12 gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="flex flex-col gap-10 sm:gap-12 w-full max-w-[517px] sm:max-w-full sm:px-6 mx-auto lg:mx-0">
            {/* Heading Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex flex-col gap-2">
                <div className="text-[#0072DE] font-semibold text-[14px] sm:text-[16px] leading-5 sm:leading-6">
                  Services
                </div>
                <h1 className="text-gray-900 font-semibold text-[24px] sm:text-[30px] md:text-[36px] leading-[32px] sm:leading-[40px] md:leading-[44px] tracking-[-0.02em]">
                  Personalized Pashto Tutoring Services
                </h1>
              </div>
              <p className="text-[#4B5563] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-7">
                I offer customized Pashto tutoring sessions designed to match your learning goals,
                schedule, and language background. Here's how I can help:
              </p>
            </div>

            {/* Service Items */}
            <div className="flex flex-col gap-6">
              {/* Item 1 */}
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex justify-center items-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 7V12L15 15M21.9354 13.1419C22.1628 11.1493 21.7866 9.13425 20.8555 7.35823C19.9245 5.5822 18.4816 4.12709 16.7141 3.18166C14.9465 2.23622 12.9359 1.84407 10.9429 2.05608C8.94991 2.26808 7.06657 3.07446 5.53716 4.37062C4.00775 5.66678 2.90284 7.39291 2.36575 9.32511C1.82867 11.2573 1.88418 13.3064 2.5251 15.2067C3.16601 17.1069 4.36276 18.7706 5.9601 19.9819C7.55745 21.1933 9.48168 21.8964 11.4832 22M15 20L17.3333 22L22 18"
                      stroke="#0072DE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-gray-900 font-semibold text-[15px] sm:text-[18px] md:text-xl leading-[24px] sm:leading-[28px]">
                    1-on-1 Online Tutoring
                  </h3>
                  <p className="text-[#4B5563] text-[13px] sm:text-[15px] md:text-base leading-5 sm:leading-6">
                    Tailored lessons for beginners to advanced learners (via Zoom or Google Meet)
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex justify-center items-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21.2104 15.89C20.5742 17.3945 19.5792 18.7202 18.3123 19.7513C17.0454 20.7824 15.5452 21.4874 13.9428 21.8048C12.3405 22.1221 10.6848 22.0421 9.12055 21.5718C7.55627 21.1014 6.13103 20.2551 4.96942 19.1066C3.80782 17.9582 2.94522 16.5427 2.45704 14.9839C1.96886 13.4251 1.86996 11.7705 2.169 10.1646C2.46804 8.55877 3.1559 7.05061 4.17245 5.77202C5.189 4.49342 6.50329 3.4833 8.0004 2.82999M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z"
                      stroke="#0072DE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-gray-900 font-semibold text-[15px] sm:text-[18px] md:text-xl leading-[24px] sm:leading-[28px]">
                    Pashto for Travelers or Diplomats
                  </h3>
                  <p className="text-[#4B5563] text-[13px] sm:text-[15px] md:text-base leading-5 sm:leading-6">
                    Learn essential vocabulary, phrases, and cultural etiquette.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex justify-center items-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 20V10M12 20V4M6 20V14"
                      stroke="#0072DE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-gray-900 font-semibold text-[15px] sm:text-[18px] md:text-xl leading-[24px] sm:leading-[28px]">
                    Pashto for Academic or Professional Needs
                  </h3>
                  <p className="text-[#4B5563] text-[13px] sm:text-[15px] md:text-base leading-5 sm:leading-6">
                    Specialized coaching for university students, researchers, or officials.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex justify-center items-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 20V10M12 20V4M6 20V14"
                      stroke="#0072DE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-gray-900 font-semibold text-[15px] sm:text-[18px] md:text-xl leading-[24px] sm:leading-[28px]">
                    Group Classes / Corporate Training
                  </h3>
                  <p className="text-[#4B5563] text-[13px] sm:text-[15px] md:text-base leading-5 sm:leading-6">
                    Affordable and engaging sessions for institutions or employee training.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4">
              <Button
                text="View Courses"
                bgColor="bg-[var(--buttons-primary-bg-button-primary,#0072DE)]"
                border="border border-[#0066FF]"
                textColor="text-white"
                width="w-32 sm:w-36"
                height="h-11 sm:h-12"
                fontSize="text-[13px] sm:text-sm"
                rounded="rounded-lg"
                hoverColor="hover:bg-[#0052CC]"
              />
              <button className="flex justify-center cursor-pointer items-center gap-2 text-gray-700 font-medium text-[13px] sm:text-base leading-5 sm:leading-6 hover:text-gray-900 transition-all group">
                Book a Free Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M15.8333 10.0001L4.16666 10.0001M15.8333 10.0001L9.99999 4.16675M15.8333 10.0001L9.99999 15.8334"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end items-center pt-6 lg:pt-12 pl-0 lg:pl-12 bg-[#F9FAFB] rounded-3xl relative overflow-hidden">
          <div className="relative w-[85%] sm:w-[80%] lg:w-full max-w-[1023px] flex justify-center items-center mx-auto">
            <img
              src="/services.png"
              alt="Pashto Tutoring Services"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto object-contain transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PashtoServices;
