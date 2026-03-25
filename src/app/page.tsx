import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import Screenshots from "@/components/Screenshots";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <Screenshots />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
