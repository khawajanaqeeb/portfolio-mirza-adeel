import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function ClientsPage() {
  return (
    <main className="fullscreen-page">
      <Navbar />
      <BackgroundSection
        backgroundImage="/adl2.jpeg"
        overlayOpacity={0.7}
        className="pt-16"
      >
        <Clients />
      </BackgroundSection>
      <Footer />
    </main>
  );
}
