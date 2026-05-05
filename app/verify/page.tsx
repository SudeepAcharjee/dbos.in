import Verify from "@/components/Verify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import BackToTopButton from "@/components/BackToTopButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Marksheet | Delhi Board of Open Schooling",
  description: "Verify student marksheets and certificates online through the official DBOS verification system.",
};

export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <AnnouncementBanner />
      
      <div className="py-12">
        <Verify />
      </div>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
