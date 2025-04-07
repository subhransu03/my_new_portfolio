import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Certifications from "@/sections/Certifications";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="certificates">
        <Certifications />
      </div>
      <TapeSection />
      <TestimonialsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}