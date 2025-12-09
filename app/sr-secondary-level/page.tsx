import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SrSecondaryLevel from "./components/sr-secondary-level";

export default function SrSecondaryLevelPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <SrSecondaryLevel />
      </div>
      <Footer />
    </main>
  );
}
