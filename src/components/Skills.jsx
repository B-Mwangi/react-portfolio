import { skillGroups } from "../data/profile";
import "./Skills.css";

// Shows one card per skill group, with each skill as a small tag
function Skills() {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
