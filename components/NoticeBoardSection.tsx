// components/NoticeBoardSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Removed query, where, orderBy to fix build
import { db } from "@/lib/firebase";

type Notice = {
  id: string;
  content: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdAt: any;
  isActive: boolean;
  priority?: string;
  targetAudience?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expiryDate?: any;
};

export default function NoticeBoardSection() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        setError(null);

        const noticesRef = collection(db, "notice");

        // Fetch all notices and filter/sort client-side to avoid build errors 
        // with missing 'where'/'orderBy' exports in current environment.
        const querySnapshot = await getDocs(noticesRef);

        const fetchedNotices: Notice[] = [];

        querySnapshot.docs.forEach((doc) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data = doc.data() as any;
          // Client-side filtering
          if (data.isActive === true) {
            fetchedNotices.push({
              id: doc.id,
              content: data.content || "",
              title: data.title || "",
              createdAt: data.createdAt,
              isActive: data.isActive,
              priority: data.priority,
              targetAudience: data.targetAudience,
              expiryDate: data.expiryDate,
            });
          }
        });

        // Client-side sort by createdAt descending
        fetchedNotices.sort((a, b) => {
          const tA = (a.createdAt && typeof a.createdAt.seconds === 'number') ? a.createdAt.seconds : 0;
          const tB = (b.createdAt && typeof b.createdAt.seconds === 'number') ? b.createdAt.seconds : 0;
          return tB - tA;
        });

        setNotices(fetchedNotices);
      } catch (err) {
        console.error("Error fetching notices:", err);
        setError("Unable to load notices at this time.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <section id="notice" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-stretch">
        {/* Imagery area (single banner) */}
        <div className="relative w-full overflow-hidden rounded-2xl aspect-video md:aspect-auto md:h-full md:min-h-72">
          <Image
            src="/notice_banner.webp"
            alt="DBOS notice board banner"
            fill
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 100vw, 100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Notice board */}
        <aside className="flex flex-col rounded-2xl border border-[#ff6a1a]/40 bg-white p-6 shadow-sm">
          <h2 className="border-b border-[#ff6a1a]/60 pb-3 text-xl font-semibold text-[#ff6a1a]">
            Notice Board
          </h2>
          <div className="mt-4 h-64 overflow-y-auto relative custom-scrollbar p-1">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ff6a1a] border-t-transparent"></div>
                  <p className="text-sm text-slate-400">Loading notices...</p>
                </div>
              </div>
            ) : error ? (
              <p className="text-sm text-red-500">{error}</p>
            ) : notices.length === 0 ? (
              <p className="text-sm text-slate-400">
                No notices available at the moment. Please check back soon.
              </p>
            ) : (
              <div className="flex flex-col gap-3 text-sm text-slate-700">
                {notices.map((notice, idx) => (
                  <div
                    key={`${notice.id}-${idx}`}
                    className="rounded-lg bg-slate-50 px-3 py-2 shadow-sm"
                  >
                    <div className="font-medium text-[#1b1260]">{notice.title}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
