type Item = {
  text: string;
  href?: string;
};

const recognitions: Item[] = [
  {
    text: "Ministry of Human Resource Development - Certificate of Approval",
    href: "/downloads/recognitions/mhrd-certificate.jpg",
  },
  {
    text: "Dihing Board of Open Schooling is a Member of Association of Indian Universities",
    href: "#",
  },
  {
    text: "Equivalence to / Recognition Of DBOS– (COBSE ) Council of Boards of School Education in India",
    href: "#",
  },
  {
    text: "Equivalence to / Recognition of Dihing Board of Open Schooling for purposes of academic pursuit in State and University",
    href: "#",
  },
  {
    text: "Equivalenced / Recognition from Madhyamik Shiksha Parishad, Uttar Pradesh Certified by Principal Secretary to Governor (U.P.)",
    href: "#",
  },
  {
    text: "Ministry of Electronics & Information Technology (MeitY) - Certification Of Affiliation",
    href: "#",
  },
  {
    text: "The Gazette of India Ministry of Human Resource Development Notification",
    href: "#",
  },
  {
    text: "The Gazette of India Gazette (Extra), Government of India",
    href: "#",
  },
  {
    text: "Recognition by National Institute of Open Schooling (NIOS)",
    href: "#",
  },
  {
    text: "Recognition by Association of Indian Universities (AIU) & Trust Approval",
    href: "#",
  },
  {
    text: "Government of India Lok Sabha Recognition Letter – Dihing Board of Open Schooling (DBOS)",
    href: "#",
  },
  {
    text: "Ministry of Education (HRD) Approval – Official Notification for Dihing Board of Open Schooling (DBOS)",
    href: "#",
  },
];

export default function RecognitionApprovals() {
  return (
    <section className="mx-auto mb-8 max-w-6xl rounded-3xl border border-orange-500 bg-white px-4 py-8 shadow-sm sm:px-8 sm:py-10">
      <h1 className="text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
        Our Recognition &amp; Approvals
      </h1>
      <ul className="mt-6 space-y-3 text-slate-800">
        {recognitions.map((item, idx) => (
          <li
            key={`${item.text}-${idx}`}
            className="flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/40 px-3 py-3 transition hover:bg-orange-50"
          >
            <span className="mt-1 text-orange-500">↪</span>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm font-semibold text-blue-700 underline-offset-2 hover:underline sm:text-base"
              >
                {item.text} – Click Here
              </a>
            ) : (
              <span className="text-sm font-semibold sm:text-base">
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
