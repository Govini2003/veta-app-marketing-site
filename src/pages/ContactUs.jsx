import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "68956b9a-2a90-4805-a8b0-aa5c86ee5562");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        event.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any question you might have</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-links">
            <a href="tel:+94777856049" className="contact-link">
              <FaPhone className="icon" />
              <div className="link-content">
                <span className="link-title">Call Us</span>
                <span className="link-detail">+94 77 785 6049</span>
              </div>
            </a>
            
            <a href="https://wa.me/94777856049" className="contact-link">
              <FaWhatsapp className="icon" />
              <div className="link-content">
                <span className="link-title">WhatsApp</span>
                <span className="link-detail">+94 77 785 6049</span>
              </div>
            </a>
            
            <a href="mailto:veta.lk.app@gmail.com" className="contact-link">
              <FaEnvelope className="icon" />
              <div className="link-content">
                <span className="link-title">Email Us</span>
                <span className="link-detail">veta.lk.app@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/veta-lk-9109a3351" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <FaLinkedin className="icon" />
              <div className="link-content">
                <span className="link-title">LinkedIn</span>
                <span className="link-detail">Veta.lk</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/veta.lk.app?igsh=MXdqandqYWtuMnEyZQ==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              <FaInstagram className="icon" />
              <div className="link-content">
                <span className="link-title">Instagram</span>
                <span className="link-detail">@veta.lk.app</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
              ></textarea>
            </div>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
