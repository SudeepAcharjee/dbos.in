type DownloadItem = {
  sl: number;
  name: string;
  href: string;
};

const downloads: DownloadItem[] = [
  {
    sl: 1,
    name: "Registration Form",
    href: "/downloads/forms/registration.pdf",
  },
  {
    sl: 2,
    name: "Duplicate Certificate Form",
    href: "/downloads/forms/duplicate-certificate.pdf",
  },
  { sl: 3, name: "Correction Form", href: "/downloads/forms/correction.pdf" },
  { sl: 4, name: "Migration Form", href: "/downloads/forms/migration.pdf" },
  { sl: 5, name: "Affiliation Form", href: "/downloads/forms/affiliation.pdf" },
  {
    sl: 6,
    name: "Guidelines of Affiliation",
    href: "/downloads/forms/guidelines-affiliation.pdf",
  },
];

export default function DownloadsTable() {
  return (
    <section className=" mb-5 mx-auto max-w-6xl rounded-3xl border-4 border-blue-600 bg-white px-4 py-8 shadow-md sm:px-8 sm:py-10">
      <h1 className="text-center text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
        Downloads
      </h1>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-left shadow-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <Th className="w-20 text-center">Sl. No</Th>
              <Th>NAME</Th>
              <Th className="w-32 text-center">Download Files</Th>
            </tr>
          </thead>
          <tbody>
            {downloads.map((item, idx) => (
              <tr
                key={item.sl}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <Td className="text-center font-semibold">{item.sl}</Td>
                <Td>{item.name}</Td>
                <Td className="text-center">
                  <a
                    href={item.href}
                    className="font-semibold uppercase text-blue-600 underline underline-offset-2 hover:text-blue-700"
                    download
                  >
                    Download
                  </a>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide sm:text-sm ${className}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`px-4 py-3 text-sm text-slate-800 ${className}`}>
      {children}
    </td>
  );
}
