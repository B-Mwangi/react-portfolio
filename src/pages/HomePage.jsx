import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";

// Home page, introduction, skills, about me and experience
function HomePage() {
  return (
    <div className="page">
      <Hero />
      <Skills />
      <About />
      <Experience />
    </div>
  );
}

export default HomePage;
