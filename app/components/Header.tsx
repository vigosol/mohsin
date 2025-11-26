"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./ui/button";

const navItems = [
  {
    label: "About me",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Services",
    links: [
      { name: "Spoken", href: "/spoken" },
      { name: "Written", href: "/written" },
      { name: "Translator", href: "/translator" },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Books", href: "/books" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // small delay for smooth hover experience
  };

  return (
    <header className="w-full max-w-[1216px] mx-auto bg-transparent relative z-20 px-4 sm:px-6 md:px-8">
      <nav ref={navRef} className="flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Link href="#" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8 rounded-full border border-[#E0E0E0]"
            />
          </Link>
          <div className="hidden min-[951px]:flex items-center gap-8 text-[#374151] text-[16px] font-['Inter'] font-medium leading-[24px]">
            {navItems.map((item, index) =>
              item.links ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-[#0066FF] flex items-center gap-2 cursor-pointer">
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 mt-[1px] transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 flex flex-col bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-44 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.links.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.href}
                          className="px-4 py-2 hover:bg-gray-100 text-[#374151] text-[16px] font-['Inter'] font-medium leading-[24px]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-[#0066FF]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="hidden min-[951px]:block">
          <Button
            text="Start Learning"
            bgColor="bg-[#0072DE]"
            border="border border-[#0066FF]"
            textColor="text-white"
            width="w-31"
            height="h-9"
            fontSize="text-sm"
            rounded="rounded-lg"
            hoverColor="hover:bg-[#0052CC]"
          />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="min-[951px]:hidden flex justify-center items-center w-8 h-8 border border-gray-200 rounded-md"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M10.75 0.75L5.75 5.75L0.75 0.75"
                stroke="#374151"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="min-[951px]:hidden flex flex-col bg-white border-t border-gray-200 px-6 py-4 text-[#374151] text-[16px] font-['Inter'] font-medium leading-[24px]">
          {navItems.map((item, index) =>
            item.links ? (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex justify-between items-center py-2 hover:text-[#0066FF]"
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        openDropdown === item.label
                          ? "M5 15l7-7 7 7"
                          : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>

                {openDropdown === item.label && (
                  <div className="flex flex-col pl-4 border-l border-gray-100">
                    {item.links.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sub.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-1 hover:text-[#0066FF]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:text-[#0066FF]"
              >
                {item.label}
              </Link>
            )
          )}
          <Button
            text="Start Learning"
            bgColor="bg-[#0072DE]"
            border="border border-[#0066FF]"
            textColor="text-white"
            width="w-31"
            height="h-9"
            fontSize="text-sm"
            rounded="rounded-md"
            hoverColor="hover:bg-[#0052CC]"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
