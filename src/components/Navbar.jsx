import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0); // Use ref to persist scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      prevScrollY.current = window.scrollY; // Update ref value
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <nav className={`navbar ${hidden ? "hidden" : ""}`}>
        <div className="logo-container">
          <img src={logo} alt="Veta.lk Logo" className="logo" />
        </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="nav-mob-open"
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
          role="button"
          tabIndex="0"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="nav-mob-close"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
          role="button"
          tabIndex="0"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/features" onClick={closeMobileMenu}>Features</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu} role="button" tabIndex="0" aria-label="Close mobile menu overlay"></div>
      )}
    </>
  );
};

export default Navbar;
