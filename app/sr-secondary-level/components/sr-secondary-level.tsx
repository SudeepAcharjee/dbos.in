import React from "react";

const languageSubjects = [
  { code: "DB-301", name: "Hindi" },
  { code: "DB-302", name: "English" },
  { code: "DB-304", name: "Bengali" },
  { code: "DB-305", name: "Assamese" },
  { code: "DB-306", name: "Sanskrit" },
  { code: "DB-307", name: "Kannada" },
];

const academicSubjects = [
  { code: "DB-401", name: "Mathematics" },
  { code: "DB-402", name: "Home Science*" },
  { code: "DB-403", name: "Psychology*" },
  { code: "DB-404", name: "Geography*" },
  { code: "DB-405", name: "Economics" },
  { code: "DB-406", name: "Business Studies" },
  { code: "DB-407", name: "Physics*" },
  { code: "DB-408", name: "History" },
  { code: "DB-409", name: "Environmental Science*" },
  { code: "DB-410", name: "Chemistry*" },
  { code: "DB-411", name: "Political Science" },
  { code: "DB-412", name: "Biology" },
  { code: "DB-413", name: "Accountancy" },
  { code: "DB-414", name: "Computer Science*" },
  { code: "DB-415", name: "Sociology" },
  { code: "DB-416", name: "Data Entry Operator" },
  { code: "DB-417", name: "Mass Communication" },
  { code: "DB-418", name: "Painting Course" },
];

export default function SrSecondaryLevel() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-extrabold text-[#1b1260] sm:text-4xl">
          Senior Secondary Programme (Class XII) – Subject Choices
        </h1>
        <p className="mt-4 text-sm text-slate-700 sm:text-base leading-relaxed">
          Senior Secondary Programme is equivalent to XIIth standard. Learners
          who have successfully passed Secondary are eligible to take admission
          to Sr. Secondary Programme of DBOS. All applicants need to submit a
          self-attested copy of their Secondary Certificate. There is no
          restriction on combinations, except that minimum one language must be
          taken. Learners can choose their subjects from the DBOS List of
          Subjects as given below.
        </p>

        <div className="mt-8 space-y-4 text-sm text-slate-800 sm:text-base">
          <h2 className="text-xl font-bold text-[#e41e26]">
            Sr. Secondary Stage
          </h2>
          <p>Hindi and English medium are currently offered.</p>
          <h3 className="text-lg font-semibold text-[#e41e26]">
            Choice of Subjects
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Choose 5 subjects: 1 Vocational Subject and 4 Academic Subjects –
              1/2 language(s) from Group A and 3/2 other Academic Subjects from
              Group B.
            </li>
            <li>
              Learners may opt for up to two additional subjects (Language,
              Non-Language Academic, or Vocational) with requisite additional
              fee.
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
