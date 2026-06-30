import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Lifestyle from "@/components/Lifestyle";
import Plans from "@/components/Plans";
import Features from "@/components/Features";
import Coverage from "@/components/Coverage";
import SpeedTest from "@/components/SpeedTest";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Lifestyle />
        <Plans />
        <Features />
        <Coverage />
        <SpeedTest />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
