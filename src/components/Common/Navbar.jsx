import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../../assets/CGCU.webp';
import logo2 from '../../assets/logo2.png';
import logo4 from '../../assets/logo4.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <motion.div
        className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.2 }}
      >
        <div className="logo-container">
          <img src={logo1} className="logo-img" alt="CGCU Logo" />
          <img src={logo2} className="logo-img hide-on-mobile" alt="CGCU Logo" />
          <img src={logo4} className="logo-img logo4-zoom" alt="CGCU Logo" />
        </div>

        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
        </div>

        <div className="nav-controls">
          <motion.div
            className="register-btn-wrapper"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdrDX3An6gNYW3KYRfeEtV_96VZ78BbsIA5OUrq8ZpgSQx9Ig/viewform" className="register-btn">
              Register
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;