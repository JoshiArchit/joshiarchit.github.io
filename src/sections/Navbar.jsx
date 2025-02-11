import React from "react";
import { navLinks } from "../constants/index.js";

const NavItems = ({ closeMenu }) => {
  const isSmallScreen = window.innerWidth <= 640;

  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a
            href={isSmallScreen && name === "Work" ? "#worksmall" : href}
            className="nav-li_a"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(href);

              if (target) {
                const navbarHeight =
                  document.querySelector("header").offsetHeight; // Get navbar height
                const targetPosition =
                  target.getBoundingClientRect().top + window.scrollY; // Get target's position
                window.scrollTo({
                  top: targetPosition - navbarHeight - 20, // Adjust for navbar height & extra spacing
                  behavior: "smooth",
                });
              }

              // Close menu after clicking a link
              closeMenu();
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false); // Function to close the menu

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold hover:text-white transition-colors"
          >
            Archit
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            ></img>
          </button>

          <nav className="sm:flex hidden">
            <NavItems closeMenu={() => {}} /> {/* No need to close in desktop mode */}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems closeMenu={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
