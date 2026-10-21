"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#efefef] pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        loaded ? "-translate-y-full" : "translate-y-0"
      }`}
    />
  );
}
