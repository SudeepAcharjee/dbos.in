// components/RecognitionSection.tsx

const recognitions: string[] = [
  "Ministry of Human Resource Development – Certificate of Approval.",
  "Dihing Board of Open Schooling is a Member of Association of Indian Universities.",
  "The Gazette of India Gazette (Extra), Government of India.",
  "Equivalence to / Recognition of DBOS – (COBSE) Council of Boards of School Education in India.",
  "Equivalence to / Recognition of Dihing Board of Open Schooling for academic pursuit in State and University.",
  "Equivalenced / Recognition from Madhyamik Shiksha Parishad, Uttar Pradesh certified by Principal Secretary to Governor (U.P.).",
  "Ministry of Electronics & Information Technology (MeitY) – Certification of Affiliation.",
  "Notification from Ministry of Human Resource Development, Government of India.",
  "Recognition by National Institute of Open Schooling (NIOS).",
  "Recognition by Association of Indian Universities (AIU) & Trust Approval.",
];

const primaryPurple = "bg-[#1b1260]";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      className={`${primaryPurple} py-12 text-white sm:py-16`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Our Recognition &amp; Approvals
            </h2>
            <p className="mt-3 text-sm text-slate-200 sm:text-base">
              DBOS is recognised and approved by various government bodies and
              institutions, ensuring that our certificates are widely accepted.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-100">
              {recognitions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[3px] text-lg text-[#ff6a1a]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="downloads"
            className="rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-orange-300">
              Why Choose DBOS?
            </h3>
            <p className="mt-3 text-sm text-slate-100">
              Flexible open schooling, recognised qualifications, and dedicated
              support for learners from diverse backgrounds including working
              professionals and school dropouts.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-100/90">
              <p>• Flexible admission &amp; examination schedule</p>
              <p>• Wide range of subject choices</p>
              <p>• Supportive academic centres across regions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


