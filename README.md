# React Portfolio – John Doe

A responsive personal portfolio built with **React** and **Vite**. It introduces me, shows my skills and experience, lists my projects with a category filter, and has a contact form with validation. Visitors can switch between dark and light mode, and the site remembers their choice.

**Live site:** _add your Vercel link here after deploying_

## Features

- **Multi-page navigation** with React Router: Home, Projects and Contact, plus a 404 page for unknown addresses
- **Reusable components**: Header, Hero, Skills, About, Experience, Projects, ProjectCard, Contact, ContactForm and Footer
- **Projects managed with state**: project cards are built from a data file, and filter buttons are generated automatically from the project categories
- **Contact form with validation**: required fields, email format check, minimum message length, error messages under each field, and a success message
- **Dark/light mode toggle**: follows the device setting on the first visit, then remembers the visitor's choice in `localStorage`, with no white flash on reload
- **Fully responsive**: mobile hamburger menu, and layouts that adapt from phone to tablet to desktop
- **Animations with plain CSS**: page fade-ins, a staggered hero entrance, card hover effects and a smooth theme transition, all turned off for visitors who prefer reduced motion
- **Accessibility basics**: semantic HTML, form labels, alt text, `aria` attributes on the menu and form, and visible keyboard focus

## Built with

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS (custom properties, Flexbox, Grid, media queries); no UI library

## Getting started

You need [Node.js](https://nodejs.org/) installed (version 20 or later).

```bash
# 1. Clone the repository
git clone https://github.com/B-Mwangi/react-portfolio.git
cd react-portfolio

# 2. Install the dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

### Other commands

| Command           | What it does                                         |
| ----------------- | ---------------------------------------------------- |
| `npm run build`   | Builds the production version into the `dist` folder |
| `npm run preview` | Serves the production build locally to check it      |
| `npm run lint`    | Checks the code for problems with ESLint             |

## Project structure

```text
react-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            # Profile photo and project screenshots
│   ├── components/        # Reusable components, each with its own CSS file
│   ├── data/
│   │   ├── profile.js     # Personal details, skills, experience, education
│   │   └── projects.js    # Project list used by the Projects page
│   ├── pages/             # One component per route (Home, Projects, Contact, 404)
│   ├── utils/
│   │   └── validateForm.js
│   ├── App.jsx            # Routes and page layout
│   ├── index.css          # Theme colours, shared styles and animations
│   └── main.jsx           # Entry point
├── index.html
├── vercel.json            # Sends every address to index.html so routes work on refresh
└── package.json
```

## Updating the content

All the text on the site comes from two files, so no component code needs to change:

- **`src/data/profile.js`**: name, intro, contact details, skills, experience, education and activities
- **`src/data/projects.js`**: projects. Add an object to the list and a new card (and, for a new category, a new filter button) appears automatically.

## Deployment

The site is deployed on [Vercel](https://vercel.com/). Vercel detects Vite automatically, and every push to the `main` branch redeploys the site. `vercel.json` makes sure pages such as `/projects` load correctly when opened directly or refreshed.

## Contact form note

The site has no back end, so after validation the form opens the visitor's own email app with the message already filled in.

## Contact

- Email: johndoe@gmail.com
- GitHub: [B-Mwangi](https://github.com/B-Mwangi)
