"use client";

import React from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

const ARTICLES = [
  {
    id: 1,
    title: "Branding inspiration: design trends for 2026",
    category: "Expertise, Inspiration",
    image: "/images/article-1.png",
    link: "https://kota.co.uk/blog/branding-inspiration-brand-design-trends-for-2026"
  },
  {
    id: 2,
    title: "Design with guts: KOTA’s manifesto for creative bravery",
    category: "Expertise, Inspiration",
    image: "/images/article-2.png",
    link: "https://kota.co.uk/blog/design-with-guts-kotas-manifesto-for-creative-bravery"
  },
  {
    id: 3,
    title: "KOTA wins a Lovie award for Best Web Design – Aesthetic!",
    category: "Culture, Our work",
    image: "/images/article-3.png",
    link: "https://kota.co.uk/blog/kota-wins-a-lovie-award-for-best-web-design-aesthetic"
  },
  {
    id: 4,
    title: "Brand-First vs Dev-First: What actually sets KOTA apart (and why it matters)",
    category: "Expertise",
    image: "/images/article-4.png",
    link: "https://kota.co.uk/blog/brand-first-vs-dev-first-what-actually-sets-kota-apart-and-why-it-matters"
  },
  {
    id: 5,
    title: "10 creative websites to inspire your next design (2025 update)",
    category: "Inspiration",
    image: "/images/article-5.png",
    link: "https://kota.co.uk/blog/10-creative-websites-to-inspire-your-next-web-design-2025-update"
  },
  {
    id: 6,
    title: "Web design inspiration: 50 sites to bookmark",
    category: "Inspiration",
    image: "/images/article-6.png",
    link: "https://kota.co.uk/blog/web-design-inspiration-50-sites-to-bookmark"
  },
  {
    id: 7,
    title: "Clutch names KOTA a 2024 Global Winner, Clutch Champion & Top Branding Company",
    category: "Culture, Our work",
    image: "/images/article-7.png",
    link: "https://kota.co.uk/blog/clutch-names-kota-a-2024-global-winner-clutch-champion-and-top-branding-company"
  },
  {
    id: 8,
    title: "KOTA earns 2025 Great Place to Work Certification™ 🎉",
    category: "Culture",
    image: "/images/article-8.png",
    link: "https://kota.co.uk/blog/kota-earns-2025-great-place-to-work-certification"
  },
  {
    id: 9,
    title: "What your 2026 website brief should include",
    category: "Expertise",
    image: "/images/article-9.png",
    link: "https://kota.co.uk/blog/what-your-2026-website-brief-should-include"
  }
];

export default function BlogInsights() {
  return (
    <section
      id="articles"
      className="relative flex flex-col justify-center bg-[#000000] text-white z-20"
      style={{
        paddingTop: "clamp(80px, 8vw, 140px)",
        paddingBottom: "clamp(80px, 8vw, 140px)"
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
        {/* Section Header with generous gap before cards and no divider line */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          style={{
            marginBottom: "clamp(3.5rem, 6vw, 6rem)"
          }}
        >
          <div>
            <h2
              className="text-white leading-none tracking-[-0.02em] font-normal"
              style={{
                fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)"
              }}
            >
              Latest articles
            </h2>
          </div>

          <Magnetic strength={0.25}>
            <Link
              href="https://kota.co.uk/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-white text-white font-normal hover:bg-white hover:text-black transition-all duration-300"
              style={{
                padding: "12px 24px 13.6px",
                fontSize: "18px",
                lineHeight: "18px",
                height: "44px"
              }}
            >
              <span>View our blog</span>
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

        {/* 3-Column Articles Grid - Exact KOTA architecture */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-[2.8125rem]"
          style={{
            marginTop: "1.5rem"
          }}
        >
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer transition-transform duration-300"
            >
              {/* Media figure with exact 380/203 aspect ratio & 5rem rounded top-right corner on the container */}
              <figure
                className="relative w-full aspect-[380/203] overflow-hidden bg-transparent"
                style={{
                  borderTopRightRadius: "5rem"
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </figure>

              {/* Exact KOTA White Card Box */}
              <div
                className="bg-white text-black flex flex-col justify-start"
                style={{
                  minHeight: "13.375rem",
                  padding: "1.875rem 1.5625rem"
                }}
              >
                {/* Category uppercase */}
                <p className="text-[0.875rem] uppercase text-neutral-600 font-sans tracking-wide leading-none mb-3">
                  {article.category}
                </p>

                {/* Article Title */}
                <h3 className="text-[1.35rem] lg:text-[1.5rem] font-normal text-black leading-[1.25] group-hover:opacity-80 transition-opacity duration-200">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
