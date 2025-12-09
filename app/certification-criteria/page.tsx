import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificationCriteria from "./components/certification";

export default function CertificationCriteriaPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <CertificationCriteria />
      </div>
      <Footer />
    </main>
  );
}
