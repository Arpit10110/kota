"use client";

import React, { useState } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Background Dimming Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/25 z-[80] backdrop-blur-[1px] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Floating KOTA Menu Card on Top-Right */}
      <aside
        className={`fixed top-4 sm:top-5 right-4 sm:right-5 w-[18.5rem] sm:w-[19.5rem] bg-white text-black rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.16)] z-[90] transform origin-top-right transition-all duration-300 ease-[cubic-bezier(0.75,0,0.25,1)] ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
        style={{
          padding: "1.75rem 1.75rem 1.625rem 1.875rem"
        }}
      >
        {/* Top-Right Circular Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full border-[1.5px] border-black flex items-center justify-center bg-transparent text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px] stroke-current stroke-[1.5]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        {/* Links */}
        <nav className="pt-0.5">
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link
                href="/#work"
                onClick={onClose}
                className="text-[21px] sm:text-[22px] font-normal text-black leading-[1.25] tracking-[-0.01em] hover:opacity-60 transition-opacity block"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="https://kota.co.uk/agency/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-[21px] sm:text-[22px] font-normal text-black leading-[1.25] tracking-[-0.01em] hover:opacity-60 transition-opacity block"
              >
                Agency
              </Link>
            </li>
            <li>
              <div
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 cursor-pointer text-[21px] sm:text-[22px] font-normal text-black leading-[1.25] tracking-[-0.01em] hover:opacity-60 transition-opacity select-none"
              >
                <span>Services</span>
                <span className="text-[19px] font-light leading-none transform translate-y-[-1px]">
                  {servicesOpen ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  servicesOpen ? "max-h-[200px] mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="flex flex-col gap-1.5 pl-3 border-l-2 border-black/15 py-1">
                  <li>
                    <Link
                      href="https://kota.co.uk/service/brand-strategy-and-identity/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="text-[15px] font-normal text-neutral-800 hover:text-black hover:opacity-70 transition-opacity block"
                    >
                      Brand strategy &amp; identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://kota.co.uk/service/web-design-development/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="text-[15px] font-normal text-neutral-800 hover:text-black hover:opacity-70 transition-opacity block"
                    >
                      Web design &amp; development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://kota.co.uk/service/growth-marketing/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="text-[15px] font-normal text-neutral-800 hover:text-black hover:opacity-70 transition-opacity block"
                    >
                      Growth marketing
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/#articles"
                onClick={onClose}
                className="text-[21px] sm:text-[22px] font-normal text-black leading-[1.25] tracking-[-0.01em] hover:opacity-60 transition-opacity block"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://kota.co.uk/culture/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-[21px] sm:text-[22px] font-normal text-black leading-[1.25] tracking-[-0.01em] hover:opacity-60 transition-opacity block"
              >
                Culture
              </Link>
            </li>
            <li>
              <Link
                href="https://kota.co.uk/contact/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-[21px] sm:text-[22px] font-normal text-black leading-[1.25] tracking-[-0.01em] hover:opacity-60 transition-opacity block"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Start your project Pill Button */}
          <div className="mt-6">
            <Magnetic strength={0.25}>
              <Link
                href="https://kota.co.uk/contact/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group inline-flex items-center justify-between w-full rounded-full border-[1.5px] border-black text-black font-normal hover:bg-black hover:text-white transition-all duration-300"
                style={{
                  height: "44px",
                  padding: "0 1.25rem",
                  fontSize: "15px",
                  lineHeight: "1"
                }}
              >
                <span>Start your project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17.1 15.17"
                  className="w-3.5 h-3.5 fill-current transform group-hover:translate-x-1 transition-transform ml-2 shrink-0"
                >
                  <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" />
                </svg>
              </Link>
            </Magnetic>
          </div>
        </nav>
      </aside>
    </>
  );
}
