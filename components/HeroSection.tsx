// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  { src: "/banner-1.webp", alt: "Admission Open Banner" },
  { src: "/banner-2.webp", alt: "Secondary & Senior Secondary Banner" },
  { src: "/banner-3.webp", alt: "Career & Skill Education Banner" },
  { src: "/banner-4.webp", alt: "Career & Skill Education Banner" },
  { src: "/banner-5.webp", alt: "Career & Skill Education Banner" },
  { src: "/banner-6.webp", alt: "Career & Skill Education Banner" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#1b1260]">
      {/* Carousel Wrapper */}
      <div className="relative h-[68vw] max-h-[550px] w-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Left Chevron */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#1b1260] shadow-md transition hover:bg-white cursor-pointer"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>

      {/* Right Chevron */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#1b1260] shadow-md transition hover:bg-white cursor-pointer"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
