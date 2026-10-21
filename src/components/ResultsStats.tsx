"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

const STATS_DATA = [
  {
    id: "isi-global",
    client: "ISI Global",
    logo: "/images/ISI-Logo-White.svg",
    stat: "104.9%",
    description: "increase in organic visits after 1 month",
    visual: "/images/ISI-Image-WhiteOutline.png",
    link: "https://kota.co.uk/work/isi-global/"
  },
  {
    id: "pison",
    client: "Pison",
    logo: "/images/Pison-Logo-White.svg",
    stat: "67.6%",
    description: "rise in engaged sessions per user after 1 month.",
    visual: "/images/Pison-Image.png",
    link: "https://kota.co.uk/work/pison/"
  },
  {
    id: "dka",
    client: "DKA",
    logo: "/images/DKA-Logo-White.svg",
    stat: "70.8%",
    description: "increase in average engagement time after 3 months.",
    visual: "/images/DKA-Image.png",
    link: "https://kota.co.uk/work/dka/"
  },
  {
    id: "wogan",
    client: "Wogan Coffee",
    logo: "/images/Wogan-Logo-White.svg",
    stat: "83.14%",
    description: "increase in sales after 1 year.",
    visual: "/images/Wogan-Image.png",
    link: "https://kota.co.uk/work/wogan-coffee/"
  }
];

