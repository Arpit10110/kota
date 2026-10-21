"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@kota.co.uk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="footer"
      className="relative bg-black text-white z-20 overflow-hidden"
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem"
      }}
    >
      {/* Authentic multi-layer cyan/teal/magenta/purple ambient nebula glow matching live site */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Vibrant Magenta/Pink bottom-right orb */}
        <div
          className="absolute"
          style={{
            bottom: "-8%",
            right: "-5%",
            width: "50vw",
            height: "50vh",
            background: "radial-gradient(circle at center, rgba(203, 36, 204, 0.6) 0%, rgba(147, 51, 234, 0.4) 40%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
        {/* Vibrant Cyan/Teal mid-bottom orb sweeping under newsletter, logos and sectors */}
        <div
          className="absolute"
          style={{
            bottom: "-5%",
            right: "8%",
            width: "48vw",
            height: "48vh",
            background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.55) 0%, rgba(20, 184, 166, 0.35) 40%, rgba(59, 130, 246, 0.18) 60%, transparent 75%)",
            filter: "blur(75px)"
          }}
        />
        {/* Subtle warm amber/coral glow in the center-bottom */}
        <div
          className="absolute"
          style={{
            bottom: "-5%",
            right: "26%",
            width: "35vw",
            height: "32vh",
            background: "radial-gradient(circle at center, rgba(234, 88, 12, 0.22) 0%, rgba(217, 119, 6, 0.12) 40%, transparent 65%)",
            filter: "blur(70px)"
          }}
        />
      </div>

      <div
        className="relative w-full mx-auto z-10 flex flex-col"
        style={{
          maxWidth: "calc(1400px + 15%)",
          paddingLeft: "7.5%",
          paddingRight: "7.5%"
        }}
      >
        {/* Top Row: KOTA Logo (left) and hello@kota.co.uk (right) */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            marginBottom: "3.25rem"
          }}
        >
          {/* Square KOTA Logo */}
          <Link href="/" aria-label="KOTA Home" className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 90"
              className="fill-white"
              style={{ width: "5.625rem", height: "5.625rem" }}
            >
              <path
                strokeWidth="0"
                d="M5 5h80v80H5V5zM0 90h90V0H0v90zm64.66-15.67l-5.15-16.61h-.1l-5.35 16.61H47.6l9.49-24.09h4.74l9.39 24.09h-6.56zm-39.77 0V55.67h-6.66v-5.43H37.6v5.43h-6.66v18.66h-6.06zm34.52-59.16c-3.94-.1-7.67 1.74-9.99 4.92-.64.81-1.15 1.7-1.52 2.67-.6 1.64-.9 3.38-.9 5.13v.05c.07 6.78 5.62 12.22 12.4 12.15h.56c6.88-.29 12.22-6.1 11.93-12.97-.28-6.69-5.79-11.96-12.48-11.94m.1 19.48c-3.94 0-6.56-3.38-6.56-7.18s2.62-6.97 6.46-6.97 6.46 3.38 6.46 7.07-2.52 7.08-6.36 7.08m-28.87 5.02l-6.46-10.35h-.1v10.35h-6.06v-24.1h6.06v10.87h.1l6.66-10.87h6.36l-7.87 12 8.38 12.1h-7.06z"
              />
            </svg>
          </Link>

          {/* hello@kota.co.uk with rainbow hover */}
          <div className="relative group cursor-pointer" onClick={copyEmail}>
            <span
              className="text-white font-normal transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#633cc9] hover:via-[#3b8392] hover:to-[#cb24cc]"
              style={{
                fontSize: "clamp(2rem, 7.1vw, 100.96px)",
                lineHeight: 1,
                letterSpacing: "-0.02em"
              }}
            >
              hello@kota.co.uk
            </span>
            <div className="absolute -top-7 right-0 text-xs font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {copied ? "Copied to clipboard!" : "Copy email address"}
            </div>
          </div>
        </div>

        {/* Row 2: Social Links (left) and Award Logos (right) */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            marginBottom: "2.5rem"
          }}
        >
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { name: "LinkedIn", href: "https://www.linkedin.com/company/kota-creative/" },
              { name: "Facebook", href: "https://www.facebook.com/kotacreative/" },
              { name: "Instagram", href: "https://www.instagram.com/kotalondon/" },
              { name: "Bluesky", href: "https://bsky.app/profile/kotacreative.bsky.social" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-white font-normal transition-opacity hover:opacity-80"
                style={{ fontSize: "1.25rem" }}
              >
                <span>{social.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12.69 12.69"
                  className="fill-white transition-transform duration-250 ease-in-out group-hover:translate-x-[25%] group-hover:-translate-y-[25%]"
                  style={{ width: "0.7rem", height: "0.7rem" }}
                >
                  <path d="M12.65.31a.504.504 0 00-.46-.31H.5C.22 0 0 .22 0 .5s.22.5.5.5h10.49L.55 11.43c-.2.2-.2.51 0 .71a.485.485 0 00.7 0L11.69 1.71v10.47c0 .28.22.5.5.5s.5-.22.5-.5V.52c0-.07 0-.14-.04-.21z" />
                </svg>
              </a>
            ))}
          </div>

          {/* 4 Award Logos with authentic colors matching live site */}
          <div className="flex items-center gap-8 flex-wrap">
            <img
              src="/images/DAN-1-500x167.png"
              alt="DAN Digital Agency Network"
              style={{ height: "2.25rem", width: "auto" }}
            />
            <img
              src="/images/clutch.svg"
              alt="Clutch"
              style={{ height: "2.25rem", width: "auto" }}
            />
            <img
              src="/images/awwwards.svg"
              alt="AWWWARDS"
              style={{ height: "2.25rem", width: "auto" }}
            />
            <img
              src="/images/cssda.svg"
              alt="CSSDA"
              style={{ height: "2.25rem", width: "auto" }}
            />
          </div>
        </div>

        {/* Row 3: Navigation Links (left) + "Sign up to our newsletter" Button (right) */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            marginBottom: "2.5rem"
          }}
        >
          <ul className="flex items-center gap-6 list-none p-0 m-0">
            <li>
              <Link href="/contact" className="text-white font-normal hover:opacity-80 transition-opacity" style={{ fontSize: "1.25rem" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-white font-normal hover:opacity-80 transition-opacity" style={{ fontSize: "1.25rem" }}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-white font-normal hover:opacity-80 transition-opacity" style={{ fontSize: "1.25rem" }}>
                Privacy Policy
              </Link>
            </li>
          </ul>

          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center text-white font-normal hover:bg-white hover:text-black transition-all duration-300"
            style={{
              padding: "0.8125rem 1.4375rem",
              fontSize: "1.25rem",
              lineHeight: 1,
              borderRadius: "50px",
              border: "2px solid #ffffff",
              backgroundColor: "transparent"
            }}
          >
            Sign up to our newsletter
          </Link>
        </div>

        {/* Row 4: Our Sectors (left) + © KOTA 2026 and Cyber Essentials (right) */}
        <div
          className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 pt-2"
        >
          {/* Sector Pills */}
          <div className="flex flex-wrap items-center">
            <span
              className="text-white font-normal"
              style={{
                fontSize: "1.125rem",
                marginRight: "10px",
                whiteSpace: "nowrap"
              }}
            >
              Our sectors :
            </span>
            <div className="flex flex-wrap items-center">
              {[
                { name: "Agencies", href: "https://kota.co.uk/agencies/" },
                { name: "SaaS and Tech", href: "https://kota.co.uk/b2b-tech-software-saas/" },
                { name: "B2B Transformation", href: "https://kota.co.uk/b2b-transformation/" },
                { name: "Healthcare", href: "https://kota.co.uk/healthcare/" },
                { name: "Media & Entertainment", href: "https://kota.co.uk/media-entertainment/" },
                { name: "Retail", href: "https://kota.co.uk/retail/" }
              ].map((sector) => (
                <a
                  key={sector.name}
                  href={sector.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-white hover:text-black transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    lineHeight: 1,
                    padding: "0.625rem 1.4375rem",
                    margin: "0.3125rem 0.625rem 0.3125rem 0",
                    whiteSpace: "nowrap"
                  }}
                >
                  {sector.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright & Cyber Essentials */}
          <div className="flex items-center flex-shrink-0" style={{ whiteSpace: "nowrap" }}>
            <span className="text-white font-normal" style={{ fontSize: "1.25rem", whiteSpace: "nowrap" }}>
              © KOTA 2026
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://registry.blockmarktech.com/certificates/f2732cc3-b4f0-4dd3-85ce-fa6ee589e132/"
              className="block flex-shrink-0"
              style={{ width: "75px", marginLeft: "1.5rem" }}
            >
              <img
                src="/images/cyber-essentials.svg"
                alt="cyber-essentials"
                style={{ width: "75px", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
