import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import BenefitsPopup from '../components/BenefitsPopup';
import Footer from '../components/Footer';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import owner from '../assets/owner.jpg';
import vet from '../assets/vet.jpg';
import playstoreIcon from '../assets/playstore.png'; // Import the Play Store icon
import './Home.css';

const Home = () => {
  const userSelectionRef = useRef(null); // Create a ref for the user selection section
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [popupType, setPopupType] = useState(null); // State to store the type of popup (petOwner or veterinarian)

  const handleGetStartedClick = () => {
    // Smoothly scroll to the user selection section
    userSelectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUserCardClick = (type) => {
    setPopupType(type); // Set the type of popup
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
    setPopupType(null); // Reset the popup type
  };

  const handlePlayStoreClick = () => {
    // Navigate to the Play Store
    window.open('https://play.google.com/store', '_blank');
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginLeft: '-40px' }}
          >
            Welcome to Veta.lk
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            No More Struggles For Pet Owners & Vets
          </motion.p>
          <div className="button-group">
            <motion.button 
              className="cta-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={handleGetStartedClick} // Add click handler
            >
              Get Started
            </motion.button>
          </div>
        </div>
        <div className="hero-images">
          <div className="image-column">
            <motion.img 
              src={dog1} 
              alt="Dog 1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img 
              src={cat1} 
              alt="Cat 1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <div className="image-column">
            <motion.img 
              src={dog2} 
              alt="Dog 2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.img 
              src={cat2} 
              alt="Cat 2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* New Section for Pet Owners & Veterinarians */}
      <section className="user-selection" ref={userSelectionRef}> {/* Attach the ref here */}
        <motion.div 
          className="user-card" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => handleUserCardClick('petOwners')} // Trigger popup for pet owners
        >
          <img src={owner} alt="Pet Owner" className="user-image" />
          <p>Are you a Pet Owner?</p>
        </motion.div>

        <motion.div 
          className="user-card" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => handleUserCardClick('veterinarians')} // Trigger popup for veterinarians
        >
          <img src={vet} alt="Veterinarian" className="user-image" />
          <p>Are you a Veterinarian?</p>
        </motion.div>
      </section>

      {/* Play Store Button */}
      <motion.div 
        className="playstore-button-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="playstore-button" onClick={handlePlayStoreClick}>
          <img src={playstoreIcon} alt="Play Store" className="playstore-icon" />
          Download on Play Store
        </button>
      </motion.div>

      {/* Benefits Popup */}
      <BenefitsPopup 
        type={popupType} 
        onClose={handleClosePopup} 
        showPopup={showPopup} 
      />

      <Footer />
    </div>
  );
};

export default Home;