import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" aria-label="Movie Explorer home" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Movie Explorer" className="footer-logo" />
            </Link>
            <p>
              Discover memorable movies, explore new genres, and keep track of
              the films you love.
            </p>
          </div>

          <nav className="footer-column" aria-label="Quick links">
            <h2>Quick Links</h2>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore Movies</Link>
            <Link to="/favourites">Favourites</Link>
          </nav>

          <div className="footer-column">
            <h2>Popular Genres</h2>
            <span>Sci-Fi</span>
            <span>Action</span>
            <span>Drama</span>
            <span>Animation</span>
            <span>Tamil</span>
          </div>

          <div className="footer-cta">
            <h2>What will you watch next?</h2>
            <p>Browse the collection and find your next favorite movie.</p>
            <Link to="/explore" className="footer-explore-link">
              Explore Movies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Movie Explorer. All rights reserved.</p>
          <a href="#root">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
