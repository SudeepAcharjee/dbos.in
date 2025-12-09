import React from "react";

const languageSubjects = [
  { code: "DB-101", name: "Hindi" },
  { code: "DB-102", name: "English" },
  { code: "DB-104", name: "Bengali" },
  { code: "DB-105", name: "Assamese" },
  { code: "DB-106", name: "Kannada" },
  { code: "DB-107", name: "Sanskrit" },
];

const academicSubjects = [
  { code: "DB-201", name: "Mathematics" },
  { code: "DB-202", name: "Science" },
  { code: "DB-203", name: "Social Science" },
  { code: "DB-204", name: "Home Science*" },
  { code: "DB-205", name: "Indian Culture & Heritage" },
  { code: "DB-206", name: "Computer Science" },
];

export default function SecondaryLevel() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-extrabold text-[#1b1260] sm:text-4xl">
          Secondary Certificate (Class X) – Subject Choices
        </h1>
        <p className="mt-4 text-sm text-slate-700 sm:text-base leading-relaxed">
          Secondary Certificate is equivalent to the Xth standard. Eligibility
          for admission is minimum 15 years of age (before exam). There is no
          restriction on subject combinations, except that minimum one language
          must be taken. Learners can choose their subjects from the DBOS List
          of Subjects as given below.
        </p>

        <div className="mt-8 space-y-4 text-sm text-slate-800 sm:text-base">
          <h2 className="text-xl font-bold text-[#e41e26]">Secondary Stage</h2>
          <p>Hindi and English medium are currently offered.</p>
          <h3 className="text-lg font-semibold text-[#e41e26]">
            Choice of Subjects
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Choose 5 subjects: 1 Vocational + 4 Academic (½ from Group A and
              3½ from Group B), or custom per DBOS guidelines.
            </li>
            <li>
              Up to two additional subjects (Language, Academic, or Vocational)
              may be taken with requisite additional fee.
            </li>
            <li>
              Subjects marked with * have theory as well as practical work.
            </li>
          </ul>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <SubjectTable title="Group A – Languages" data={languageSubjects} />
          <SubjectTable
            title="Group B – Academic / Other"
            data={academicSubjects}
          />
        </div>
      </div>
    </section>
  );
}

function SubjectTable({
  title,
  data,
}: {
  title: string;
  data: { code: string; name: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <div className="bg-[#0a74f0] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </div>
      <div className="grid grid-cols-[0.6fr_1fr_2fr] text-sm text-slate-800">
        <HeaderCell>Sl. No</HeaderCell>
        <HeaderCell>Subject Code</HeaderCell>
        <HeaderCell>Subject Name</HeaderCell>
        {data.map((item, idx) => (
          <RowCells key={item.code} odd={idx % 2 === 1}>
            <div>{idx + 1}</div>
            <div>{item.code}</div>
            <div>{item.name}</div>
          </RowCells>
        ))}
      </div>
    </div>
  );
}

function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0a74f0] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
      {children}
    </div>
  );
}

function RowCells({
  children,
  odd,
}: {
  children: React.ReactNode[];
  odd?: boolean;
}) {
  return (
    <>
      {React.Children.map(children, (child, i) => (
        <div
          className={`px-4 py-3 ${
            odd ? "bg-slate-50" : "bg-white"
          } border-b border-slate-200 ${
            i === 0 ? "" : "border-l border-slate-200"
          }`}
        >
          {child}
        </div>
      ))}
    </>
  );
}
