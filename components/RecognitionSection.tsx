import { Award, BookOpen, CheckCircle, FileCheck, Globe, Landmark, Scale, School } from "lucide-react";
import type { ReactNode } from "react";

const recognitions = [
  {
    text: "Ministry of Human Resource Development – Certificate of Approval",
    icon: <Landmark className="h-6 w-6 text-amber-500" />,
  },
  {
    text: "Member of Association of Indian Universities (AIU)",
    icon: <School className="h-6 w-6 text-blue-400" />,
  },
  {
    text: "The Gazette of India (Extra), Government of India",
    icon: <FileCheck className="h-6 w-6 text-emerald-400" />,
  },
  {
    text: "Equivalence to / Recognition of DBOS – COBSE",
    icon: <Globe className="h-6 w-6 text-indigo-400" />,
  },
  {
    text: "Equivalence for academic pursuit in State and University",
    icon: <Award className="h-6 w-6 text-purple-400" />,
  },
  {
    text: "Certified by Principal Secretary to Governor (U.P.)",
    icon: <Scale className="h-6 w-6 text-rose-400" />,
  },
  {
    text: "MeitY – Certification of Affiliation",
    icon: <CheckCircle className="h-6 w-6 text-cyan-400" />,
  },
  {
    text: "Recognition by National Institute of Open Schooling (NIOS)",
    icon: <BookOpen className="h-6 w-6 text-orange-400" />,
  },
];

const primaryPurple = "bg-[#1b1260]";

function RecognitionCard({ text, icon }: { text: string; icon: ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:shadow-lg">
      <div className="mt-1 shrink-0 rounded-lg bg-white/10 p-2">{icon}</div>
      <p className="text-sm font-medium leading-normal text-slate-100/90">{text}</p>
    </div>
  );
}

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      className={`${primaryPurple} relative overflow-hidden py-16 text-white lg:py-24`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -m-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -m-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
            Accreditations & <span className="text-[#ff6a1a]">Approvals</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            DBOS is recognised and approved by various government bodies and
            institutions, ensuring widely accepted certificates for higher education and employment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recognitions.map((item, idx) => (
            <RecognitionCard key={idx} text={item.text} icon={item.icon} />
          ))}
        </div>

        <div className="relative mt-20 overflow-hidden rounded-3xl bg-white p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-extrabold text-[#1b1260] sm:text-4xl">
            Why Choose DBOS?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Empowering learners with flexible education, recognized qualifications, and comprehensive support.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="group rounded-2xl bg-slate-50 p-6 transition hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 border border-slate-100">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a1a]/10 text-[#ff6a1a] transition group-hover:scale-110">
                <CheckCircle className="h-7 w-7" />
              </div>
              <h4 className="font-bold text-[#1b1260]">Flexible Timing</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Study at your own pace with examination schedules that fit your life.
              </p>
            </div>

            <div className="group rounded-2xl bg-slate-50 p-6 transition hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 border border-slate-100">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a1a]/10 text-[#ff6a1a] transition group-hover:scale-110">
                <BookOpen className="h-7 w-7" />
              </div>
              <h4 className="font-bold text-[#1b1260]">Wide Subject Choice</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Diverse range of subjects tailored to various career paths and interests.
              </p>
            </div>

            <div className="group rounded-2xl bg-slate-50 p-6 transition hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 border border-slate-100">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a1a]/10 text-[#ff6a1a] transition group-hover:scale-110">
                <Globe className="h-7 w-7" />
              </div>
              <h4 className="font-bold text-[#1b1260]">Nationwide Centres</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Access support and resources from our network of academic centres across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


