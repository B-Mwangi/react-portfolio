import ContactForm from "./ContactForm";
import { profile } from "../data/profile";
import "./Contact.css";

// Contact details on one side, the contact form on the other
function Contact() {
  return (
    <section className="contact">
      <h1 className="section-title">Get in Touch</h1>

      <div className="contact-grid">
        <div className="contact-details">
          <p className="contact-intro">
            I'm open to junior front-end roles, internships and collaborations. Send
            me a message and I'll get back to you.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <span className="contact-label">Location</span>
              <span>{profile.location}</span>
            </li>
            {profile.linkedin && (
              <li>
                <span className="contact-label">LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  View profile
                </a>
              </li>
            )}
            {profile.github && (
              <li>
                <span className="contact-label">GitHub</span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  View repositories
                </a>
              </li>
            )}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
