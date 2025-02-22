import React, { useEffect, useState } from 'react';
import './About.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import govini from '../assets/govini.jpg';
import inupama from '../assets/inupama.jpg';
import ashen from '../assets/ashen.jpg';
import lalindu from '../assets/lalindu.jpg';
import senuji from '../assets/senuji.jpg';
import yashith from '../assets/yashith.jpg';
import Footer from '../components/Footer';
import { FaLinkedin } from 'react-icons/fa';
import meet1 from '../assets/meet1.jpg';
import meet2 from '../assets/meet2.jpg';
import team1 from '../assets/team1.jpg';
import team3 from '../assets/team3.jpg';
import pet from '../assets/pet.jpg';
import splash from '../assets/splash.png';
import meet3 from '../assets/meet3.jpg';
import vetpro from '../assets/vetpro.jpg';
import meet4 from '../assets/meet4.png';
import hult from '../assets/hult.jpg';

const About = () => {
  const teamMembers = [
    { name: 'Govini Rajapakse', role: 'Project manager / Web developer', image: govini, linkedin: 'https://www.linkedin.com/in/govini-rajapakse' },
    { name: 'Lalindu Malaka', role: 'Mobile Developer / UI/UX Designer', image: lalindu, linkedin: 'https://www.linkedin.com/in/lalindu-palliyaguruge-45a0b4202' },
    { name: 'Inupama Pandigama', role: 'Mobile Developer / Social Media Manager', image: inupama, linkedin: 'https://www.linkedin.com/in/inupama-pandigama-a4aa58294' },
    { name: 'Yashith Chandeepa', role: 'Full Stack Developer', image: yashith, linkedin: 'https://www.linkedin.com/in/yashith-chandeepa-903397220' },
    { name: 'Ashen De Zoysa', role: 'Web developer / Graphic Designer', image: ashen, linkedin: 'https://www.linkedin.com/in/ashen-de-zoysa' },
    { name: 'Senuji Ranusathi', role: 'Full Stack Developer', image: senuji, linkedin: 'https://www.linkedin.com/in/senuji-ranusathi-2745832b2' },
  ];

  const journeyImages = [
    { src: meet2, alt: 'Meeting 2', description: 'Initial consultation with veterinary professionals to understand industry needs' },
    { src: meet1, alt: 'Meeting 1', description: 'Strategic planning session with veterinary experts to refine our platform vision' },
    { src: team1, alt: 'Team 1', description: 'Collaborative preparation for our project demonstration and review' },
    { src: team3, alt: 'Team 3', description: 'Successful completion of our project defense presentation' },
    { src: splash, alt: 'Splash', description: 'Development phase of our mobile application interface' },
    { src: pet, alt: 'Pet', description: 'Development phase of our mobile application interface' },
    { src: pet, alt: 'Pet', description: 'Development phase of our mobile application interface' },
    { src: meet3, alt: 'Meeting 3', description: 'Meeting with our supervisor to clarify our problems ' },
    { src: vetpro, alt: 'Vet profile', description: 'Development phase of our mobile application interface' },
    { src: meet4, alt: 'Hult prize meeting', description: 'Meeting of the hult prize' },
    { src: hult, alt: 'Presentation', description: 'Participation of hult prize competition at IIT' },
  ];

  const [progressHeight, setProgressHeight] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.journey-timeline');
      if (timeline) {
        const { top, height } = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight && top + height > 0) {
          const percentage = Math.min(((windowHeight - top) / height) * 100, 100);
          setProgressHeight(percentage);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="about-container">
      {/* Lottie Animation in the top right corner */}
      <div className="lottie-container">
        <DotLottieReact src="/assets/animation.lottie" loop autoplay />
      </div>

      <h1>About Us</h1>
      <p className="about-description">
        Welcome to <span className="gradient-text">Veta.lk!</span> We are a passionate team dedicated to making life easier for pet owners and veterinarians.
        Our platform provides seamless solutions for pet care, veterinary services, and more. Together, we strive to
        bridge the gap between pet owners and veterinarians, ensuring the best care for your furry friends.
      </p>

      <p className="about-description">
        This is our second-year group project for the Software Development module at the University of Westminster,
        IIT Campus, Sri Lanka. We are excited to showcase our skills and deliver a platform that makes a real difference
        in the lives of pet owners and veterinarians. Our group, <strong>SE - 29</strong>, is proud to present this project as part of our academic journey.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            {/* Floating Circles */}
            <div className="floating-circles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <FaLinkedin className="linkedin-logo" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Acknowledgment Section */}
      <div className="acknowledgment-section">
        <h2>Our Gratitude</h2>
        <p className="acknowledgment-message">
          Under the guidance of our Supervisor, <strong>Mr. Dinusha Ruwan Kumara</strong>, and our Module Leader, <strong>Mr. Banu Athuraliya</strong>, 
          along with the dedicated module team, we have been able to bring this project to life. We are deeply thankful for their unwavering support, 
          valuable insights, and encouragement throughout this journey.
        </p>
      </div>

      <h2>Our Journey</h2>
      <div className="journey-timeline">
        <div className="progress-bar" style={{ height: `${progressHeight}%` }}></div>
        {journeyImages.map((image, index) => (
          <div key={index} className={`journey-item ${index % 2 === 0 ? 'left' : 'right'}`} onClick={() => openModal(image)}>
            <div className="journey-content">
              <img src={image.src} alt={image.alt} className="journey-image" />
              <p className="journey-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Journey Images */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <p className="modal-description">{selectedImage.description}</p>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default About;