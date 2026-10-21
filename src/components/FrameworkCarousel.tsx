"use client";

import React, { useState } from "react";
import Magnetic from "./Magnetic";
import { FRAMEWORK_SLIDES } from "@/lib/data";

const TAB_LABELS = [
  "Strategy first. Always",
  "Find the bold idea",
  "Nail the process",
  "Create to convert",
  "Build for scale"
];

export default function FrameworkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? FRAMEWORK_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === FRAMEWORK_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = FRAMEWORK_SLIDES[activeIndex];

  return (
    <section
      id="carousel"
      className="relative flex flex-col justify-center bg-transparent text-black z-20 w-full"
      style={{
        paddingTop: "0px",
        paddingBottom: "208px",
        minHeight: "917px"
      }}
    >
      {/* 1. Large Centered Heading - 100px var(--fs-100) on live site */}
      <div className="w-full text-center px-4">
        <h2
          className="text-black font-normal mx-auto"
          style={{
            fontSize: "clamp(2.5rem, 7.1vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line"
          }}
        >
          {"Our brand-to-build\nframework."}
        </h2>
      </div>

      {/* 2. Navigation Pills / Tabs */}
      <div
        className="flex items-center justify-center gap-[0.625rem] flex-wrap px-4"
        style={{
          marginTop: "32px",
          marginBottom: "40px"
        }}
      >
        {FRAMEWORK_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 font-normal whitespace-nowrap inline-flex items-center justify-center cursor-pointer ${
              activeIndex === idx
                ? "bg-black text-white"
                : "bg-white/50 text-black hover:bg-white/80"
            }`}
            style={{
              padding: "12px 19.2px",
              height: "42px",
              fontSize: "16px",
              lineHeight: "normal",
              borderRadius: "32px",
              border: "none"
            }}
          >
            {TAB_LABELS[idx]}
          </button>
        ))}
      </div>

      {/* 3. Centered Carousel Card with Left and Right Arrows */}
      <div
        className="w-full mx-auto px-4 flex items-center justify-center gap-4 sm:gap-8"
        style={{
          maxWidth: "calc(1400px + 15%)",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {/* Previous Arrow */}
        <div className="flex-shrink-0 z-10">
          <Magnetic strength={0.3}>
            <button
              onClick={handlePrev}
              aria-label="Previous framework step"
              className="w-12 h-12 flex items-center justify-center text-black hover:opacity-60 transition-opacity cursor-pointer select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 71.563 71.242"
                className="w-10 h-10"
              >
                <g transform="translate(37.625 2.12) rotate(45)">
                  <line
                    y1="45.507"
                    x2="45.455"
                    transform="translate(0 1.7)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="6"
                  />
                  <path
                    d="M47.544,47.207,0,47.209V0"
                    transform="translate(0 0)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="6"
                  />
                </g>
              </svg>
            </button>
          </Magnetic>
        </div>

        {/* Center Card - Increased width (1180px), 420px height, centered */}
        <div
          className="w-full max-w-[1180px] bg-white/50 backdrop-blur-sm overflow-hidden flex flex-col lg:flex-row transition-all duration-300 mx-auto"
          style={{
            borderRadius: "20px 130px 20px 20px",
            minHeight: "420px",
            height: "420px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {/* Left Media (50%) */}
          <div
            className="w-full lg:w-1/2 aspect-[562/434] bg-neutral-100 overflow-hidden relative flex-shrink-0"
            style={{ height: "100%" }}
          >
            <video
              key={activeSlide.videoSrc}
              src={activeSlide.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Content (50%) */}
          <div
            className="w-full lg:w-1/2 flex flex-col justify-between"
            style={{
              padding: "2rem 2.4rem",
              height: "100%"
            }}
          >
            <h3
              className="text-black font-normal"
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 50px)",
                lineHeight: 1.05,
                whiteSpace: "pre-wrap",
                letterSpacing: "-0.02em"
              }}
            >
              {activeSlide.title}
            </h3>

            <p
              className="text-black font-normal mt-auto"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.4,
                margin: 0
              }}
            >
              {activeSlide.description}
            </p>
          </div>
        </div>

        {/* Next Arrow */}
        <div className="flex-shrink-0 z-10">
          <Magnetic strength={0.3}>
            <button
              onClick={handleNext}
              aria-label="Next framework step"
              className="w-12 h-12 flex items-center justify-center text-black hover:opacity-60 transition-opacity cursor-pointer select-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 71.563 71.242"
                className="w-10 h-10"
              >
                <g transform="translate(33.939 69.122) rotate(-135)">
                  <line
                    y1="45.507"
                    x2="45.455"
                    transform="translate(0 1.7)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="6"
                  />
                  <path
                    d="M47.544,47.207,0,47.209V0"
                    transform="translate(0 0)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="6"
                  />
                </g>
              </svg>
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
