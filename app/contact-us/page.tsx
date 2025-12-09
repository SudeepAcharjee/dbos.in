import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUsForm from "./components/form";

export default function ContactUsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <ContactUsForm />
      </div>
      <Footer />
    </main>
  );
}
