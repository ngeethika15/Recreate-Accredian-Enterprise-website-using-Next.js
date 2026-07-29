import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      <Hero />
      <Features />
      <LeadForm />
      <Footer />
    </main>
  );
}