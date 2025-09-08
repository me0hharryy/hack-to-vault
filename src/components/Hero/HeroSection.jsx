import React from 'react';
import LiquidChrome from './LiquidChrome';
import './HeroSection.css';
import location from '../../assets/location.png'

const HeroSection = () => {
  return (
    <section className="hero-section" id='hero'>
      
      <div className="hero-parallax-content">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-date">OCTOBER 27-28, 2025</div>
            <h1 className="hero-title">Hack the Vault</h1>
            <p className="hero-subtitle" >
              Unleash your creativity, solve real-world challenges, and innovate non-stop <br></br><div style={{display:'flex', justifyContent:'center'}}><img src={location} className='location'></img> CGC University, Mohali</div>
            </p>
            <div className="hero-buttons">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrDX3An6gNYW3KYRfeEtV_96VZ78BbsIA5OUrq8ZpgSQx9Ig/viewform" className="btn-register">Register Now</a>
              <a href="#about" className="btn-learn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;