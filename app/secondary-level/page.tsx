import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecondaryLevel from "./components/secondary-level";

export default function ProgramsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <SecondaryLevel />
      </div>
      <Footer />
    </main>
  );
}
