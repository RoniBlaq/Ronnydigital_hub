
import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Services />
      <About />
      <Skills />
      <Project />
      <Certificate />
      <Contact />
    </main>
  );
}
