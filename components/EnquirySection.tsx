"use client";

import Image from "next/image";
import Link from "next/link";



export default function EnquirySection() {
  return (
    <section id="apply" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 w-full lg:h-full">
            <Image
              src="/enquiry_students.png"
              alt="Students discussing in a library"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1b1260]/80 to-transparent lg:bg-linear-to-r"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                Admissions Open
              </p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Start Your Journey Today
              </h3>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl font-extrabold text-[#1b1260] sm:text-4xl">
              Have Questions?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our team is here to help you with admissions, program details, and
              recognition queries. Reach out to us to shape your future.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-orange-50 p-4">
                <h4 className="font-bold text-[#1b1260]">Call Us</h4>
                <p className="mt-1 text-sm text-slate-600">+91 69002 15858</p>
                <p className="text-sm text-slate-600">+91 84864 12762</p>
              </div>
              <div className="rounded-xl bg-purple-50 p-4">
                <h4 className="font-bold text-[#1b1260]">Email Us</h4>
                <p className="mt-1 text-sm text-slate-600">support@dbos.in</p>

              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-[#ff6a1a] px-8 py-4 text-base font-bold text-white shadow-lg transition transform hover:bg-[#e05812] hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
              >
                Contact Us for Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


