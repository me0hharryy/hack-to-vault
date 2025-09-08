import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: "💻",
      title: "48 Hours of Coding",
      description: "Non-stop development with mentors and resources"
    },
    {
      icon: "🏆",
      title: "$50,000 in Prizes",
      description: "Amazing prizes for winners across multiple categories"
    },
    {
      icon: "🤝",
      title: "Network & Learn",
      description: "Connect with industry experts and fellow developers"
    },
    {
      icon: "🚀",
      title: "Launch Your Ideas",
      description: "Turn your innovative concepts into reality"
    }
  ];

  return (
    <section id="about" className="about-section section-padding ">
      <div className="container">
        <Parallax speed={-10}>
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why HackFest 2025?</h2>
            <p className="section-subtitle">
              The ultimate hackathon experience that brings together the brightest minds
              to solve real-world problems and build the future of technology.
            </p>
          </motion.div>
        </Parallax>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? -5 : 5}>
              <motion.div
                className="feature-card glass"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 255, 136, 0.2)"
                }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
