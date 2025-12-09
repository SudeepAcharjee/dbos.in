import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 pt-[4.5rem] lg:pt-[5rem]">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-[#1b1260] sm:text-8xl">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-slate-800 sm:text-3xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-slate-600 sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-gradient-to-r from-[#ff7b21] to-[#ff4b1f] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              Go to Home
            </Link>
            <Link
              href="/about-us"
              className="rounded-full border border-[#1b1260] px-6 py-3 text-sm font-semibold text-[#1b1260] transition hover:bg-[#1b1260] hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

