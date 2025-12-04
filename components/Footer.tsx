// components/Footer.tsx
import Link from "next/link";

const primaryPurple = "bg-[#1b1260]";

export default function Footer() {
  return (
    <footer className={`${primaryPurple} border-t border-white/10`}>
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-200">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Brand & description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full bg-white/10" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
                  Dihing Board of
                </p>
                <p className="text-lg font-bold text-white">Open Schooling</p>
                <p className="text-[11px] text-slate-200">
                  A Govt. Recognised Board
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-xs text-slate-200">
              Dihing Board of Open Schooling creates opportunities for learners
              to complete their Secondary and Senior Secondary education through
              flexible open schooling.
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <p>
                <span className="font-semibold">Phone:</span> +91 69002 15858 ||
                +91 84864 12762 (10 am to 5 pm)
              </p>
              <p>
                <span className="font-semibold">Email:</span> support@dbos.in
              </p>
              <p>
                <span className="font-semibold">Address:</span> Barpeta Road,
                Dist- Barpeta, State- Assam - 781315
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-yellow-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#about" className="hover:text-orange-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-300">
                  Aims &amp; Objectives
                </Link>
              </li>
              <li>
                <Link href="#recognition" className="hover:text-orange-300">
                  Recognition
                </Link>
              </li>
              <li>
                <Link href="#downloads" className="hover:text-orange-300">
                  Prospectus &amp; Downloads
                </Link>
              </li>
              <li>
                <Link href="#student-section" className="hover:text-orange-300">
                  Student Section
                </Link>
              </li>
              <li>
                <Link href="#apply" className="hover:text-orange-300">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-yellow-300">
              Our Programs
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#programs" className="hover:text-orange-300">
                  Secondary Level
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-orange-300">
                  Sr. Secondary Level
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-orange-300">
                  Skill &amp; Vocational Education
                </Link>
              </li>
              <li>
                <Link href="#recognition" className="hover:text-orange-300">
                  Certification Criteria
                </Link>
              </li>
              <li>
                <Link href="#apply" className="hover:text-orange-300">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-[11px] text-slate-300">
          © {new Date().getFullYear()} Dihing Board of Open Schooling. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}


