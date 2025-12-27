import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function EducationPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/edu1.png"
        overlayOpacity={0.7}
        className="pt-16"
      >
        <Education />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
