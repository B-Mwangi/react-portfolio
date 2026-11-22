import { experience, achievements, education, activities } from "../data/profile";
import "./Experience.css";

// Work history as a timeline, then key achievements, education and activities
function Experience() {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>

      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline-item" key={`${job.company}-${job.period}`}>
            <p className="timeline-period">{job.period}</p>
            <h3>{job.role}</h3>
            <p className="timeline-company">{job.company}</p>
          </li>
        ))}
      </ol>

      <div className="experience-grid">
        <div className="info-card">
          <h3>Key Achievements</h3>
          <ul className="check-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="info-card">
          <h3>Education</h3>
          <p className="education-school">{education.school}</p>
          <p>{education.degree}</p>
          <p className="timeline-period">{education.period}</p>
        </div>

        <div className="info-card">
          <h3>Leadership & Activities</h3>
          <ul className="check-list">
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
