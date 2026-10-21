"use client";

import React, { useState } from "react";
import Preloader from "@/components/Preloader";
import WebglBackground from "@/components/WebglBackground";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import FloatingStartButton from "@/components/FloatingStartButton";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import FrameworkCarousel from "@/components/FrameworkCarousel";
import WorkShowcase from "@/components/WorkShowcase";
import ResultsStats from "@/components/ResultsStats";
import PartnersMarquee from "@/components/PartnersMarquee";
import Testimonials from "@/components/Testimonials";
import BlogInsights from "@/components/BlogInsights";
import Faqs from "@/components/Faqs";
import KotaverseCta from "@/components/KotaverseCta";
import Footer from "@/components/Footer";
import ShowreelModal from "@/components/ShowreelModal";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  return (
    <main className="relative min-h-screen text-black selection:bg-black selection:text-white overflow-x-clip">
      {/* Dynamic Chromatic Mesh Gradient & Film Noise Background */}
      <WebglBackground />

      {/* Preloader Opening Curtain */}
      {/* <Preloader /> */}

      {/* Trailing Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Fullscreen Navigation Flyout */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Floating Magnetic Start Project Button */}
      <FloatingStartButton />

      {/* 1. Hero Section with SVG Typography Mask, Video Inset in letter O, Badges & Copy */}
      <Hero
        onOpenShowreel={() => setIsShowreelOpen(true)}
      />

      {/* 2. Approach Section (01 Brand Clarity, 02 Creative Craft, 03 Commercial Momentum) */}
      <Approach />

      {/* 3. Sticky Stacked Services Cards */}
      <Services />

      {/* 4. Brand-to-Build Framework Carousel */}
      <FrameworkCarousel />

      {/* 5. Selected Work Portfolio Showcase (Transitions to Dark Theme #000) */}
      <WorkShowcase />

      {/* 6. Results & Statistics with Rainbow Border Glow */}
      <ResultsStats />

      {/* 7. Infinite Partners Marquee */}
      <PartnersMarquee />

      {/* 8. Editorial Testimonials */}
      <Testimonials />

      {/* 9. Articles & Insights */}
      <BlogInsights />

      {/* 10. Frequently Asked Questions */}
      <Faqs />

      {/* 11. Bottom Video Banner CTA */}
      <KotaverseCta onOpenShowreel={() => setIsShowreelOpen(true)} />

      {/* 12. Studio Footer */}
      <Footer />

      {/* Cinematic Fullscreen Showreel Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </main>
  );
}
