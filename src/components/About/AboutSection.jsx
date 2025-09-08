import React from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './AboutSection.css';
import codeLogo from '../../assets/Code.png';
import TrophyLogo from '../../assets/Trophy.png';
import NetworkLogo from '../../assets/Network.png';
import RocketLogo from '../../assets/Rocket.png';

const AboutSection = () => {
  const features = [
    {
      icon: codeLogo,
      title: "24 Hours of Coding",
      description: "Non-stop development with mentors and resources"
    },
    {
      icon: TrophyLogo,
      title: "₹45,000 in Prizes",
      description: "Amazing prizes for winners across multiple categories"
    },
    {
      icon: NetworkLogo,
      title: "Network & Learn",
      description: "Connect with industry experts and fellow developers"
    },
    {
      icon: RocketLogo,
      title: "Launch Your Ideas",
      description: "Turn your innovative concepts into reality"
    }
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <ParallaxProvider>
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-layout">
            <motion.div
              className="about-left-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About <br />Hack the Vault</h2>
              <p className="section-subtitle">
                The ultimate hackathon experience that brings together the brightest minds
                to solve real-world problems and build the future of technology.
              </p>
            </motion.div>

            <motion.div
              className="about-right-column"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ul className="features-list">
                {features.map((feature, index) => (
                  <motion.li key={index} variants={listItemVariants} className="feature-item">
                    <div className="feature-icon">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="feature-icon-img"
                      />
                    </div>
                    <div className="feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default AboutSection;