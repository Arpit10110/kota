"use client";

import React, { useRef, useEffect } from "react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 hover:border-white text-white flex items-center justify-center text-lg z-50 transition-colors"
        aria-label="Close Showreel"
      >
        ✕
      </button>

      {/* Video Container */}
      <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
        <video
          ref={videoRef}
          src="/videos/00-Kota-Showreel-2025-Final.mp4"
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
