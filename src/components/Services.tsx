"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { SERVICES_DATA } from "@/lib/data";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Heading scroll animation state: scale 1 -> 0.75, opacity 1 -> 0
  const [headingAnim, setHeadingAnim] = useState({ scale: 1, opacity: 1 });

  // Stacking card scales (solid opacity 1.0 at all times so no text bleeds through)
  const [cardScales, setCardScales] = useState<number[]>([1, 1, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const stickyTop = Math.max(70, (vh - 655) / 2);

      // 1. Heading animation: as Card 0 approaches vertical center, heading scales down & fades
      const card0 = cardRefs.current[0];
      if (card0) {
        const r0 = card0.getBoundingClientRect();
        const startY = vh * 0.9;
        const endY = stickyTop + 120;
        const rawProgress = (startY - r0.top) / (startY - endY);
        const progress = Math.min(1, Math.max(0, rawProgress));

        const scale = 1 - progress * 0.25; // 1.0 -> 0.75
        const opacity = Math.max(0, 1 - progress * 1.0); // 1.0 -> 0.0

        setHeadingAnim({ scale, opacity });
      }

      // 2. Card stacking effect:
      // Cards maintain 100% solid opacity (no transparency ghosting).
      // When subsequent card scrolls up to stickyTop, previous cards scale down slightly in the background.
      const newScales = [1, 1, 1];

      // Overlap of Card 1 on Card 0
      const card1 = cardRefs.current[1];
      if (card1) {
        const r1 = card1.getBoundingClientRect();
        const progress1 = Math.min(1, Math.max(0, (vh - r1.top) / (vh - stickyTop)));
        newScales[0] = 1 - progress1 * 0.05; // 1.0 -> 0.95
      }

      // Overlap of Card 2 on Card 1 (and deeper on Card 0)
      const card2 = cardRefs.current[2];
      if (card2) {
        const r2 = card2.getBoundingClientRect();
        const progress2 = Math.min(1, Math.max(0, (vh - r2.top) / (vh - stickyTop)));
        newScales[1] = 1 - progress2 * 0.05; // 1.0 -> 0.95

        // When card 2 is covering, card 0 scales down further
        if (progress2 > 0) {
          newScales[0] = Math.min(newScales[0], 0.95 - progress2 * 0.05); // down to 0.90
        }
      }

      setCardScales(newScales);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-transparent text-black z-20"
      style={{
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "4rem"
      }}
    >
      {/* 1. Sticky / Pinned "OUR SERVICES" Heading that scales and fades on scroll */}
      <div
        className="sticky top-[100px] sm:top-[120px] z-10 pointer-events-none w-full"
        style={{
          marginBottom: "-120px"
        }}
      >
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: "calc(1400px + 15%)",
            paddingLeft: "7.5%",
            paddingRight: "7.5%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <h2
            ref={headingRef}
            className="relative flex items-end justify-between w-full"
            style={{
              transform: `scale(${headingAnim.scale})`,
              opacity: headingAnim.opacity,
              transformOrigin: "center center",
              transition: "transform 0.08s ease-out, opacity 0.08s ease-out",
              willChange: "transform, opacity",
              visibility: headingAnim.opacity <= 0.01 ? "hidden" : "visible"
            }}
          >
            <div className="flex flex-col text-[clamp(3.5rem,11.5vw,10.5rem)] uppercase font-normal tracking-[-0.03em] leading-[0.88] select-none text-black">
              <span>Our</span>
              <span style={{ paddingLeft: "13.5%" }}>Services</span>
            </div>

            {/* Signature KOTA Corner Diagonal Arrow */}
            <div className="hidden sm:flex items-end justify-end mb-4">
              <svg
                className="w-12 h-12 lg:w-16 lg:h-16 text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 111.42 110.66"
              >
                <polygon points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66" />
              </svg>
            </div>
          </h2>
        </div>
      </div>

      {/* Spacer before first card to allow heading to be fully visible before card arrives */}
      <div className="h-[8vh] pointer-events-none" />

      {/* 2. Full-Width Stacking Service Panels (Centered and stacked with solid white background) */}
      <div
        className="w-full mx-auto relative z-20 px-[26px] block"
        style={{
          maxWidth: "1407px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {SERVICES_DATA.map((service, idx) => (
          <div
            key={service.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="sticky w-full origin-top transition-transform duration-150 ease-out mx-auto"
            style={{
              top: `calc(max(70px, calc((100svh - 655px) / 2)) + ${idx * 14}px)`,
              zIndex: idx + 10,
              marginBottom: "0px",
              maxWidth: "1355px",
              marginLeft: "auto",
              marginRight: "auto",
              transform: `scale(${cardScales[idx]})`,
              willChange: "transform"
            }}
          >
            {/* White Card Shell - 100% Solid Opaque Background to completely cover previous cards */}
            <div
              className="w-full bg-white rounded-[2.5rem] lg:rounded-[4rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between mx-auto"
              style={{
                padding: "50px 50px 50px clamp(2rem, 5vw, 71px)",
                minHeight: "655px",
                height: "655px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              {/* Left Column Content - Exact 600px width with large 100px typography */}
              <div
                className="w-full lg:w-[50%] flex flex-col justify-between items-start z-10 h-full"
                style={{ maxWidth: "600px" }}
              >
                <div>
                  {/* Big Heading - matches 100px var(--fs-100) on live site */}
                  <h3
                    className="text-black font-normal"
                    style={{
                      fontSize: "clamp(2.75rem, 6.8vw, 100px)",
                      lineHeight: 1.0,
                      letterSpacing: "-0.02em",
                      whiteSpace: "pre-line",
                      marginBottom: "1.75rem"
                    }}
                  >
                    {service.heading}
                  </h3>

                  {/* Interactive Tags */}
                  <div className="flex flex-wrap gap-[0.625rem] mb-[1.75rem]">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-full font-normal border-2 border-[#e9e9e9] text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer"
                        style={{
                          padding: "5px 12px",
                          fontSize: "18px",
                          lineHeight: "25.2px"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description Text */}
                  <p
                    className="text-black font-normal leading-[1.4] mb-[2rem]"
                    style={{
                      fontSize: "20px",
                      maxWidth: "540px"
                    }}
                  >
                    {service.mainText}
                  </p>
                </div>

                {/* Magnetic "Find out more" Button */}
                <div>
                  <Magnetic strength={0.25}>
                    <Link
                      href={service.link}
                      className="group inline-flex items-center gap-3 rounded-full border-2 border-black bg-transparent text-black font-normal leading-none hover:bg-black hover:text-white transition-all duration-300"
                      style={{
                        padding: "12px 24px 13.6px",
                        fontSize: "18px"
                      }}
                    >
                      <span>Find out more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.1 15.17"
                        className="w-4 h-4 fill-current transform group-hover:translate-x-1 transition-transform"
                      >
                        <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" />
                      </svg>
                    </Link>
                  </Magnetic>
                </div>
              </div>

              {/* Right Column Media - Exact 555px x 555px with 12.5rem top-right rounded corner */}
              <div
                className="w-full lg:w-[555px] aspect-square rounded-[2rem] lg:rounded-none lg:rounded-tr-[12.5rem] overflow-hidden relative bg-black flex items-center justify-center flex-shrink-0"
                style={{
                  width: "555px",
                  height: "555px",
                  maxWidth: "45%"
                }}
              >
                <video
                  src={service.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Scroll runway spacer to let all cards remain cleanly stacked together before transitioning to next section */}
        <div className="h-[65vh] w-full pointer-events-none" />
      </div>
    </section>
  );
}
