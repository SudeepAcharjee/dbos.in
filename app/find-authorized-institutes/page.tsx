import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllInstitutesTable from "./components/all-institutes";

export default function FindAuthorizedInstitutesPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <AllInstitutesTable />
      </div>
      <Footer />
    </main>
  );
}
