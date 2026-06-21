import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollToTopButton from "../components/ScrollToTopButton";

import About from "./About";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="bg-[#081824] text-white min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Project />
        <Education />
        <Contact />
      </main>

      <ScrollToTopButton />
    </div>
  );
}