// components/NoticeBoardSection.tsx
import Image from "next/image";

const notices: string[] = [
  "Admission forms for 2025 Session are now available.",
  "Students are advised to verify their records through the Student Verification portal.",
  "Academic Centre registration for new centres is open.",
];

export default function NoticeBoardSection() {
  return (
    <section id="notice" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-stretch">
        {/* Imagery area (single banner) */}
        <div className="relative h-full min-h-64 w-full overflow-hidden rounded-2xl shadow-md sm:min-h-72">
          <Image
            src="/notice_banner.webp"
            alt="DBOS notice board banner"
            fill
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Notice board */}
        <aside className="flex flex-col rounded-2xl border border-[#ff6a1a]/40 bg-white p-6 shadow-sm">
          <h2 className="border-b border-[#ff6a1a]/60 pb-3 text-xl font-semibold text-[#ff6a1a]">
            Notice Board
          </h2>
          <div className="mt-4 overflow-hidden">
            {notices.length === 0 ? (
              <p className="text-sm text-slate-400">
                No notices available at the moment. Please check back soon.
              </p>
            ) : (
              <div className="relative">
                <div
                  className="flex items-center gap-3 whitespace-nowrap text-sm text-slate-700"
                  style={{ animation: "marquee 18s linear infinite" }}
                >
                  {[...notices, ...notices].map((notice, idx) => (
                    <div
                      key={`${notice}-${idx}`}
                      className="rounded-lg bg-slate-50 px-3 py-2 shadow-sm"
                    >
                      {notice}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
