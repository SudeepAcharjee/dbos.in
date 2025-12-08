const points = {
  openSchooling: [
    "Choose subjects freely.",
    "Study at their own pace and location.",
    "Appear for exams when ready, with multiple attempts.",
  ],
  importance: [
    "Inclusivity: Brings education to remote areas and marginalized communities.",
    "Employment Readiness: Integrates vocational education with academics.",
    "Alignment with NEP 2020: Supports lifelong and skill-based learning.",
  ],
  vision: [
    "Democratize and universalize higher education with non-formal, continuing methods.",
    "Provide education regardless of age, gender, caste, or location.",
    "Offer affordable schooling and uphold educational rights.",
    "Develop local craft and skill-based education aligned with standards.",
  ],
  mission: [
    "Bring higher education to every learner in India’s remotest areas.",
    "Provide job-oriented and professional education recognized by sectors.",
    "Revolutionize traditional education with problem-solving curricula.",
    "Promote vocational study that supports rural development.",
    "Encourage lectures, debates, and publication of educational materials.",
  ],
  keyFeatures: [
    "Flexible Learning: No age bar, free subject choice, multiple exam attempts.",
    "Academic + Vocational Courses for industry-ready skills.",
    "Credit Transfer: Accepts credits from recognized boards.",
    "Affordable Fees to support all socio-economic groups.",
    "Digital Education with online resources and e-learning.",
  ],
  whyChoose: [
    "Nationwide Acceptance of certificates for higher studies and jobs.",
    "Multiple Exam Opportunities: Up to five chances per subject.",
    "Academic + Vocational blend for higher education and employment.",
    "Affordable & Accessible for urban and rural learners.",
  ],
};

export default function AboutContent() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-6 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            About DBOS
          </div>
          <h1 className="text-3xl font-extrabold leading-snug text-[#1b1260] sm:text-4xl">
            About Dihing Board of Open Schooling (DBOS)
          </h1>
          <p className="mt-4 text-base text-slate-700 sm:text-lg">
            DBOS is India&apos;s premier government recognized open schooling
            board, providing Secondary (10th) and Senior Secondary (12th)
            education alongside skill and vocational courses for learners of
            every age. It serves working professionals, school dropouts, rural
            youth, homemakers, and differently-abled learners with flexible,
            learner-first pathways.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-[#ff6a1a]">
            <a href="#programs" className="underline-offset-4 hover:underline">
              All Courses &amp; Vocational Programs
            </a>
            <span>•</span>
            <a
              href="#recognition"
              className="underline-offset-4 hover:underline"
            >
              Recognition &amp; Approvals
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card
            title="What Is Open Schooling and Why It Matters"
            items={points.openSchooling}
          />
          <Card
            title="Importance of Open Schooling in India"
            items={points.importance}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card title="Vision of DBOS" items={points.vision} />
          <Card title="Mission of DBOS" items={points.mission} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card title="Key Features of DBOS" items={points.keyFeatures} />
          <Card title="Why Students Choose DBOS" items={points.whyChoose} />
        </div>
      </section>

      <section id="recognition" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
            Government Recognition &amp; Approvals
          </h2>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            DBOS holds extensive national recognition and equivalence, ensuring
            its certificates are valid across India and abroad:
          </p>
          <ol className="mt-5 space-y-2 text-sm text-slate-800 sm:text-base">
            <li>
              1. Ministry of Human Resource Development (MHRD), Government of
              India
            </li>
            <li>2. Association of Indian Universities (AIU)</li>
            <li>3. Council of Boards of School Education in India (COBSE)</li>
            <li>4. State &amp; University Equivalence Letters</li>
            <li>5. Madhyamik Shiksha Parishad, Uttar Pradesh</li>
            <li>
              6. Ministry of Electronics &amp; Information Technology (MeitY)
            </li>
            <li>7. The Gazette of India – Extraordinary Notification</li>
            <li>8. National Institute of Open Schooling (NIOS)</li>
            <li>9. Government of India Lok Sabha</li>
            <li>10. Ministry of Education (HRD) Approval</li>
          </ol>
          <p className="mt-4 text-sm text-slate-700 sm:text-base">
            These recognitions guarantee that DBOS certificates are accepted for
            higher studies, government jobs, and professional opportunities.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex w-max items-center rounded-full bg-[#ff6a1a] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
          >
            View All Certificates
          </a>
        </div>
      </section>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-xl font-bold text-[#1b1260] sm:text-2xl">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-800 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#ff6a1a]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
