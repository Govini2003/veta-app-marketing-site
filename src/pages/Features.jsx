import React from 'react';
import { motion } from 'framer-motion';
import './Features.css'; // Import the CSS file for styling
import Footer from '../components/Footer';
const Features = () => {
  const featuresData = [
    {
      title: "Registration and Profiles",
      description: "Service providers can register and showcase their services.",
      items: [
        "Veterinarians: Profiles with specialties, availability, and pricing.",
        "Animal Clinics: Register with service details, hours, and pricing.",
        "Pet Shops: List products with prices.",
        "Pharmacies: Display and sell veterinary medicines.",
      ],
    },
    {
      title: "Pet Owner Features",
      description: "Manage pets, book appointments, and access the pet marketplace.",
      items: [
        "Pet Profile Management: Store health records and details.",
        "Appointment Booking: Schedule in-clinic or home visits.",
        "Pet Marketplace: Advertise pets for sale, crossbreeding, or adoption.",
      ],
    },
    {
      title: "User Interaction & Service Comparison",
      description: "Users can review and compare services easily.",
      items: [
        "Ratings & Reviews for vets, clinics, pet shops, and pharmacies.",
        "Price Range Display to compare affordability.",
        "Service Quality & Cost Comparison like Uber Eats or Booking.com.",
      ],
    },
    {
      title: "Marketplace for Pet Products & Medicines",
      description: "A marketplace for pet-related products and medicines.",
      items: [
        "Pet Product Listings: Food, toys, grooming supplies.",
        "Veterinary Medicines: Pharmacies can list and sell medicines.",
      ],
    },
  ];

  return (
    <div className="features-container">
      <h1 className="features-title">Veta.lk Features</h1>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
            <ul className="feature-items">
              {feature.items.map((item, i) => (
                <li key={i} className="feature-item">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Features;