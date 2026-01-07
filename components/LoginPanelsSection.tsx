import { Building2, GraduationCap, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type LoginCardProps = {
  title: string;
  buttonLabel: string;
  icon: ReactNode;
  href: string;
};

function LoginCard({ title, buttonLabel, icon, href }: LoginCardProps) {
  return (
    <article className="flex flex-col items-center justify-between rounded-2xl bg-[#1b1260] px-6 py-8 text-center text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 rounded-full bg-linear-to-r from-[#ff7b21] to-[#ff4b1f] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:scale-[1.02] hover:brightness-105 hover:shadow-md active:scale-[0.99]"
      >
        {buttonLabel}
      </a>
    </article>
  );
}

export default function LoginPanelsSection() {
  return (
    <section id="student-section" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
            Student &amp; Academic Portals
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Access verification, student, and academic centre dashboards.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <LoginCard
            title="Student Verification"
            buttonLabel="Verify Now"
            icon={<ShieldCheck className="h-8 w-8 text-[#ff6a1a]" />}
            href="https://www.dbos.co.in"
          />
          <LoginCard
            title="Student Login"
            buttonLabel="Login"
            icon={<GraduationCap className="h-8 w-8 text-[#ff6a1a]" />}
            href="https://www.dbos.co.in"
          />
          <LoginCard
            title="Academic Centre Login"
            buttonLabel="Login"
            icon={<Building2 className="h-8 w-8 text-[#ff6a1a]" />}
            href="https://www.dbos.co.in"
          />
        </div>
      </div>
    </section>
  );
}
