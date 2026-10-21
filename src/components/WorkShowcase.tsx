"use client";

import React from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { PROJECTS_DATA } from "@/lib/data";

export default function WorkShowcase() {
  return (
    <section
      id="work"
      className="relative bg-black text-white z-20"
      style={{
        paddingTop: "12rem",
        paddingBottom: "5.5rem"
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
        {/* Section Heading & Subheading Row */}
        <div
          className="flex flex-col md:flex-row justify-between items-start"
          style={{
            marginBottom: "4.5rem"
          }}
        >
          {/* Staggered "Our Work" */}
          <h2
            className="flex flex-col uppercase font-normal text-white w-full md:w-[calc(50%-1rem)]"
            style={{
              fontSize: "clamp(3.125rem, 10.6vw, 10rem)",
              lineHeight: 0.8,
              letterSpacing: "-0.02em",
              marginTop: "0.64ch",
              marginBottom: "2.5rem"
            }}
          >
            <span>Our</span>
            <span style={{ paddingLeft: "13.5%", marginTop: "1rem" }}>Work</span>
          </h2>

          {/* Right Subtitle */}
          <div
            className="flex flex-col w-full md:w-[calc(50%-1rem)]"
            style={{
              padding: 0
            }}
          >
            <h3
              className="font-normal text-white"
              style={{
                fontSize: "clamp(2.5rem, 4.3vw, 5rem)",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
                margin: "0 0 1rem"
              }}
            >
              Making brands a damn site better.
            </h3>
            <p
              className="font-normal text-[#999999]"
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: "45ch"
              }}
            >
              Dive into our projects and the decisions that shaped them.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-12"
          style={{
            gap: "1.5625rem"
          }}
        >
          {PROJECTS_DATA.map((project) => {
            const isFullWidth = project.size === "large";

            return (
              <Link
                key={project.id}
                href={project.link}
                className={`group block ${
                  isFullWidth ? "md:col-span-12" : "md:col-span-6"
                }`}
                style={{ textDecoration: "none" }}
              >
                {/* Upper Metadata Tab with Top Border Radius and Negative Margin */}
                <div
                  className="w-full flex items-baseline justify-between transition-colors duration-300 group-hover:border-[#888888]"
                  style={{
                    borderTop: "1px solid #504f4f",
                    borderLeft: "1px solid #504f4f",
                    borderRight: "1px solid #504f4f",
                    borderTopLeftRadius: "1.125rem",
                    borderTopRightRadius: "1.125rem",
                    padding: "1.1rem 1.25rem 2.225rem",
                    marginBottom: "-1.125rem",
                    color: "#ffffff"
                  }}
                >
                  <h3
                    className="flex items-center font-normal text-white"
                    style={{
                      gap: "0.625rem",
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      margin: 0
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14.78 14.78"
                      className="transition-transform duration-250 ease-in-out group-hover:translate-x-[25%] group-hover:-translate-y-[25%]"
                      style={{ width: "0.9375rem", height: "0.9375rem", flexShrink: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id={`arrow-grad-${project.id}`}
                          x1="3.54"
                          x2="13.98"
                          y1="3.54"
                          y2="13.99"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#7c41f3" />
                          <stop offset="1" stopColor="#ff6eff" />
                        </linearGradient>
                      </defs>
                      <path
                        fill={`url(#arrow-grad-${project.id})`}
                        strokeWidth="0"
                        d="M13.25 12.18L13.25 0.23 14.78 0.23 14.78 14.76 14.74 14.76 14.74 14.78 0.21 14.78 0.21 13.25 12.18 13.25 0 1.08 1.08 0 13.25 12.18z"
                      />
                    </svg>
                    <span>{project.title}</span>
                  </h3>
                  <p
                    className="font-normal text-white"
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      margin: 0
                    }}
                  >
                    {project.year}
                  </p>
                </div>

                {/* Video / Image Display Container */}
                <div
                  className="relative w-full overflow-hidden bg-[#0d0d0d] shadow-2xl"
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "1.125rem"
                  }}
                >
                  <video
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={project.posterImage}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ borderRadius: "1.125rem" }}
                  />

                  {/* Authentic KOTA Image Overlay on Hover */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      padding: isFullWidth ? "2.5% 4.5%" : "5% 9%",
                      borderRadius: "1.125rem"
                    }}
                  >
                    <p
                      className="text-white font-normal"
                      style={{
                        fontSize: isFullWidth ? "clamp(2rem, 3.5vw, 3.75rem)" : "clamp(1.5rem, 2.2vw, 2rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                        maxWidth: isFullWidth ? "28ch" : "22ch",
                        marginBottom: isFullWidth ? "2rem" : "1.5rem",
                        marginTop: "auto"
                      }}
                    >
                      {project.heading}
                    </p>

                    <ul
                      className="flex flex-wrap gap-2 p-0 m-0 list-none z-10"
                    >
                      {project.tags.map((tag, tIdx) => (
                        <li
                          key={tIdx}
                          className="text-white font-normal"
                          style={{
                            fontSize: "0.8125rem",
                            lineHeight: 1,
                            borderRadius: "2rem",
                            border: "1px solid #ffffff",
                            padding: "8px 15px",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* View All Projects Button Container */}
          <div
            className="col-span-1 md:col-span-12 flex justify-center"
            style={{
              marginTop: "2.75rem"
            }}
          >
            <Magnetic strength={0.3}>
              <Link
                href="/work"
                className="group inline-flex items-center text-white hover:bg-white hover:text-black transition-all duration-300"
                style={{
                  padding: "0.75rem 1.5rem 0.85rem",
                  fontSize: "1.125rem",
                  lineHeight: 1,
                  borderRadius: "2.0625rem",
                  border: "2px solid #ffffff",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  whiteSpace: "nowrap"
                }}
              >
                <span className="font-normal">View all projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17.1 15.17"
                  className="fill-current transform group-hover:translate-x-1 transition-transform"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginLeft: "1rem",
                    transform: "translateY(1px)"
                  }}
                >
                  <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" />
                </svg>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
