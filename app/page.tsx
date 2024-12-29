import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <Links />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </div>
  );
}