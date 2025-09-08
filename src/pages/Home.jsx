import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import AboutSection from '../components/About/AboutSection';
import Timeline from '../components/Timeline/Timeline';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <Timeline />
    </div>
  );
};

export default Home;
