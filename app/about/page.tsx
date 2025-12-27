import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function AboutPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/adl1.png"
        overlayOpacity={0.6}
        priority={true}
        className="pt-16"
      >
        <About />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
