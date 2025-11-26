import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1216px] py-8 sm:py-12 flex flex-col gap-8 sm:gap-12">
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <div className="flex items-start gap-2 lg:flex-1">
              <Link href="#" className="flex items-center gap-2">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="h-8 w-8 rounded-full border border-[#E0E0E0]"
                />
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              <Link
                href="/about"
                className="text-[#4B5563] text-center font-normal text-base leading-6 hover:text-[#111827] transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#4B5563] text-center font-normal text-base leading-6 hover:text-[#111827] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/courses"
                className="text-[#4B5563] text-center font-normal text-base leading-6 hover:text-[#111827] transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className="text-[#4B5563] text-center font-normal text-base leading-6 hover:text-[#111827] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/press"
                className="text-[#4B5563] text-center font-normal text-base leading-6 hover:text-[#111827] transition-colors"
              >
                Press
              </Link>
            </nav>
            <div className="flex flex-col justify-center items-center lg:items-end gap-2 lg:flex-1">
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M14.7916 2.4668H17.3486L11.7638 8.84805L18.3333 17.5328H13.1909L9.16038 12.2668L4.55343 17.5328H1.99232L7.96454 10.7057L1.66663 2.4668H6.93954L10.5791 7.27999L14.7916 2.4668ZM13.8937 16.0043H15.3097L6.16802 3.91541H4.64718L13.8937 16.0043Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_0_18467)">
                      <path
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="#9CA3AF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_18467">
                        <rect width="20" height="20" rx="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.3321 17.0422H13.4912V12.4C13.4912 11.2944 13.4731 9.87 12.0143 9.87C10.5342 9.87 10.3095 11.0767 10.3095 12.3222V17.0422H7.46861V7.49778H10.1935V8.80222H10.2329C10.6119 8.05222 11.5394 7.26111 12.9226 7.26111C15.8008 7.26111 16.3332 9.23667 16.3332 11.8078V17.0422H16.3321ZM4.26458 6.19444C4.04812 6.19466 3.83374 6.15039 3.63367 6.06416C3.43361 5.97792 3.25178 5.85141 3.09857 5.69185C2.94536 5.53228 2.82377 5.3428 2.74074 5.1342C2.65771 4.9256 2.61486 4.70198 2.61465 4.47611C2.61444 4.25024 2.65687 4.02653 2.73951 3.81777C2.82216 3.609 2.9434 3.41927 3.09631 3.2594C3.24922 3.09953 3.43082 2.97265 3.63072 2.88601C3.83063 2.79937 4.04493 2.75466 4.26139 2.75444C4.69855 2.754 5.11798 2.93479 5.4274 3.25704C5.73683 3.57929 5.9109 4.01661 5.91132 4.47278C5.91174 4.92895 5.73849 5.36661 5.42966 5.68949C5.12084 6.01236 4.70175 6.194 4.26458 6.19444ZM2.84093 17.0422H5.68611V7.49778H2.83986L2.84093 17.0422ZM17.7483 0H1.41407C0.633565 0 0 0.645556 0 1.44222V18.5567C0 19.3533 0.633565 20 1.41407 20H17.7483C18.5299 20 19.1667 19.3533 19.1667 18.5567V1.44222C19.1667 0.645556 18.5299 0 17.7483 0Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="w-full max-w-[1216px] pt-6 sm:pt-8 border-t border-[#E5E7EB]">
          <p className="text-[#4B5563] font-normal text-sm sm:text-base leading-6 text-center lg:text-left">
            © 2024 Mohsin Ali, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;