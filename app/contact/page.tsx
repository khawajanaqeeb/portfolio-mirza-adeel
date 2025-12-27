import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function ContactPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/addo.png"
        overlayOpacity={0.7}
        className="pt-16"
      >
        <Contact />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
