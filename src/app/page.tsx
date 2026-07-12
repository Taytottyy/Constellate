import { AboutUs } from "@/components/sections/AboutUs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { UniversityBanner } from "@/components/sections/UniversityBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UniversityBanner />
        <AboutUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
