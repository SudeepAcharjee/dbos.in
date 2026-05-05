import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Results from "@/components/Results";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import BackToTopButton from "@/components/BackToTopButton";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <AnnouncementBanner />
      
      <div className="py-12">
        <Suspense fallback={<div className="text-center py-20">Loading Results Portal...</div>}>
          <Results />
        </Suspense>
      </div>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
