import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects as projectData } from "../data/projects";
import "./Projects.css";

// Shows the project cards with filter buttons above them.
// State holds the list of projects and the filter that is selected.
function Projects() {
  const [projects] = useState(projectData);
  const [activeFilter, setActiveFilter] = useState("All");

  // Build the filter buttons from the categories used in the data,
  // so a new category gets a button automatically
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects">
      <h1 className="section-title">Projects</h1>
      <p className="projects-intro">
        A selection of things I have built while learning front-end development.
      </p>

      <div className="filter-buttons" role="group" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeFilter ? "filter-button active" : "filter-button"}
            onClick={() => setActiveFilter(category)}
            aria-pressed={category === activeFilter}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="projects-count" aria-live="polite">
        Showing {visibleProjects.length} of {projects.length} projects
      </p>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
