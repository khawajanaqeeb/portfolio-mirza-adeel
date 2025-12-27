import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundSection from "@/components/BackgroundSection";

export default function Home() {
  return (
    <main className="fullscreen-page bg-gray-900">
      <Navbar />
      <BackgroundSection
        backgroundImage="/addo.png"
        overlayOpacity={0.7}
        priority={true}
        className="pt-16"
        objectPosition="50% 15%"
        animate={true}
      >
        <Hero />
      </BackgroundSection>
      <div className="bg-gray-900">
        <About />
        <Skills />
        <Portfolio />
        <Clients />
        <Achievements />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}