"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

export default function FloatingStartButton() {
  const [visible, setVisible] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // In KOTA, floating Start your project button appears once user scrolls past hero
      setVisible(window.scrollY > 300);

      const workSection = document.getElementById("work");
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        setIsDarkSection(rect.top <= 120);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 z-20 transition-all duration-300 pointer-events-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ right: "26px", bottom: "26px" }}
    >
      <div className="pointer-events-auto">
        <Magnetic strength={0.25}>
          <Link
            href="/start-your-project"
            className={`group inline-flex items-center gap-[0.7rem] text-[1.125rem] font-normal leading-none rounded-[2.0625rem] transition-all duration-200 shadow-xl border ${
              isDarkSection
                ? "bg-white text-black hover:bg-[#ff34f3] hover:text-white border-transparent"
                : "bg-black text-white hover:bg-[#ff34f3] border-transparent"
            }`}
            style={{
              padding: "15.2px 21.6px 16.8px",
              fontSize: "18px",
              lineHeight: "18px",
              height: "49.98px",
              borderRadius: "33px"
            }}
          >
            <span>Start your project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.1 15.17"
              className="w-[18px] h-[15px] fill-current transform translate-y-[1px] group-hover:translate-x-1 transition-transform"
            >
              <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" fill="currentColor" />
            </svg>
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}
