import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Veta.lk</h3>
          <p>Sri Lanka&apos;s premier veterinary platform connecting pet owners with expert veterinarians. We&apos;re dedicated to making pet healthcare accessible and efficient.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p><FaPhone className="icon" /> +94 75 7487013</p>
            <p><FaEnvelope className="icon" /> veta.lk.app@gmail.com</p>
            <p><FaMapMarkerAlt className="icon" /> Colombo, Sri Lanka</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/veta.lk.app/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
            <a href="mailto:veta.lk.app@gmail.com"><FaEnvelope className="social-icon" /></a>
            <a href="https://www.linkedin.com/in/veta-lk-9109a3351" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">           
        <p>&copy; {new Date().getFullYear()} Veta.lk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
