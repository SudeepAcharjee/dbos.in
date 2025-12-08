import AboutContent from "./components/about";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-[4.5rem] lg:pt-[5rem]">
        <AboutContent />
      </div>
      <Footer />
    </main>
  );
}

