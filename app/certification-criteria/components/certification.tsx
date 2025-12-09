type CriteriaRow = {
  programme: string;
  description: string;
  certification: string;
};

const criteria: CriteriaRow[] = [
  {
    programme: "Secondary",
    description:
      "A minimum of 33% marks in the aggregate of Theory & Practical. Theory includes continuous assessment with 20% weightage. Marks of continuous assessment will be shown in the marksheet in separate column.",
    certification: "Pass in 5 subjects, including at least one language.",
  },
  {
    programme: "Sr. Secondary",
    description:
      "A minimum of 33% marks in the aggregate of Theory & Practical. Theory includes continuous assessment with 20% weightage. Marks of continuous assessment will be shown in the marksheet in separate column.",
    certification: "Pass in 5 subjects, including at least one language.",
  },
];

export default function CertificationCriteria() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-5">
      <div className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-center text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
          Pass / Certification Criteria
        </h1>
        <p className="mt-4 text-center text-sm text-slate-700 sm:text-base">
          The Pass/Certification criteria are given in the table below:
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-[1fr_2fr_1.3fr] bg-[#2c0d71] text-white">
            <HeaderCell>Class / Programme</HeaderCell>
            <HeaderCell>Pass Criteria in Individual Subjects</HeaderCell>
            <HeaderCell>Certification Criteria</HeaderCell>
          </div>
          {criteria.map((row, idx) => (
            <div
              key={row.programme}
              className={`grid grid-cols-[1fr_2fr_1.3fr] text-sm sm:text-base ${
                idx % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <Cell className="font-semibold text-[#1b1260]">
                {row.programme}
              </Cell>
              <Cell>{row.description}</Cell>
              <Cell>{row.certification}</Cell>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wide sm:text-sm">
      {children}
    </div>
  );
}

function Cell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-4 py-4 leading-relaxed text-slate-800 ${className}`}>
      {children}
    </div>
  );
}
