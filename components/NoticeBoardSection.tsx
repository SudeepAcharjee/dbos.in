// components/NoticeBoardSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Notice = {
  id: string;
  content: string;
  title: string;
  createdAt: any;
  isActive: boolean;
  priority?: string;
  targetAudience?: string;
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

        // Try to fetch with filter and order
        // Note: This requires a composite index in Firestore
        let q;
        try {
          q = query(
            noticesRef,
            where("isActive", "==", true),
            orderBy("createdAt", "desc")
          );
        } catch (indexError) {
          // Fallback: just order by createdAt if composite index doesn't exist
          console.warn(
            "Composite index not found, using simple query:",
            indexError
          );
          q = query(noticesRef, orderBy("createdAt", "desc"));
        }

        const querySnapshot = await getDocs(q);
        const fetchedNotices: Notice[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Filter for active notices client-side if needed
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
        <div className="relative w-full overflow-hidden rounded-2xl shadow-md aspect-video md:aspect-auto md:h-full md:min-h-72">
          <Image
            src="/notice_banner.webp"
            alt="DBOS notice board banner"
            fill
            sizes="(min-width: 1024px) 600px, (min-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Notice board */}
        <aside className="flex flex-col rounded-2xl border border-[#ff6a1a]/40 bg-white p-6 shadow-sm">
          <h2 className="border-b border-[#ff6a1a]/60 pb-3 text-xl font-semibold text-[#ff6a1a]">
            Notice Board
          </h2>
          <div className="mt-4 h-64 overflow-hidden relative">
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
              <div
                className="flex flex-col gap-3 text-sm text-slate-700 absolute w-full top-0 left-0"
                style={{ animation: "marquee-vertical 10s linear infinite" }}
              >
                {[...notices, ...notices].map((notice, idx) => (
                  <div
                    key={`${notice.id}-${idx}`}
                    className="rounded-lg bg-slate-50 px-3 py-2 shadow-sm"
                  >
                    {notice.content}
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
