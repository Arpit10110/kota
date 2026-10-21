"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

interface HeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

export default function Header({ onOpenMenu, isMenuOpen }: HeaderProps) {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setScrolled(window.scrollY > 80);
      const workSection = document.getElementById("work");
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        setIsDarkSection(rect.top <= 120);
      }
    };

    window.addEventListener("scroll", updateTheme, { passive: true });
    updateTheme();
    const interval = setInterval(updateTheme, 250);
    return () => {
      window.removeEventListener("scroll", updateTheme);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between pointer-events-none transition-colors duration-300"
      style={{ padding: "26px" }}
    >
      {/* Left: KOTA Logo */}
      <div className="flex items-center gap-6 pointer-events-auto">
        <Link
          href="/"
          className={`transition-colors duration-300 ${isDarkSection ? "text-white" : "text-black"}`}
          aria-label="KOTA Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 90"
            className="w-[3.25rem] h-[3.25rem] fill-current"
          >
            <path d="M5 5h80v80H5V5zM0 90h90V0H0v90zm64.66-15.67l-5.15-16.61h-.1l-5.35 16.61H47.6l9.49-24.09h4.74l9.39 24.09h-6.56zm-39.77 0V55.67h-6.66v-5.43H37.6v5.43h-6.66v18.66h-6.06zm34.52-59.16c-3.94-.1-7.67 1.74-9.99 4.92-.64.81-1.15 1.7-1.52 2.67-.6 1.64-.9 3.38-.9 5.13v.05c.07 6.78 5.62 12.22 12.4 12.15h.56c6.88-.29 12.22-6.1 11.93-12.97-.28-6.69-5.79-11.96-12.48-11.94m.1 19.48c-3.94 0-6.56-3.38-6.56-7.18s2.62-6.97 6.46-6.97 6.46 3.38 6.46 7.07-2.52 7.08-6.36 7.08m-28.87 5.02l-6.46-10.35h-.1v10.35h-6.06v-24.1h6.06v10.87h.1l6.66-10.87h6.36l-7.87 12 8.38 12.1h-7.06z" />
          </svg>
        </Link>
      </div>

      {/* Right: Actions */}
      <div className={`flex items-center gap-6 pointer-events-auto transition-opacity duration-200 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        {/* Exact KOTA "Hire us" Button: font-size 18px, padding 15.2px 21.6px 16.8px, hover:#ff34f3 */}
        <Magnetic strength={0.25}>
          <Link
            href="/start-your-project"
            className={`group inline-flex items-center gap-[0.7rem] font-normal leading-none rounded-[33px] transition-all duration-200 ${
              isDarkSection
                ? "bg-white text-black hover:bg-[#ff34f3] hover:text-white"
                : "bg-black text-white hover:bg-[#ff34f3]"
            }`}
            style={{
              padding: "15.2px 21.6px 16.8px",
              fontSize: "18px",
              lineHeight: "18px",
              height: "49.98px"
            }}
          >
            <span>Hire us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.1 15.17"
              className="w-[14px] h-[13px] fill-current transform translate-y-[0.1rem] group-hover:translate-x-1 transition-transform"
            >
              <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" fill="currentColor" />
            </svg>
          </Link>
        </Magnetic>

        {/* Circular Hamburger Menu Toggle: 3.25rem x 3.25rem, 2px border */}
        <Magnetic strength={0.35}>
          <button
            onClick={onOpenMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`w-[3.25rem] h-[3.25rem] flex flex-col items-center justify-center rounded-full transition-all duration-300 bg-transparent ${
              isDarkSection
                ? "border-white/50 text-white hover:border-white"
                : "border-black text-black hover:opacity-70"
            }`}
            style={{
              border: "2px solid currentColor"
            }}
          >
            <div className="relative w-6 h-4 flex items-center justify-center">
              <span
                className={`absolute w-6 h-[2px] rounded-[2px] transition-all duration-300 origin-center ${
                  isDarkSection ? "bg-white" : "bg-black"
                } ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[3px]"}`}
              />
              <span
                className={`absolute w-6 h-[2px] rounded-[2px] transition-all duration-300 origin-center ${
                  isDarkSection ? "bg-white" : "bg-black"
                } ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[3px]"}`}
              />
            </div>
          </button>
        </Magnetic>
      </div>
    </header>
  );
}
