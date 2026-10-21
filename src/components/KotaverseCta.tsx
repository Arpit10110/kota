"use client";

import React from "react";
import Magnetic from "./Magnetic";
import ShowreelSvg from "./ShowreelSvg";

interface KotaverseCtaProps {
  onOpenShowreel?: () => void;
}

export default function KotaverseCta({ onOpenShowreel }: KotaverseCtaProps) {
  return (
    <section
      id="kotaverseCta"
      className="relative flex flex-col items-center justify-center bg-[#000000] text-white overflow-hidden z-20"
      style={{
        paddingTop: "192px",
        paddingBottom: "192px",
        marginBottom: "-80px",
        minHeight: "895px"
      }}
    >
      {/* 1. Ambient Radial Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[60vh] bg-gradient-to-r from-[#633cc9]/40 via-[#3b8392]/30 to-[#ff34f3]/40 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* 2. Central Oval Video Capsule - Exact KOTA Architecture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50.75rem] max-w-[85vw] aspect-[812/511] overflow-hidden rounded-[256px] opacity-60 z-0 pointer-events-none shadow-[0_0_100px_rgba(255,52,243,0.35)]">
        <video
          src="/videos/Featured2-Compressed.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-[256px]"
        />
      </div>

      {/* 2. Infinite SHOWREEL [KOTA] Marquee Banner */}
      <div className="relative w-full overflow-hidden select-none z-10 py-6">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center">
          <div className="flex items-center gap-16 px-8">
            <ShowreelSvg className="h-20 sm:h-28 lg:h-36 w-auto" />
            <ShowreelSvg className="h-20 sm:h-28 lg:h-36 w-auto" />
            <ShowreelSvg className="h-20 sm:h-28 lg:h-36 w-auto" />
          </div>
          <div className="flex items-center gap-16 px-8">
            <ShowreelSvg className="h-20 sm:h-28 lg:h-36 w-auto" />
            <ShowreelSvg className="h-20 sm:h-28 lg:h-36 w-auto" />
            <ShowreelSvg className="h-20 sm:h-28 lg:h-36 w-auto" />
          </div>
        </div>
      </div>

      {/* 3. Center Watch Now Button */}
      <div className="relative z-20 mt-10 sm:mt-14">
        <Magnetic strength={0.3}>
          <button
            onClick={onOpenShowreel}
            className="group inline-flex items-center gap-3 rounded-full border-2 border-white bg-transparent text-white font-normal hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            style={{
              padding: "12px 24px 13.6px",
              fontSize: "18px",
              lineHeight: "18px",
              height: "43.6px"
            }}
          >
            <span>Watch Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17.1 15.17"
              className="w-4 h-4 fill-current transform group-hover:translate-x-1 transition-transform"
            >
              <path d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z" />
            </svg>
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
