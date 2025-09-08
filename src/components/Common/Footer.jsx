import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="footer-pill copyright-pill">
            <a href='https://hharryy.com/'>&copy; 2025 Hack the Vault</a>
          </div>
          

          <div className="footer-pill links-pill">
            <a href="#about">VentureVault 2.0</a>
            <a href="mailto:venturenest@cgc.ac.in?subject=Hack%20the%20Vault%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20HackTheVault.">
  Contact
</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;