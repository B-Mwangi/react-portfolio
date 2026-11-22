import { profile } from "../data/profile";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {year} {profile.name}. Built with React.
        </p>

        <ul className="footer-links">
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
          {/* Only shown when the link is filled in, in profile.js */}
          {profile.linkedin && (
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          )}
          {profile.github && (
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
