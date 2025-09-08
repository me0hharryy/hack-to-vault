import React from 'react';
import { motion } from 'framer-motion';
import './Domains.css';
import { grayscale } from 'three/tsl';

const DomainsSection = () => {
  const domains = [
    { icon: "🌱", title: "Smart Agriculture & Greentech" },
    { icon: "🤖", title: "AI for Digital Trust" },
    { icon: "🚗", title: "Smart Urban Mobility" },
    { icon: "📚", title: "Reimagining Education" },
    { icon: "💳", title: "Fintech for an Inclusive Future" },
    { icon: "💡", title: "Open Innovation Challenge" }
  ];

  // Split domains for two rows and duplicate them for a seamless loop
  const firstRow = [...domains.slice(0, 3), ...domains.slice(0, 3)];
  const secondRow = [...domains.slice(3, 6), ...domains.slice(3, 6)];

  return (
    <section id="domains" className="domains-section">
      <div className="container">
        {/* Section Header with faster animation */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Faster duration
          viewport={{ once: true }}
        >
          <h2 className="section-title">Domains Of Innovation</h2>
          <p className="section-subtitle">
            Choose your challenge.<br></br> Push the boundaries in one of our key domains.
          </p>
        </motion.div>

        {/* Scrolling Marquee Container */}
        <div className="domains-marquee-container">
          {/* First Row (scrolls forward) */}
          <div className="domains-marquee">
            <div className="marquee-content forward">
              {firstRow.map((domain, index) => (
                <div key={index} className="domain-item">
                  <span className="domain-item-icon" >{domain.icon}</span>
                  {domain.title}
                </div>
              ))}
            </div>
          </div>
          {/* Second Row (scrolls in reverse) */}
          <div className="domains-marquee">
            <div className="marquee-content reverse">
              {secondRow.map((domain, index) => (
                <div key={index} className="domain-item">
                  <span className="domain-item-icon">{domain.icon}</span>
                  {domain.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;