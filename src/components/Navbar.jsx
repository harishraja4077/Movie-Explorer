import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  const goHome = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={goHome} aria-label="Movie Explorer home">
          <img src={logo} alt="Movie Explorer logo" className="brand-logo" />
        </NavLink>
        <button
          className="menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" className={linkClass} end onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/explore" className={linkClass} onClick={() => setOpen(false)}>
            Explore Movies
          </NavLink>
          <NavLink to="/favourites" className={linkClass} onClick={() => setOpen(false)}>
            Favourites
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
