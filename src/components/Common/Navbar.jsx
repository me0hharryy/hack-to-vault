import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../../assets/CGCU.webp'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.jpg'
import logo4 from '../../assets/logo4.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make the pill appear after a small scroll
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
        transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
      >
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={logo1} className='cgcLogo' style={{ height: '35px', width: 'auto', objectFit: 'contain', filter: 'grayscale(0.3)' }} alt="CGCU Logo" />
          <img src={logo2} className='cgcLogo' style={{ height: '35px', width: 'auto', objectFit: 'contain', filter: 'grayscale(0.3)' }} alt="CGCU Logo" />
          {/* <img src={logo3} className='cgcLogo' style={{ height: '35px', width: 'auto', objectFit: 'contain', filter: 'grayscale(0.5)' }} alt="CGCU Logo" /> */}
          <img src={logo4} className='cgcLogo' style={{ height: '40px', width: 'auto', objectFit: 'contain', filter: 'grayscale(0.3)' }} alt="CGCU Logo" />
        </div>
        
        <div className="nav-links" >
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
        </div>
        
        <motion.div
          className="register-btn-wrapper"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdrDX3An6gNYW3KYRfeEtV_96VZ78BbsIA5OUrq8ZpgSQx9Ig/viewform" className="register-btn">Register</Link>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;