export default function ResultsStats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardShellRef = useRef<HTMLDivElement>(null);
  const [headingAnim, setHeadingAnim] = useState({ scale: 1, opacity: 1 });

  // Heading scroll animation: subtle fade/scale as card moves up
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const cardEl = cardShellRef.current;
      if (cardEl) {
        const r = cardEl.getBoundingClientRect();
        const startY = vh * 0.9;
        const endY = 180;
        const rawProgress = (startY - r.top) / (startY - endY);
        const progress = Math.min(1, Math.max(0, rawProgress));

        const scale = 1 - progress * 0.15;
        const opacity = Math.max(0.1, 1 - progress * 0.85);
        setHeadingAnim({ scale, opacity });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % STATS_DATA.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? STATS_DATA.length - 1 : prev - 1));
  }, []);

  // Pointer drag/swipe tracking:
  // Slide right (dx > 25) -> move to NEXT card (loops infinitely)
  // Slide left (dx < -25) -> move to PREVIOUS card (loops infinitely)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragOffsetRef.current = 0;
    hasDraggedRef.current = false;
    setIsDragging(true);
    setDragOffset(0);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = moveEvent.clientX - startXRef.current;
      dragOffsetRef.current = dx;
      if (Math.abs(dx) > 5) {
        hasDraggedRef.current = true;
      }
      setDragOffset(dx);
    };

    const handlePointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      const dx = dragOffsetRef.current;
      dragOffsetRef.current = 0;
      setDragOffset(0);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);

      // Slide right -> move to NEXT card
      // Slide left -> move to PREVIOUS card
      if (dx > 25) {
        next();
      } else if (dx < -25) {
        prev();
      }

      // Keep hasDraggedRef true briefly to block any trailing click event
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 100);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  const totalCards = STATS_DATA.length;

  return (
    <section
      id="stats"
      className="relative flex flex-col justify-center bg-[#000000] text-white z-20 overflow-hidden"
      style={{
        paddingTop: "clamp(60px, 6vw, 100px)",
        paddingBottom: "clamp(80px, 8vw, 130px)"
      }}
    >
      {/* 1. "OUR RESULTS" Heading */}
      <div className="w-full mb-8 sm:mb-12">
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: "calc(1400px + 15%)",
            paddingLeft: "7.5%",
            paddingRight: "7.5%"
          }}
        >
          <h2
            ref={headingRef}
            className="flex flex-col text-[clamp(3.5rem,10.6vw,10rem)] uppercase font-normal tracking-[-0.03em] leading-[0.88] select-none text-neutral-500/70"
            style={{
              transform: `scale(${headingAnim.scale})`,
              opacity: headingAnim.opacity,
              transformOrigin: "left center",
              transition: "transform 0.08s ease-out, opacity 0.08s ease-out",
              willChange: "transform, opacity"
            }}
          >
            <span>Our</span>
            <span style={{ paddingLeft: "13.5%" }}>Results</span>
          </h2>
        </div>
      </div>

      {/* 2. Main Centered Deck Container */}
      <div
        ref={cardShellRef}
        className="w-full mx-auto relative z-20"
        style={{
          maxWidth: "1520px",
          paddingLeft: "clamp(3.5rem, 6vw, 5.5rem)",
          paddingRight: "clamp(1.5rem, 4vw, 3.5rem)"
        }}
      >
        {/* Relative Card Deck Shell */}
        <div
          className="relative w-full select-none touch-none"
          style={{
            height: "clamp(560px, 68vh, 660px)",
            minHeight: "560px"
          }}
          onContextMenu={(e) => e.preventDefault()}
          onClickCapture={(e) => {
            if (hasDraggedRef.current) {
              e.stopPropagation();
              e.preventDefault();
            }
          }}
        >
          {STATS_DATA.map((item, idx) => {
            // Distance behind the active card in circular stack:
            const k = (currentIndex - idx + totalCards) % totalCards;
            const isActive = k === 0;

            let translateX = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;
            let brightness = 1;

            if (isActive) {
              translateX = dragOffset;
              scale = 1;
              zIndex = 40;
              opacity = 1;
              brightness = 1;
            } else if (k === 1) {
              translateX = -18 + (dragOffset > 0 ? dragOffset * 0.08 : 0);
              scale = 0.992;
              zIndex = 30;
              opacity = 0.96;
              brightness = 0.9;
            } else if (k === 2) {
              translateX = -36 + (dragOffset > 0 ? dragOffset * 0.05 : 0);
              scale = 0.984;
              zIndex = 20;
              opacity = 0.92;
              brightness = 0.8;
            } else {
              translateX = -54 + (dragOffset > 0 ? dragOffset * 0.02 : 0);
              scale = 0.976;
              zIndex = 10;
              opacity = 0.88;
              brightness = 0.7;
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (hasDraggedRef.current) return;
                  if (!isActive) setCurrentIndex(idx);
                }}
                onPointerDown={isActive ? handlePointerDown : undefined}
                className="absolute inset-0 w-full overflow-hidden border-2 border-white/40 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] touch-none select-none"
                style={{
                  borderRadius: "20px 200px 20px 20px",
                  transform: `translate3d(${translateX}px, 0, 0) scale(${scale}) rotate(${
                    isActive ? dragOffset * 0.015 : 0
                  }deg)`,
                  transformOrigin: "center left",
                  zIndex,
                  opacity,
                  filter: `brightness(${brightness})`,
                  cursor: isActive ? (isDragging ? "grabbing" : "grab") : "pointer",
                  transition:
                    isActive && isDragging
                      ? "none"
                      : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease",
                  pointerEvents: "auto"
                }}
              >
                {/* Background Aurora / Gradient Artwork */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 74% 50%, rgba(195, 30, 205, 0.45) 0%, rgba(30, 95, 230, 0.4) 38%, rgba(15, 175, 210, 0.22) 58%, transparent 76%)"
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none opacity-35 mix-blend-screen bg-cover bg-right"
                  style={{
                    backgroundImage: "url('/images/Statistics-bg-black.jpeg')"
                  }}
                />

                {/* Inner Content Grid */}
                <div
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full"
                  style={{
                    padding: "3.5rem 4.5rem 3rem 4.5rem"
                  }}
                >
                  {/* Left Column (5 of 12 cols): Logo, Big Stat, Description, View Project */}
                  <div className="lg:col-span-5 flex flex-col justify-between items-start h-full py-1">
                    {/* Client Logo */}
                    <div className="h-10 sm:h-12 flex items-center mb-4 sm:mb-6">
                      <img
                        src={item.logo}
                        alt={item.client}
                        className="max-h-full max-w-[160px] object-contain pointer-events-none"
                      />
                    </div>

                    {/* Stat Numeral & Description block */}
                    <div className="flex flex-col items-start my-auto">
                      {/* Big Stat Numeral with Signature Gradient Text */}
                      <div
                        className="text-6xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.8rem] font-normal tracking-[-0.02em] leading-[0.95] mb-3 sm:mb-4 select-none"
                        style={{
                          background:
                            "linear-gradient(90deg, #38bdf8 0%, #818cf8 40%, #c084fc 70%, #e879f9 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        {item.stat}
                      </div>

                      {/* Description Text matching exact wrap: 'increase in organic visits after 1' / 'month' */}
                      <p className="text-xl sm:text-2xl lg:text-[2rem] text-white font-normal leading-[1.22] max-w-[450px] select-none">
                        {item.description}
                      </p>
                    </div>

                    {/* View Project Button */}
                    <div className="mt-4 sm:mt-6">
                      <Magnetic strength={0.25}>
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group inline-flex items-center gap-2.5 rounded-full border-2 border-white bg-transparent text-white font-normal hover:bg-white hover:text-black transition-all duration-300"
                          style={{
                            padding: "10px 24px 11px",
                            fontSize: "17px",
                            height: "44px",
                            lineHeight: "1"
                          }}
                        >
                          <span>View project</span>
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

                  {/* Right Column (7 of 12 cols): Visual Devices Showcase */}
                  <div className="lg:col-span-7 flex items-center justify-center lg:justify-end h-full select-none">
                    <img
                      src={item.visual}
                      alt={item.client}
                      draggable={false}
                      className="w-auto h-auto max-h-[480px] lg:max-h-[510px] max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)] pointer-events-none transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Bottom-Right Signature Circular Next Button (rendered on active card) */}
                {isActive && (
                  <div className="absolute right-8 sm:right-10 bottom-6 sm:bottom-8 z-30">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      aria-label="Next result"
                      className="w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black group transition-colors duration-300 cursor-pointer pointer-events-auto bg-transparent text-white"
                    >
                      <span className="w-3.5 h-3.5 border-t-2 border-r-2 border-current transform -translate-x-[2px] rotate-45 transition-transform group-hover:translate-x-[0px]" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
