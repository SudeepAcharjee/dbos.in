// components/EnquirySection.tsx
"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const primaryPurple = "bg-[#1b1260]";

export default function EnquirySection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate with an API route or external service.
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <section
      id="apply"
      className="bg-slate-50 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-[#1b1260] sm:text-3xl">
              Enquiry Form
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Share your details and our team will reach out with information
              about admissions, programs, and recognition.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    Contact No*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                    placeholder="Enter your phone no"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                >
                  Email Id*
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                  placeholder="Enter a valid email"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="program"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    Select Program*
                  </label>
                  <select
                    id="program"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                  >
                    <option value="Secondary">Secondary</option>
                    <option value="Sr Secondary">Sr. Secondary</option>
                    <option value="Skill & Vocational">
                      Skill &amp; Vocational
                    </option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="state"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    State Name
                  </label>
                  <input
                    id="state"
                    type="text"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                    placeholder="Your state name"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="city"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    City Name*
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                    placeholder="Your city name"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="question"
                    className="text-xs font-semibold uppercase tracking-wide text-slate-600"
                  >
                    Your Question*
                  </label>
                  <input
                    id="question"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm outline-none focus:border-[#ff6a1a] focus:ring-2 focus:ring-[#ff6a1a]/30"
                    placeholder="Your question here"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff7b21] to-[#ff4b1f] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          <div
            id="contact"
            className={`${primaryPurple} rounded-2xl p-6 text-white shadow-lg`}
          >
            <h3 className="text-lg font-semibold text-orange-300">
              Contact Information
            </h3>
            <p className="mt-3 text-sm text-slate-100">
              Dihing Board of Open Schooling is here to help you with
              admissions, recognition, and academic support.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                +91 69002 15858, +91 84864 12762 (10 am to 5 pm)
              </p>
              <p>
                <span className="font-semibold">Email:</span> support@dbos.in
              </p>
              <p>
                <span className="font-semibold">Address:</span> Barpeta Road,
                Dist- Barpeta, State- Assam - 781315
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


