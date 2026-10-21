"use client";

import React from "react";

const PARTNERS = [
  { name: "Jamie Oliver", src: "/images/Jamie-oliver.svg" },
  { name: "Comptoir Libanais", src: "/images/comptoir-libanais-1.svg" },
  { name: "British Red Cross", src: "/images/british-red-cross.svg" },
  { name: "Superyachts Monaco", src: "/images/sym.svg" },
  { name: "Penguin Random House", src: "/images/penguin.svg" },
  { name: "Raw", src: "/images/raw.svg" },
  { name: "Penhaligon's", src: "/images/penhaligons.svg" },
  { name: "Stoli", src: "/images/stoli.svg" },
  { name: "Bounce", src: "/images/bounce.svg" },
  { name: "Tangerine", src: "/images/tangerine.svg" },
  { name: "Tribepad", src: "/images/tribepad.svg" },
  { name: "Matchroom", src: "/images/matchroom.svg" },
  { name: "Diageo", src: "/images/diageo.svg" },
  { name: "Sonovate", src: "/images/sonovate.svg" },
  { name: "Saatchi & Saatchi", src: "/images/saatchi.svg" }
];

export default function PartnersMarquee() {
  return (
    <div
      id="partners"
      className="relative bg-black text-white z-20 overflow-hidden"
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "4rem"
      }}
    >
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "calc(1400px + 15%)",
          paddingLeft: "7.5%",
          paddingRight: "7.5%"
        }}
      >
        {/* Exact Staggered "OUR PARTNERS" Heading with Arrow */}
        <div
          className="flex justify-between items-baseline"
          style={{
            marginBottom: "1.6rem"
          }}
        >
          <h2
            className="flex flex-col uppercase font-normal text-white"
            style={{
              fontSize: "clamp(3.125rem, 10.6vw, 10rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              margin: "0 0 0.5rem"
            }}
          >
            <span>Our</span>
            <span
              style={{
                paddingLeft: "13.5%",
                margin: "0 0 2rem"
              }}
            >
              Partners
            </span>
          </h2>

          {/* Authentic Downward-Left Corner Arrow */}
          <div
            className="flex-shrink-0 flex items-end"
            style={{
              fontSize: "clamp(3.125rem, 10.6vw, 10rem)",
              lineHeight: 1,
              height: "1.18ch",
              transform: "translateY(-17%)"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 111.42 110.66"
              className="fill-white"
              style={{
                width: "clamp(2.5rem, 7.8vw, 6.96rem)",
                height: "auto"
              }}
            >
              <polygon points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66" />
            </svg>
          </div>
        </div>

        {/* 15 Partner Logos Grid matching live KOTA layout (3 rows of 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 lg:gap-x-10 gap-y-12 lg:gap-y-16 items-center justify-items-center mt-12 mb-8">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-full h-[3.75rem] group cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-full max-w-[70%] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
