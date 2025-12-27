import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function PortfolioPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/addo.png"
        overlayOpacity={0.65}
        className="pt-16"
      >
        <Portfolio />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
