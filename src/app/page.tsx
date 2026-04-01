import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import AppPromo from "@/components/AppPromo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Schedule />
      <Location />
      <AppPromo />
      <Contact />
      <Footer />
    </>
  );
}
