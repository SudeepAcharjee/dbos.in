"use client";

import React, { useState } from "react";
import * as firestore from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Search,
  ShieldCheck,
  User,
  Calendar,
  GraduationCap,
  AlertCircle,
  CheckCircle2,
  FileText,
  Building2,
  Download,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { collection, getDocs, query, where } = firestore as any;

type StudentData = {
  id: string;
  enrollmentNumber: string;
  name: string;
  fatherName?: string;
  motherName?: string;
  dob?: string;
  session?: string;
  course?: string;
  resultStatus?: string;
  marksheetUrl?: string;
};

export default function Verify() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<StudentData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollmentNo.trim()) {
      setError("Please enter an enrollment number.");
      return;
    }

    setLoading(true);
    setError(null);
    setStudent(null);

    try {
      // 1. Search in 'students' collection for personal details
      const studentsRef = collection(db, "students");
      const q = query(studentsRef, where("enrollmentNumber", "==", enrollmentNo.trim()));
      const querySnapshot = await getDocs(q);

      let baseData: any = null;
      if (!querySnapshot.empty) {
        baseData = querySnapshot.docs[0].data();
      }

      // 2. Search in 'verify' collection for official marksheet and verified status
      // Note: The verify collection stores student records as numbered fields within session documents
      const verifyRef = collection(db, "verify");
      const verifySnapshot = await getDocs(verifyRef);
      let verifiedResult: any = null;

      for (const verifyDoc of verifySnapshot.docs) {
        const data = verifyDoc.data();
        for (const key in data) {
          const record = data[key];
          if (record && typeof record === 'object' && String(record.id).trim().toLowerCase() === enrollmentNo.trim().toLowerCase()) {
            verifiedResult = record;
            break;
          }
        }
        if (verifiedResult) break;
      }

      if (!baseData && !verifiedResult) {
        setError("No record found with this enrollment number. Verification failed.");
      } else {
        const getUrl = (obj: any) => {
          if (!obj) return null;
          const possibleFields = ["gradeSheetUrl", "gradesheeturl", "marksheetUrl", "cloudinaryUrl", "resultUrl", "result_url"];
          for (const field of possibleFields) {
            if (obj[field]) {
              return Array.isArray(obj[field]) ? obj[field][0] : obj[field];
            }
          }
          return null;
        };

        setStudent({
          id: verifiedResult?.id || baseData?.id || enrollmentNo.trim(),
          enrollmentNumber: enrollmentNo.trim(),
          name: verifiedResult?.studentName || baseData?.name || baseData?.studentName || "N/A",
          fatherName: baseData?.fatherName || baseData?.father_name || "N/A",
          motherName: baseData?.motherName || baseData?.mother_name || "N/A",
          dob: baseData?.dob || baseData?.date_of_birth || "N/A",
          session: baseData?.session || "N/A",
          course: baseData?.course || baseData?.class || "N/A",
          resultStatus: verifiedResult?.status || baseData?.resultStatus || "N/A",
          marksheetUrl: getUrl(verifiedResult) || getUrl(baseData),
        });
      }
    } catch (err) {
      console.error("Error verifying record:", err);
      setError("An error occurred during verification. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <section className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-[#ff6a1a] mb-4">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#1b1260] sm:text-4xl">
            Online Verification System
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Verify the authenticity of marksheets and certificates issued by Delhi Board of Open Schooling (DBOS).
          </p>
        </div>

        {/* Search Box */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 mb-10 transition-all hover:shadow-2xl">
          <h2 className="text-xl font-bold text-[#1b1260] mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#ff6a1a]" />
            Verification Form
          </h2>
          <form onSubmit={handleVerify} className="flex flex-col gap-4 sm:flex-row">
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
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#1b1260] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#2c0d71] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? (
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <ShieldCheck className="h-5 w-5" />
                  Verify Now
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-red-700 animate-in fade-in zoom-in duration-300">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* Verification Result */}
        {student && (
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="overflow-hidden rounded-3xl border border-green-200 bg-white shadow-2xl">
              {/* Success Banner */}
              <div className="bg-green-600 p-6 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="h-6 w-6" />
                  <span className="text-lg font-bold uppercase tracking-widest">Record Verified</span>
                </div>
                <p className="text-green-50 text-sm">Official database record found for the provided Enrollment Number.</p>
              </div>

              {/* Details Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Student Name */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Student Name</p>
                      <p className="text-xl font-bold text-[#1b1260]">{student.name}</p>
                    </div>
                  </div>

                  {/* Enrollment Number */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enrollment No.</p>
                      <p className="text-lg font-bold text-[#1b1260]">{student.enrollmentNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="mt-10 border-t border-slate-100 pt-8 flex flex-col items-center gap-4">
                  {student.marksheetUrl ? (
                    <div className="w-full max-w-sm">
                      <a
                        href={student.marksheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#1b1260] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#2c0d71] hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Download className="h-5 w-5" />
                        Download Official Marksheet
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 rounded-full bg-slate-100 px-6 py-2 text-sm font-semibold text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Authentic Record Found in Database
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 rounded-2xl bg-orange-50 p-6 border border-orange-100">
              <h3 className="text-sm font-bold text-[#1b1260] mb-2">Important Disclaimer:</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                This verification result is based on the data available in the DBOS digital records as of {new Date().toLocaleDateString()}. 
                In case of any discrepancy between this online verification and the physical document, 
                please contact the Controller of Examinations, Delhi Board of Open Schooling immediately.
              </p>
            </div>
          </div>
        )}

        {/* Generic Info */}
        {!student && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#1b1260] mb-2">Secure</h3>
              <p className="text-sm text-slate-500">Direct verification against the official DBOS examination database.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center text-[#ff6a1a] mb-4">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#1b1260] mb-2">Instant</h3>
              <p className="text-sm text-slate-500">Get verification results instantly by entering the enrollment number.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#1b1260] mb-2">Authentic</h3>
              <p className="text-sm text-slate-500">Authorized way to verify student credentials for employers and institutions.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
