
// components/AnnouncementBanner.tsx
"use client";

import Image from "next/image";
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
              <strong>DBOS (Dihing Board of Open Schooling)</strong> is now accepting applications from committed institutions and professionals to establish authorised <strong>Admission Counselling Centres</strong>, <strong>Study Centres</strong>, and <strong>State Coordinator Offices</strong> across India and abroad.

              <Image
                src="http://dbos.in/wp-content/uploads/2025/07/dbos-new-001.gif"
                alt="New"
                width={24}
                height={24}
                className="inline-block mx-1"
                style={{ maxHeight: '24px', height: 'auto' }}
                unoptimized
              />

              <Link href="/" className="text-white no-underline hover:underline">
                <b>Admission Going On for 2025 Session. |</b>
              </Link>

              <Image
                src="http://dbos.in/wp-content/uploads/2025/07/dbos-new-001.gif"
                alt="New"
                width={24}
                height={24}
                className="inline-block mx-1"
                style={{ maxHeight: '24px', height: 'auto' }}
                unoptimized
              />

              <Link href="/pharmacy" className="text-white no-underline hover:underline">
                <b>Admission Going On for Secondary Level Programs. |</b>
              </Link>

              <Image
                src="http://dbos.in/wp-content/uploads/2025/07/dbos-new-001.gif"
                alt="New"
                width={24}
                height={24}
                className="inline-block mx-1"
                style={{ maxHeight: '24px', height: 'auto' }}
                unoptimized
              />

              <Link href="/education" className="text-white no-underline hover:underline">
                <b>Admission Going On for Sr. Secondary Level Programs.</b>
              </Link>
            </span>

            {/* Duplicate for seamless loop */}
            <span className="inline-flex items-center gap-2 text-sm md:text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <strong>DBOS (Dihing Board of Open Schooling)</strong> is now accepting applications from committed institutions and professionals to establish authorised <strong>Admission Counselling Centres</strong>, <strong>Study Centres</strong>, and <strong>State Coordinator Offices</strong> across India and abroad.

              <Image
                src="http://dbos.in/wp-content/uploads/2025/07/dbos-new-001.gif"
                alt="New"
                width={24}
                height={24}
                className="inline-block mx-1"
                style={{ maxHeight: '24px', height: 'auto' }}
                unoptimized
              />

              <Link href="/" className="text-white no-underline hover:underline">
                <b>Admission Going On for 2025 Session. |</b>
              </Link>

              <Image
                src="http://dbos.in/wp-content/uploads/2025/07/dbos-new-001.gif"
                alt="New"
                width={24}
                height={24}
                className="inline-block mx-1"
                style={{ maxHeight: '24px', height: 'auto' }}
                unoptimized
              />

              <Link href="/pharmacy" className="text-white no-underline hover:underline">
                <b>Admission Going On for Secondary Level Programs. |</b>
              </Link>

              <Image
                src="http://dbos.in/wp-content/uploads/2025/07/dbos-new-001.gif"
                alt="New"
                width={24}
                height={24}
                className="inline-block mx-1"
                style={{ maxHeight: '24px', height: 'auto' }}
                unoptimized
              />

              <Link href="/education" className="text-white no-underline hover:underline">
                <b>Admission Going On for Sr. Secondary Level Programs.</b>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
