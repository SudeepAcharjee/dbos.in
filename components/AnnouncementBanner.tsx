
// components/AnnouncementBanner.tsx
"use client";


import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="relative w-full bg-[#23126D] text-white overflow-hidden" style={{ height: '50px', lineHeight: '50px' }}>
      <div className="flex items-center h-full">
        {/* Static "Announcement :" label */}
        <div className="flex-shrink-0 px-4 font-semibold text-sm md:text-base border-r-2 border-white h-full flex items-center">
          Announcement :
        </div>

        {/* Marquee container */}
        <div className="flex-1 overflow-hidden h-full">
          <div
            className="animate-marquee whitespace-nowrap inline-flex items-center h-full gap-10"
            style={{ animationDuration: '60s' }}
            onMouseOver={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseOut={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            <span className="inline-flex items-center gap-2 text-sm md:text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <strong>DBOS (Dihing Board of Open Schooling)</strong> is now inviting applications from committed institutions and education professionals to establish authorized <strong>Admission Counselling Centres</strong>, <strong>Study Centres</strong>, and <strong>State Coordinator Offices</strong> across India and abroad.

              <span className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">
                NEW
              </span>

              <Link href="/" className="text-white no-underline hover:underline">
                <b>Admissions Open for 2026 Session. |</b>
              </Link>

              <span className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">
                NEW
              </span>

              <Link href="/secondary-level" className="text-white no-underline hover:underline">
                <b>Admissions Open for Secondary Level Programs. |</b>
              </Link>

              <span className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">
                NEW
              </span>

              <Link href="/sr-secondary-level" className="text-white no-underline hover:underline">
                <b>Admissions Open for Senior Secondary Level Programs.</b>
              </Link>
            </span>

            {/* Duplicate for seamless loop */}
            <span className="inline-flex items-center gap-2 text-sm md:text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <strong>DBOS (Dihing Board of Open Schooling)</strong> is now inviting applications from committed institutions and education professionals to establish authorized <strong>Admission Counselling Centres</strong>, <strong>Study Centres</strong>, and <strong>State Coordinator Offices</strong> across India and abroad.

              <span className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">
                NEW
              </span>

              <Link href="/" className="text-white no-underline hover:underline">
                <b>Admissions Open for 2026 Session. |</b>
              </Link>

              <span className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">
                NEW
              </span>

              <Link href="/secondary-level" className="text-white no-underline hover:underline">
                <b>Admissions Open for Secondary Level Programs. |</b>
              </Link>

              <span className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">
                NEW
              </span>

              <Link href="/sr-secondary-level" className="text-white no-underline hover:underline">
                <b>Admissions Open for Senior Secondary Level Programs.</b>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
