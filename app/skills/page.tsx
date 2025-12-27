import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function SkillsPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/adl2.jpeg"
        overlayOpacity={0.7}
        className="pt-16"
      >
        <Skills />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
