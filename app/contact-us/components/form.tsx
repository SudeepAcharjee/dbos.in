"use client";

import { useState, type FormEvent } from "react";

const programs = ["Secondary", "Sr. Secondary", "Skill & Vocational"];

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  program: string;
  state: string;
  city: string;
  question: string;
}

import * as firestore from "firebase/firestore";
import { db } from "@/lib/firebase";

// Workaround for TypeScript error: Module '"firebase/firestore"' has no exported member 'addDoc'.
// We verified at runtime that addDoc exists.
const { collection, addDoc } = firestore as any;

export default function ContactUsForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    program: "",
    state: "",
    city: "",
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Add document to 'contact-form' collection in Firestore
      await addDoc(collection(db, "contact-form"), {
        ...formData,
        createdAt: new Date(),
        status: "pending",
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your enquiry has been submitted successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        program: "",
        state: "",
        city: "",
        question: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto mb-8 max-w-6xl rounded-3xl border border-orange-500 bg-white px-4 py-8 shadow-md sm:px-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact info */}
        <div className="space-y-4 text-slate-800">
          <h2 className="text-xl font-extrabold text-[#1b1260] sm:text-2xl">
            Contact Info
          </h2>
          <InfoRow label="Call Us" value="+91 69002 15858 (10 am to 5 pm)" />
          <InfoRow label="Email Us" value="support@dbos.in" />
          <InfoRow label="Visit Website" value="www.dbos.in" />
          <InfoRow
            label="Address"
            value="Barpeta Road, Dist- Barpeta, State- Assam – 781315"
          />
        </div>

        {/* Form */}
        <div className="space-y-4 rounded-2xl border border-orange-400 px-4 py-5 sm:px-6">
          <h2 className="text-xl font-extrabold text-[#1b1260] sm:text-2xl">
            Enquiry Form
          </h2>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`rounded-lg p-3 text-sm ${submitStatus.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
                }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="space-y-3" onSubmit={handleSubmit}>
            <Field label="Your Name" required>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="input field"
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="Contact Us" required>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Your phone no"
                className="input field"
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="Enter Email Id" required>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter a Valid Email"
                className="input field"
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="Select Program" required>
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                className="input field"
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select Program
                </option>
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="State Name">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Your State Name"
                className="input field"
                disabled={isSubmitting}
              />
            </Field>

            <Field label="City Name" required>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Your City Name"
                className="input field"
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="Your Question" required>
              <input
                type="text"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                placeholder="Your Question Here"
                className="input field"
                required
                disabled={isSubmitting}
              />
            </Field>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-[#ff7b21] to-[#ff4b1f] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-semibold text-[#1b1260] sm:text-base">
        {label}-
      </p>
      <p className="text-sm sm:text-base">{value}</p>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1 text-sm font-semibold text-[#1b1260] sm:text-base">
      <span>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
