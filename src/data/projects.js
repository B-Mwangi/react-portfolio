import portfolioImage from "../assets/projects/react-portfolio.jpg";

//projects
// one ProjectCard from each item.
//category: used by the filter buttons

export const projects = [
  {
    id: 1,
    title: "React Portfolio",
    description:
      "This portfolio: a multi-page React app with routing, a dark/light theme that is remembered, a filterable project list and a validated contact form.",
    category: "React",
    tech: ["React", "React Router", "Vite", "CSS"],
    image: portfolioImage,
    liveUrl: "", 
    repoUrl: "https://github.com/B-Mwangi/react-portfolio",
  },
  {
    id: 2,
    title: "Multi-Step Sign-Up Form",
    description:
      "A three-step sign-up form with a progress bar that keeps each step's answers in state as the user moves forwards and backwards.",
    category: "React",
    tech: ["React", "React Bootstrap"],
    image: null,
    liveUrl: "",
    repoUrl: "",
  },
];
