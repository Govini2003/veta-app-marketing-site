import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique keys
import './BenefitsPopup.css';
import cat3 from '../assets/cat3.png';
import PropTypes from 'prop-types';

const BenefitsPopup = ({ type, onClose, showPopup }) => {
  console.log('BenefitsPopup rendered with type:', type);
  const [currentStep, setCurrentStep] = useState(0);
  
  const benefitsData = {
    petOwners: [
      {
        title: 'Benefits for Pet Owners',
        benefits: [
          'Access to qualified veterinarians',
          '24/7 support',
          'Personalized pet care plans'
        ]
      },
      {
        title: 'More Benefits for Pet Owners',
        benefits: [
          'Easy appointment booking',
          'Digital pet health records',
          'Find nearby pet services'
        ]
      },
      {
        title: 'Additional Pet Owner Features',
        benefits: [
          'Pet medication reminders',
          'Connect with other pet owners',
          'Access to pet care resources'
        ]
      }
    ],
    veterinarians: [
      {
        title: 'Benefits for Veterinarians',
        benefits: [
          'Increased visibility for your practice',
          'Access to a wider client base',
          'Opportunity to connect with pet owners'
        ]
      },
      {
        title: 'More Benefits for Veterinarians',
        benefits: [
          'Digital appointment management',
          'Patient record access',
          'Telemedicine capabilities'
        ]
      },
      {
        title: 'Additional Veterinarian Features',
        benefits: [
          'Connect with specialists',
          'Share educational resources',
          'Build your professional network'
        ]
      }
    ]
  };

  const currentData = type ? benefitsData[type][currentStep] : null;
  const totalSteps = type ? benefitsData[type].length : 0;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="popup-overlay" onClick={onClose}>
          <motion.div 
            className="popup-content" 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {currentData && (
              <>
                <h2>{currentData.title}</h2>
                <ul>
                  {currentData.benefits.map((benefit) => (
                    <li key={uuidv4()}>{benefit}</li>  
                  ))}
                </ul>
                
                <div className="navigation-buttons">
                  {currentStep > 0 && (
                    <button className="nav-button" onClick={handlePrevious}>
                      Previous
                    </button>
                  )}
                  
                  {currentStep < totalSteps - 1 && (
                    <button className="nav-button" onClick={handleNext}>
                      Next
                    </button>
                  )}
                </div>
                
                <button className="close-button" onClick={onClose}>Close</button>
                <img src={cat3} alt="Cat" className="popup-image" />
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

BenefitsPopup.propTypes = {
  type: PropTypes.string.isRequired, 
  onClose: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
};

export default BenefitsPopup;
