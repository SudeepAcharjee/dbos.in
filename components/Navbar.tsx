// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Affiliated Institutes", href: "#affiliated" },
  { label: "Contact Us", href: "#contact" },
  { label: "Downloads", href: "#downloads" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      {/* Top Bar */}
      <div className="bg-[#1b1260] text-white text-[11px] sm:text-xs border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Phone */}
          <p className="font-semibold flex items-center gap-1 text-[15px]">
            📞 +91 69002 15858 &nbsp;||&nbsp; +91 84864 12762
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2">
            <a
              href="#recognition"
              className="bg-[#ff6a1a] px-3 py-1 font-semibold rounded-sm shadow text-[10px] sm:text-[15px]"
            >
              Recognition & Approvals
            </a>
            <a
              href="#awards"
              className="bg-[#ff6a1a] px-3 py-1 font-semibold rounded-sm shadow text-[10px] sm:text-[15px]"
            >
              Awards & Achievements
            </a>
            <a
              href="#student-section"
              className="bg-[#ff6a1a] px-3 py-1 font-semibold rounded-sm shadow text-[10px] sm:text-[15px]"
            >
              Student Login
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
          {/* Logo Normal (Not Rounded) */}
          <Link href="#top" className="flex items-center">
            <div className="relative w-auto">
              <Image
                src="/logo.jpg" // your logo
                alt="DBOS Logo"
                width={230}
                height={140}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* NAV PILL - Desktop */}
          <div className="hidden lg:flex ml-auto">
            <div className="bg-[#ff6a1a] text-white rounded-full px-8 py-3 flex items-center shadow-[0px_5px_15px_rgba(0,0,0,0.15)] gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[18px] font-semibold hover:text-[#1b1260]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden ml-auto p-2 border rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-[#1b1260] font-medium hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                className="mt-2 rounded-full bg-[#ff6a1a] px-4 py-2 text-center text-white font-semibold"
                onClick={() => setIsOpen(false)}
              >
                APPLY NOW
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
