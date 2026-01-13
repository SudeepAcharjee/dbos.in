// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "About DBOS", href: "/about-us" },
      { label: "Chairperson Message", href: "#chairperson" },
      { label: "Vice-Chairperson Message", href: "#vice-chairperson" },
    ],
  },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "Secondary Level", href: "/secondary-level" },
      { label: "Sr. Secondary Level", href: "/sr-secondary-level" },
      { label: "Skill & Vocational Education", href: "#programs" },
      { label: "Certification Criteria", href: "/certification-criteria" },
      { label: "Fee Structure", href: "#fees" },
    ],
  },
  {
    label: "Affiliated Institutes",
    href: "#affiliated",
    children: [
      {
        label: "Find Authorized Institutes",
        href: "/find-authorized-institutes",
      },
      {
        label: "Counselling Centre Affiliation Form",
        href: "https://dbos-co-in.vercel.app/counselling-centre-registration",
      },
      {
        label: "Study Centre Affiliation Form",
        href: "https://dbos-co-in.vercel.app/study-centre-registration",
      },
      {
        label: "State Coordinator Affiliation Form",
        href: "https://dbos-co-in.vercel.app/state-coordinator-registration",
      },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Downloads", href: "/downloads" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href || !href.startsWith("/")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only apply click-outside on desktop (lg breakpoint is 1024px)
      if (window.innerWidth < 1024) return;

      if (
        openDropdown &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1b1260] text-white text-xs border-b border-white/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          {/* Phone */}
          <p className="font-semibold flex items-center gap-1 text-xs sm:text-sm md:text-[15px]">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> +91 69002 15858{" "}
            <span className="hidden xs:inline">&nbsp;||&nbsp;</span>
            <span className="block xs:inline">+91 84864 12762</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            <a
              href="/recognition-approvals"
              className="bg-[#ff6a1a] px-2 sm:px-3 py-1 sm:py-1.5 font-semibold rounded-sm shadow text-[10px] sm:text-xs md:text-[15px] whitespace-nowrap"
            >
              Recognition & Approvals
            </a>
            <a
              href="#awards"
              className="bg-[#ff6a1a] px-2 sm:px-3 py-1 sm:py-1.5 font-semibold rounded-sm shadow text-[10px] sm:text-xs md:text-[15px] whitespace-nowrap"
            >
              Awards & Achievements
            </a>
            <a
              href="https://dbos.co.in"
              className="bg-[#ff6a1a] px-2 sm:px-3 py-1 sm:py-1.5 font-semibold rounded-sm shadow text-[10px] sm:text-xs md:text-[15px] whitespace-nowrap"
            >
              Student Login
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div
          ref={navRef}
          className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6"
        >
          {/* Logo Normal (Not Rounded) */}
          <Link href="#top" className="flex items-center flex-shrink-0">
            <div className="relative w-auto">
              <Image
                src="/logo.jpg" // your logo
                alt="DBOS Logo"
                width={300}
                height={180}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* NAV PILL - Desktop */}
          <div className="hidden xl:flex ml-auto">
            <div className="bg-[#ff6a1a] text-white rounded-full px-5 py-2.5 flex items-center shadow-[0px_5px_15px_rgba(0,0,0,0.15)] gap-4 whitespace-nowrap">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === link.label ? null : link.label
                        )
                      }
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm xl:text-base font-semibold transition ${isActive(link.href) ||
                        link.children?.some((c) => isActive(c.href))
                        ? "bg-white text-[#1b1260]"
                        : "hover:text-[#1b1260]"
                        }`}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronIcon open={openDropdown === link.label} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute left-0 top-full z-50 mt-3 w-72 rounded-lg bg-[#1b1260] p-3 shadow-xl">
                        <ul className="space-y-1 text-sm text-white">
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block rounded-md px-3 py-2 hover:bg-white/10 hover:text-[#ff6a1a]"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm xl:text-base font-semibold transition ${isActive(link.href)
                      ? "rounded-full bg-white px-3 py-1 text-[#1b1260]"
                      : "hover:text-[#1b1260]"
                      }`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="xl:hidden ml-auto p-2 border rounded-md"
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
          <div className="xl:hidden bg-white border-t">
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="rounded-md border border-gray-200"
                  >
                    <button
                      className="flex w-full items-center justify-between px-3 py-2 text-[#1b1260] font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown((prev) =>
                          prev === link.label ? null : link.label
                        );
                      }}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronIcon open={openDropdown === link.label} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="border-t border-gray-100">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2 text-sm ${isActive(child.href)
                              ? "bg-[#1b1260] text-white"
                              : "text-[#1b1260] hover:bg-gray-100"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`rounded-md px-3 py-2 font-medium ${isActive(link.href)
                      ? "bg-[#1b1260] text-white"
                      : "text-[#1b1260] hover:bg-gray-100"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
        }`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
