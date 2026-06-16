import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <a onClick={openNav} href="/#fleet">Our Cars</a>
            </li>
            <li>
              <a onClick={openNav} href="/#how-it-works">How It Works</a>
            </li>
            {/* <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li> */}
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
          <div className="navbar__brand">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <span>DRIVE</span>LOCAL
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <a className="models-link" href="/#fleet">Our Cars</a>
            </li>
            <li>
              <a className="testi-link" href="/#how-it-works">How It Works</a>
            </li>
            {/* <li>
              <Link className="about-link" to="/about">About</Link>
            </li> */}
            <li>
              <Link className="contact-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__phone" href="tel:+919876543210">
              +91 98765 43210
            </a>
            <a className="navbar__buttons__register" href="/#booking-section">
              Book Now
            </a>
          </div>

          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
