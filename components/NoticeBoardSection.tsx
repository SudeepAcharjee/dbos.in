// components/NoticeBoardSection.tsx

const notices: string[] = [
  "Admission forms for 2025 Session are now available.",
  "Students are advised to verify their records through the Student Verification portal.",
  "Academic Centre registration for new centres is open.",
];

export default function NoticeBoardSection() {
  return (
    <section id="notice" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-stretch">
        {/* Imagery area (replace backgrounds with your own images) */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-40 rounded-xl bg-[url('/images/classroom-1.jpg')] bg-cover bg-center shadow-md sm:h-48" />
          <div className="h-40 rounded-xl bg-[url('/images/classroom-2.jpg')] bg-cover bg-center shadow-md sm:h-48" />
          <div className="h-40 rounded-xl bg-[url('/images/student-laptop.jpg')] bg-cover bg-center shadow-md sm:h-48 sm:col-span-2" />
        </div>

        {/* Notice board */}
        <aside className="flex flex-col rounded-2xl border border-[#ff6a1a]/40 bg-white p-6 shadow-sm">
          <h2 className="border-b border-[#ff6a1a]/60 pb-3 text-xl font-semibold text-[#ff6a1a]">
            Notice Board
          </h2>
          <div className="mt-4 space-y-4 text-sm text-slate-700">
            {notices.length === 0 ? (
              <p className="text-slate-400">
                No notices available at the moment. Please check back soon.
              </p>
            ) : (
              notices.map((notice) => (
                <div
                  key={notice}
                  className="rounded-lg bg-slate-50 px-3 py-2 text-sm shadow-sm"
                >
                  <p>{notice}</p>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}


