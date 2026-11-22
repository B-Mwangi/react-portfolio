import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import profilePhoto from "../assets/profile.jpg";
import "./Hero.css";

// The first thing visitors see: photo, name, title, short intro and two buttons
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{profile.name}</h1>
        <h2 className="hero-title">{profile.title}</h2>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <img
        src={profilePhoto}
        alt={`Portrait of ${profile.name}`}
        className="hero-photo"
      />
    </section>
  );
}

export default Hero;
