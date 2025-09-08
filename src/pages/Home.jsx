import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import AboutSection from '../components/About/AboutSection';
import Timeline from '../components/Timeline/Timeline';
import LiquidChrome from '../components/Hero/LiquidChrome';
import DomainsSection from '../components/Others/Domains';
const Home = () => {
  return (
    <>
    <div className="home-page">
      <div className="fixed-background">
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.4}
          amplitude={0.4}
          interactive={true} // The whole background is now interactive
        />
      </div>
      <HeroSection />
      <AboutSection />
    </div>
    <Timeline />
    <DomainsSection/>
    </>
  );
};

export default Home;
