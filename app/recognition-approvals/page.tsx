import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecognitionApprovals from "./components/recognition";

export default function RecognitionApprovalsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <RecognitionApprovals />
      </div>
      <Footer />
    </main>
  );
}
