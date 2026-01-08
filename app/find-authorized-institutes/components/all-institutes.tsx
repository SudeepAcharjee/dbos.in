"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Institute = {
  code: string;
  name: string;
  contactPerson: string;
  state: string;
};

export default function AllInstitutesTable() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return data;
    return data.filter((item) => item.name.toLowerCase().includes(q));
  }, [search, data]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // db is already imported from firebase.ts

        const configs = [
          {
            col: "counsellingcentres",
            map: (payload: Record<string, unknown>, id: string): Institute => ({
              code: (payload.displayId as string) ?? id,
              name: (payload.centreName as string) ?? "Unknown",
              contactPerson: (payload.email as string) ?? "-",
              state: (payload.state as string) ?? "-",
            }),
          },
          {
            col: "coordinators",
            map: (payload: Record<string, unknown>, id: string): Institute => ({
              code: (payload.code as string) ?? id,
              name: (payload.name as string) ?? "Unknown",
              contactPerson: (payload.email as string) ?? "-",
              state: (payload.state as string) ?? "-",
            }),
          },
          {
            col: "studycentres",
            map: (payload: Record<string, unknown>, id: string): Institute => ({
              code: (payload.centreCode as string) ?? id,
              name: (payload.centreName as string) ?? "Unknown",
              contactPerson: (payload.email as string) ?? "-",
              state: (payload.state as string) ?? "-",
            }),
          },
        ];

        const snapshots = await Promise.all(
          configs.map(({ col }) => getDocs(query(collection(db, col))))
        );

        const docs = snapshots.flatMap((snapshot, idx) =>
          snapshot.docs.map((doc) => {
            const payload = doc.data() as Record<string, unknown>;
            return configs[idx].map(payload, doc.id);
          })
        );

        setData(docs);
        if (docs.length === 0) {
          setError("No institutes found.");
        }
      } catch (err) {
        console.error("Failed to load institutes from Firebase", err);
        setError("Unable to load institutes. Please try again later.");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-7">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-bold text-[#1b1260] sm:text-2xl">
            Find Authorized Institutes
          </h1>
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold text-slate-700">
              Search:
            </label>
            <div className="relative w-full sm:w-96">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5b4b9a]">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search by Name of Organisation..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#5b4b9a] px-10 py-2 text-sm text-slate-800 outline-none transition focus:border-[#1b1260] focus:ring-2 focus:ring-[#1b1260]/20"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {error}
          </div>
        )}

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200 text-left shadow-sm">
            <thead>
              <tr className="bg-[#d9ecf5] text-[#1b1260]">
                <Th>Code</Th>
                <Th>Name of Organisation</Th>
                <Th>Contact Email</Th>
                <Th>State / UT</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-5 text-center text-sm text-slate-500"
                  >
                    Loading institutes...
                  </td>
                </tr>
              ) : paged.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-5 text-center text-sm text-slate-500"
                  >
                    No institutes found.
                  </td>
                </tr>
              ) : (
                paged.map((inst, idx) => (
                  <tr
                    key={inst.code}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <Td>{inst.code}</Td>
                    <Td>{inst.name}</Td>
                    <Td>{inst.contactPerson}</Td>
                    <Td>{inst.state}</Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {filtered.length > pageSize && (
            <div className="mt-4 flex items-center justify-end gap-3 text-sm text-slate-700">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="rounded-full border border-slate-300 px-3 py-1 disabled:opacity-50"
              >
                Prev
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="rounded-full border border-slate-300 px-3 py-1 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#1b1260] sm:text-sm">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-3 text-sm text-slate-800">{children}</td>;
}
