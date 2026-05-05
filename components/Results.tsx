"use client";

import React, { useState } from "react";
import * as firestore from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Search,
  Download,
  GraduationCap,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { collection, getDocs, query, where } = firestore as any;

type StudentResult = {
  id: string;
  enrollmentNo: string;
  rollNo?: string;
  studentName: string;
  resultStatus?: string; // e.g., "Pass", "Fail"
  marksheetUrl?: string;
};

export default function Results() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StudentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollmentNo.trim()) {
      setError("Please enter an enrollment number.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Searching in 'students' collection by 'enrollmentNumber' as seen in database
      const studentsRef = collection(db, "students");
      const q = query(studentsRef, where("enrollmentNumber", "==", enrollmentNo.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("No student found with this enrollment number. Please check and try again.");
      } else {
        const doc = querySnapshot.docs[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = doc.data() as any;
        
        // Handle gradesheeturl which might be an array
        const gradesheet = Array.isArray(data.gradesheeturl) 
          ? data.gradesheeturl[0] 
          : data.gradesheeturl;

        const marksheetUrl = gradesheet || data.marksheetUrl || data.resultUrl || data.cloudinaryUrl;

        // Only show result if a marksheet URL exists (meaning it's published)
        if (!marksheetUrl) {
          setError("Your result has not been published yet. Please check back later.");
          setResult(null);
          return;
        }

        setResult({
          id: doc.id,
          enrollmentNo: data.enrollmentNumber,
          rollNo: data.rollNo,
          studentName: data.name || data.studentName || "N/A",
          resultStatus: data.resultStatus || "Available",
          // The Cloudinary URL for the marksheet
          marksheetUrl: marksheetUrl,
        });
      }
    } catch (err) {
      console.error("Error fetching result:", err);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((err as any).code === "permission-denied") {
        setError("Access Denied: The students database is restricted. Please ensure public read permissions are enabled in Firestore rules.");
      } else {
        setError("An error occurred while fetching the result. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-4">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-[#1b1260] sm:text-4xl">
          Examination Results
        </h1>
        <p className="mt-3 text-slate-600">
          Enter your enrollment number below to view and download your marksheet.
        </p>
      </div>

      {/* Search Box */}
      <div className="overflow-hidden rounded-3xl border border-orange-200 bg-white p-6 shadow-xl sm:p-10">
        <form onSubmit={handleSearch} className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Enter Enrollment Number"
              value={enrollmentNo}
              onChange={(e) => setEnrollmentNo(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-lg font-medium text-[#1b1260] outline-none transition-all focus:border-[#ff6a1a] focus:ring-4 focus:ring-[#ff6a1a]/10"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#ff7b21] to-[#ff4b1f] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-orange-500/25 active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? (
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Search className="h-5 w-5" />
                Search Result
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-red-700">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}
      </div>

      {/* Result Display */}
      {result && (
        <div className="mt-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            {/* Result Top Banner */}
            <div className={`flex flex-col items-center justify-between gap-4 p-6 sm:flex-row ${
              result.resultStatus?.toLowerCase() === 'pass' ? 'bg-green-50' : 'bg-blue-50'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                  result.resultStatus?.toLowerCase() === 'pass' ? 'bg-green-600' : 'bg-[#1b1260]'
                } text-white shadow-lg`}>
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1b1260]">{result.studentName}</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">ENR: {result.enrollmentNo}</p>
                    {result.rollNo && (
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">ROLL: {result.rollNo}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-end">
                <div className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider ${
                  result.resultStatus?.toLowerCase() === 'pass' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-[#1b1260] text-white'
                }`}>
                  {result.resultStatus?.toLowerCase() === 'pass' && <CheckCircle2 className="h-4 w-4" />}
                  {result.resultStatus}
                </div>
              </div>
            </div>

            {/* Download Action */}
            <div className="p-8 text-center bg-slate-50 border-t border-slate-100">
              <p className="mb-6 text-sm text-slate-500">
                Your official marksheet is ready for download. Please verify all details carefully.
              </p>
              <a
                href={result.marksheetUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!result.marksheetUrl) {
                    e.preventDefault();
                    alert("Marksheet file is not available yet. Please contact the administrator.");
                  }
                }}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#1b1260] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#2c0d71] hover:shadow-[#1b1260]/20 active:scale-95"
              >
                <Download className="h-5 w-5" />
                Download Marksheet (PDF)
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Info Notice */}
      <div className="mt-12 rounded-2xl bg-blue-50/50 p-6 text-center border border-blue-100">
        <p className="text-sm text-blue-800 leading-relaxed">
          <strong>Note:</strong> This online result is for immediate information and cannot be treated as an original marksheet. 
          Original marksheets will be issued by the Board separately through Authorized Academic Centres.
        </p>
      </div>
    </section>
  );
}
