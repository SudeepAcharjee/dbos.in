import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import NoticeBoardSection from "@/components/NoticeBoardSection";
import LoginPanelsSection from "@/components/LoginPanelsSection";
import RecognitionSection from "@/components/RecognitionSection";
import EnquirySection from "@/components/EnquirySection";
import DownloadAppButton from "@/components/DownloadAppButton";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div>
        <HeroSection />
        <ProgramsSection />
        <NoticeBoardSection />
        <LoginPanelsSection />
        <RecognitionSection />
        <EnquirySection />
        <DownloadAppButton />
      </div>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
