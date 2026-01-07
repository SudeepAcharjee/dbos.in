// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const primaryPurple = "bg-[#1b1260]";

export default function Footer() {
  return (
    <footer className={`${primaryPurple} border-t border-white/10`}>
      <div className="mx-auto max-w-7xl px-4 py-10 text-base text-slate-200">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Brand & description */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-auto">
                <Image
                  src="/logo.jpg"
                  alt="DBOS Logo"
                  width={230}
                  height={140}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-100/90">
              Dihing Board of Open Schooling creates opportunities for learners
              to complete their Secondary and Senior Secondary education through
              flexible open schooling.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                +91 69002 15858 || +91 84864 12762 (10 am to 5 pm)
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                support@dbos.in
              </p>
              <p>
                <span className="font-semibold text-white">Address:</span>{" "}
                Barpeta Road, Dist- Barpeta, State- Assam - 781315
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-yellow-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-orange-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/recognition-approvals" className="hover:text-orange-300">
                  Recognition
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-orange-300">
                  Prospectus &amp; Downloads
                </Link>
              </li>
              <li>
                <Link href="/find-authorized-institutes" className="hover:text-orange-300">
                  Find Authorized Institutes
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-orange-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-yellow-300">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/secondary-level" className="hover:text-orange-300">
                  Secondary Level
                </Link>
              </li>
              <li>
                <Link href="/sr-secondary-level" className="hover:text-orange-300">
                  Sr. Secondary Level
                </Link>
              </li>
              <li>
                <Link href="/certification-criteria" className="hover:text-orange-300">
                  Certification Criteria
                </Link>
              </li>
              <li>
                <Link href="/affiliation-enquiry-form" className="hover:text-orange-300">
                  Affiliation Enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-slate-300">
          © {new Date().getFullYear()} Dihing Board of Open Schooling. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}


