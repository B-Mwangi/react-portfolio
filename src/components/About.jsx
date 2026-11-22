import { profile, languages, interests } from "../data/profile";
import "./About.css";

// Short "about me" paragraph, plus languages and interests
function About() {
  return (
    <section className="about">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">{profile.about}</p>

      <div className="about-lists">
        <div>
          <h3>Languages</h3>
          <ul className="tag-list">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Interests</h3>
          <ul className="tag-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
