import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";
import "./Header.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  // Whether the mobile menu is open (only used on small screens)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  // Closes the mobile menu after a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          {profile.name}
        </NavLink>

        <div className="header-actions">
          <nav id="main-nav" className={menuOpen ? "nav open" : "nav"}>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  {/* "end" stops Home being highlighted on every page */}
                  <NavLink to={item.path} end={item.path === "/"} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          {/* Hamburger button: only visible on small screens */}
          <button
            type="button"
            className="menu-button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <span className={menuOpen ? "menu-icon open" : "menu-icon"} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
