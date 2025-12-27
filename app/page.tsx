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

export default function Home() {
  return (
    <main className="fullscreen-page bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Clients />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}