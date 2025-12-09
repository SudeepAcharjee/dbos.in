import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadsTable from "./components/download";

export default function DownloadsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <DownloadsTable />
      </div>
      <Footer />
    </main>
  );
}
