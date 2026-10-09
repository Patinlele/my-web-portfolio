import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
