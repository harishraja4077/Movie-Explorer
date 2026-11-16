import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 800) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

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
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
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
