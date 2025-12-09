import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AffiliationEnquiryForm from "./components/form";

export default function AffiliationEnquiryFormPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <AffiliationEnquiryForm />
      </div>
      <Footer />
    </main>
  );
}
