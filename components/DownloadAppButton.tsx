"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import * as firestore from "firebase/firestore";
import { db } from "@/lib/firebase";

// Workaround for TypeScript error: Module '"firebase/firestore"' has no exported member 'doc' or 'getDoc'.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { doc, getDoc } = firestore as any;

export default function DownloadAppButton() {
  const [downloadUrl, setDownloadUrl] = useState("/app-release.apk");

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const docRef = doc(db, "apk-version", "latest");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.downloadURL) {
            setDownloadUrl(data.downloadURL);
          }
        }
      } catch (error) {
        console.error("Error fetching latest APK version:", error);
      }
    };

    fetchLatestVersion();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-gradient-to-br from-[#1b1260] to-[#5b4b9a] p-8 shadow-xl sm:p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Get Our Mobile App for Students
          </h2>
          <p className="mt-2 text-sm text-slate-200 sm:text-base">
            Access your courses, assignments, and more on the go
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {/* APK Download Button */}
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl bg-white px-6 py-3 shadow-lg transition hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1260] text-white">
              <Download size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-600">Download</p>
              <p className="text-lg font-semibold text-[#1b1260]">
                Download App
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
