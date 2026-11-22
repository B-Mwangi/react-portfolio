import "./ProjectCard.css";

// One project card. The project's details come in as a "prop",
// so the same component is reused for every project.
function ProjectCard({ project }) {
  const { title, description, category, tech, image, liveUrl, repoUrl } = project;

  return (
    <article className="project-card">
      {image ? (
        <img src={image} alt={`Screenshot of ${title}`} className="project-image" />
      ) : (
        // No screenshot: show a coloured panel with the first letter instead
        <div className="project-image project-placeholder" aria-hidden="true">
          {title.charAt(0)}
        </div>
      )}

      <div className="project-body">
        <p className="project-category">{category}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <ul className="tag-list">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Buttons only appear for links that are filled in */}
        {(liveUrl || repoUrl) && (
          <div className="project-links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                Live Site
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
