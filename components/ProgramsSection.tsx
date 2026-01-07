import Link from "next/link";
import type { ReactNode } from "react";

const primaryPurple = "bg-[#1b1260]";

type ProgramCardProps = {
  title: string;
  description: string;
  href?: string;
  children?: ReactNode;
};

function ProgramCard({ title, description, href, children }: ProgramCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div>
        <h3 className="text-xl font-semibold text-[#ff6a1a]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          {description}
        </p>
        {children}
      </div>
      {href ? (
        <Link
          href={href}
          className="mt-5 inline-flex w-max items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7b21] to-[#ff4b1f] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:shadow-md"
        >
          Read more
        </Link>
      ) : (
        <button className="mt-5 inline-flex w-max items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7b21] to-[#ff4b1f] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:shadow-md">
          Read more
        </button>
      )}
    </article>
  );
}

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className={`${primaryPurple} py-14 text-white sm:py-16 lg:py-20`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Programs and Courses Offered
          </h2>
          <p className="mt-3 text-sm text-slate-200 sm:text-base">
            Choose the pathway that matches your goals — from Secondary to
            Vocational education.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProgramCard
            title="Secondary Level"
            description="Equivalent to the Xth standard. Minimum age 15 years (before exam). Ideal for learners who wish to complete their school education flexibly."
            href="/secondary-level"
          />
          <ProgramCard
            title="Sr. Secondary Level"
            description="Equivalent to the XIIth standard. For learners who have successfully passed the Secondary level and want to pursue higher studies or careers."
            href="/sr-secondary-level"
          />
          <ProgramCard
            title="Skill & Vocational Education"
            description="Hands‑on, practical programs designed to build job‑ready skills tailored for specific trades and professions."
          />
        </div>
      </div>
    </section>
  );
}


