"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

const TESTIMONIALS = [
  {
    id: "tangerine",
    bgColor: "#efb2d9",
    logoSrc: "/images/tangerine-logo.svg",
    alt: "Tangerine",
    quote:
      "\"As a design agency ourselves, handing responsibility for our web re-design to another creative agency needed to be well considered. We were immediately impressed by their designs and their interpretation of our brief. Nice bunch of people to work with too!\"",
    author: "Laurie Bushe",
    role: "Head of Marketing",
    link: "https://kota.co.uk/work/tangerine/"
  },
  {
    id: "florence",
    bgColor: "#a8e1ec",
    logoSrc: "/images/Florence-Logo-White.svg",
    alt: "Florence",
    quote:
      "\"It was our brand positioning work that really made everything click. KOTA were empathetic, patient, flexible, quick, and, most importantly, incredibly talented with brand positioning, visual identity, and digital experiences. I've already recommended them twice!\"",
    author: "Shanice Daeche",
    role: "CMO",
    link: "https://kota.co.uk/work/florence/"
  },
  {
    id: "floan",
    bgColor: "#a8e1ec",
    logoSrc: "/images/Floan-Logo-Black.svg",
    alt: "Floan",
    quote:
      "\"KOTA’s ideas were fresh and exciting, and their ability as a one-stop-shop for Branding, Tone of Voice, Copywriting, Website design and Development meant we were able to do the whole process with them. Amazing creative agency.\"",
    author: "Finn Bruce",
    role: "Floan",
    link: "https://kota.co.uk/work/floan/"
  },
  {
    id: "upp",
    bgColor: "#f8e5cb",
    logoSrc: "/images/UPP-logo.svg",
    alt: "Universal Production Partners",
    quote:
      "\"We needed something that would blur the lines between web, technology, and cinema, and reflect who we are: an artist-led, tech-forward company creating work at the highest level. From the very first conversations, KOTA understood that vision. They transformed the brief beyond what we had imagined. It’s no exaggeration to say the final product redefines what a website can be.\"",
    author: "Shaun Obanion",
    role: "PR Manager of Universal Production Partners",
    link: "https://kota.co.uk/work/upp/"
  },
  {
    id: "incentive-games",
    bgColor: "#c4b5f3",
    logoSrc: "/images/incentive-games.png",
    alt: "Incentive Games",
    quote:
      "\"Beyond the aesthetics, the website is incredibly functional. The CMS gives us the flexibility and control we need to keep our content fresh and relevant, and they have significantly improved the website's UX. We couldn't be happier!\"",
    author: "Jenny Frame",
    role: "Marketing Manager",
    link: "https://kota.co.uk/work/incentive-games/"
  },
  {
    id: "isi-global",
    bgColor: "#d7e1d3",
    logoSrc: "/images/ISI-Logo-White.svg",
    alt: "ISI Global",
    quote:
      "\"Beyond the initial launch, KOTA have continued to support us over the past 12 months with ongoing SEO, helping us build visibility and performance in a really strategic, considered way. Their team are creative, knowledgeable, responsive, and genuinely invested in delivering long-term value, not just a one-off project. We wouldn’t hesitate to recommend KOTA to any brand looking for a smart, design-led agency that truly understands digital growth.\"",
    author: "Bianca Cristescu",
    role: "Key Account Director, ISI Global",
    link: "https://kota.co.uk/work/isi-global/"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  // Pointer drag/swipe tracking:
  // Slide right (dx > 25) -> move to NEXT card (loops infinitely)
  // Slide left (dx < -25) -> move to PREVIOUS card (loops infinitely)
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only handle primary click / touch
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

      // Keep hasDraggedRef true briefly to swallow any trailing click
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 100);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  const totalCards = TESTIMONIALS.length;

  return (
    <section
      id="testimonials"
      className="relative flex flex-col justify-center bg-[#000000] text-white z-20 overflow-hidden"
      style={{
        paddingTop: "clamp(80px, 8vw, 140px)",
        paddingBottom: "clamp(100px, 10vw, 180px)"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (5 Cols): Heading */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2
              className="font-light text-white leading-[0.92] tracking-[-0.03em] select-none"
              style={{
                fontSize: "clamp(3.5rem, 6.8vw, 7.2rem)"
              }}
            >
              What our <br />
              clients say
            </h2>
          </div>

          {/* Right Column (7 Cols): Authentic Stacked 3D Deck */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            {/* Deck Shell with room for stacked left cards */}
            <div
              className="relative w-full max-w-[640px] select-none touch-none"
              style={{
                minHeight: "580px"
              }}
              onContextMenu={(e) => e.preventDefault()}
              onClickCapture={(e) => {
                if (hasDraggedRef.current) {
                  e.stopPropagation();
                  e.preventDefault();
                }
              }}
            >
              {TESTIMONIALS.map((item, idx) => {
                // Distance behind active card in circular stack:
                // k = 0 (active), k = 1 (next card in sequence, peeking behind on left), k = 2 (2nd next), etc.
                const k = (idx - currentIndex + totalCards) % totalCards;
                const isActive = k === 0;

                // Stack positions matching KOTA:
                // Active: follows dragOffset
                // k=1: offset -38px (peeking left), zIndex 30
                // k=2: offset -72px, zIndex 20
                // k=3: offset -102px, zIndex 10
                let translateX = 0;
                let scale = 1;
                let zIndex = 10;
                let opacity = 1;

                if (isActive) {
                  translateX = dragOffset;
                  scale = 1;
                  zIndex = 40;
                  opacity = 1;
                } else if (k === 1) {
                  translateX = -38 + (dragOffset > 0 ? dragOffset * 0.12 : 0);
                  scale = 0.985;
                  zIndex = 30;
                  opacity = 0.98;
                } else if (k === 2) {
                  translateX = -72 + (dragOffset > 0 ? dragOffset * 0.08 : 0);
                  scale = 0.97;
                  zIndex = 20;
                  opacity = 0.94;
                } else if (k === 3) {
                  translateX = -102 + (dragOffset > 0 ? dragOffset * 0.04 : 0);
                  scale = 0.955;
                  zIndex = 10;
                  opacity = 0.9;
                } else {
                  // Hidden deeper in stack
                  translateX = -115;
                  scale = 0.94;
                  zIndex = 5;
                  opacity = 0;
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (hasDraggedRef.current) return;
                      if (!isActive) setCurrentIndex(idx);
                    }}
                    onPointerDown={isActive ? handlePointerDown : undefined}
                    className="absolute inset-0 w-full text-black flex flex-col justify-between overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.65)] touch-none select-none"
                    style={{
                      backgroundColor: item.bgColor,
                      borderRadius: "20px 150px 20px 20px",
                      padding: "clamp(2.2rem, 3.8vw, 3rem) clamp(2rem, 3.5vw, 2.8125rem)",
                      transform: `translate3d(${translateX}px, 0, 0) scale(${scale}) rotate(${
                        isActive ? dragOffset * 0.02 : 0
                      }deg)`,
                      transformOrigin: "center left",
                      zIndex,
                      opacity,
                      cursor: isActive ? (isDragging ? "grabbing" : "grab") : "pointer",
                      transition:
                        isActive && isDragging
                          ? "none"
                          : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease",
                      pointerEvents: "auto"
                    }}
                  >
                    {/* Top: Client Logo */}
                    <div className="h-10 sm:h-12 flex items-center mb-4">
                      <img
                        src={item.logoSrc}
                        alt={item.alt}
                        draggable={false}
                        className="max-h-full max-w-[160px] object-contain brightness-0 pointer-events-none select-none"
                      />
                    </div>

                    {/* Middle: Testimonial Quote */}
                    <p className="text-[1.2rem] sm:text-[1.32rem] lg:text-[1.42rem] text-black font-normal leading-[1.26] my-auto py-3 pointer-events-none select-none max-w-[500px]">
                      {item.quote}
                    </p>

                    {/* Bottom Row: Author details, View Project Button & Next Button */}
                    <div className="flex items-end justify-between gap-4 pt-6">
                      <div className="flex flex-col gap-3.5">
                        <div>
                          <div className="text-[1.05rem] font-medium text-black leading-snug">
                            {item.author}
                          </div>
                          <div className="text-[0.92rem] text-neutral-800 leading-snug">
                            {item.role}
                          </div>
                        </div>

                        <Magnetic strength={0.25}>
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-black bg-transparent text-black font-normal hover:bg-black hover:text-white transition-all duration-300"
                            style={{
                              padding: "9px 24px",
                              fontSize: "15px",
                              lineHeight: "15px",
                              height: "38px"
                            }}
                          >
                            <span>View project</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 17.1 15.17"
                              className="w-3.5 h-3.5 fill-current transform group-hover:translate-x-1 transition-transform"
                            >
                              <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" />
                            </svg>
                          </Link>
                        </Magnetic>
                      </div>

                      {/* Next Swiper Button (on active card) */}
                      {isActive && (
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              next();
                            }}
                            aria-label="Next testimonial"
                            className="w-[50px] h-[50px] rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white group transition-colors duration-300 cursor-pointer pointer-events-auto"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 17.1 15.17"
                              className="w-4 h-4 fill-current transform group-hover:translate-x-0.5 transition-transform"
                            >
                              <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
