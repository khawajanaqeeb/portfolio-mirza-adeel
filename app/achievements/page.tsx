import Navbar from "@/components/Navbar";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function AchievementsPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/adl1.png"
        overlayOpacity={0.65}
        className="pt-16"
      >
        <Achievements />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
