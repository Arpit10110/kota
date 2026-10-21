"use client";

import React from "react";

export default function Approach() {
  const steps = [
    {
      num: "01 —",
      title: "Brand Clarity",
      desc: "Decisions that help brands re-position and commit."
    },
    {
      num: "02 —",
      title: "Creative Craft",
      desc: "Visually confident design built to stand out."
    },
    {
      num: "03 —",
      title: "Commercial Momentum",
      desc: "Scalable systems with growth in mind."
    }
  ];

  return (
    <section
      id="approach"
      className="relative flex flex-col justify-center bg-transparent text-black z-20"
      style={{
        paddingTop: "150px",
        paddingBottom: "0px",
        minHeight: "752px"
      }}
    >
      {/* 1. Heading and Intro Paragraph Container */}
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "calc(1400px + 15%)",
          paddingLeft: "7.5vw",
          paddingRight: "7.5vw"
        }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2
            className="text-black font-normal"
            style={{
              fontSize: "clamp(2.5rem, 4.26vw, 4.375rem)",
              lineHeight: 1,
              maxWidth: "60%",
              letterSpacing: "-0.02em",
              whiteSpace: "pre-line"
            }}
          >
            {"Shaping how global\nbrands are seen, trusted,\nand remembered."}
          </h2>
          <p
            className="text-black font-normal"
            style={{
              fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
              lineHeight: 1.25,
              maxWidth: "450px"
            }}
          >
            There are moments of change for every brand, whether it’s rapid growth, new goals, or new expectations. That’s where our work begins.
          </p>
        </div>
      </div>

      {/* 2. Three Approach Cards Container */}
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "calc(1400px + 15%)",
          paddingLeft: "7.5vw",
          paddingRight: "7.5vw"
        }}
      >
        <div
          className="flex flex-col lg:flex-row items-stretch"
          style={{
            marginTop: "4rem",
            gap: "4.7rem"
          }}
        >
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex-1">
              {/* Multiplication 'x' between cards (desktop) */}
              {idx > 0 && (
                <div
                  className="hidden lg:flex items-center justify-center absolute pointer-events-none"
                  style={{
                    width: "2.221rem",
                    height: "2.221rem",
                    right: "calc(100% + (4.7rem - 2.221rem) / 2)",
                    top: "50%",
                    transform: "translateY(-50%)"
                  }}
                >
                  <img
                    src="/images/x.svg"
                    alt="✕"
                    className="w-full h-full"
                    style={{ width: "35.5px", height: "35.5px" }}
                  />
                </div>
              )}

              {/* Multiplication 'x' between cards (mobile) */}
              {idx > 0 && (
                <div
                  className="flex lg:hidden items-center justify-center absolute pointer-events-none"
                  style={{
                    width: "1.221rem",
                    height: "1.221rem",
                    left: "50%",
                    top: "calc((-4.7rem - 1.221rem) / 2)",
                    transform: "translateX(-50%)"
                  }}
                >
                  <img
                    src="/images/x.svg"
                    alt="✕"
                    className="w-full h-full"
                    style={{ width: "19.5px", height: "19.5px" }}
                  />
                </div>
              )}

              {/* Card Shell */}
              <div
                className="w-full flex flex-col justify-between transition-colors duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "10px 100px 10px 10px",
                  padding: "2.1875rem 2rem",
                  minHeight: "356px",
                  height: "100%"
                }}
              >
                <div>
                  <span
                    className="text-black font-normal block"
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      marginBottom: "4.5rem"
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-black font-normal"
                    style={{
                      fontSize: "clamp(1.875rem, 3.5vw, 60px)",
                      lineHeight: 0.95,
                      width: "min-content",
                      marginBottom: "3.125rem",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                <p
                  className="text-black font-normal"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: 1.25,
                    margin: 0
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
