import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './Timeline.css';

const Timeline = () => {
  const events = [
    {
      time: "9:00 AM",
      day: "Day 1",
      title: "Registration & Breakfast",
      description: "Fuel up, grab your swag, and get ready to code.",
      icon: "🎯"
    },
    {
      time: "10:00 AM",
      day: "Day 1",
      title: "Opening Ceremony",
      description: "Inspiring keynotes and the official kickoff.",
      icon: "🚀"
    },
    {
      time: "11:00 AM",
      day: "Day 1",
      title: "Hacking Begins!",
      description: "Start building your amazing projects.",
      icon: "💻"
    },
    {
      time: "2:00 PM",
      day: "Day 1",
      title: "Lunch & Mentor Connect",
      description: "Refuel and get valuable insights from industry experts.",
      icon: "🍕"
    },
    {
      time: "8:00 PM",
      day: "Day 1",
      title: "Dinner",
      description: "Take a break and connect with fellow hackers.",
      icon: "🌙"
    },
    {
      time: "8:00 AM",
      day: "Day 2",
      title: "Breakfast & Final Sprint",
      description: "Grab some coffee and push for the finish line.",
      icon: "☀️"
    },
    {
      time: "11:00 AM",
      day: "Day 2",
      title: "Submission Deadline",
      description: "Submit your projects and prepare for your demo.",
      icon: "📤"
    },
    {
      time: "11:30 AM",
      day: "Day 2",
      title: "Project Presentations",
      description: "Show off your incredible creations to the judges.",
      icon: "🎤"
    },
    {
      time: "2:00 PM",
      day: "Day 2",
      title: "Awards & Closing Ceremony",
      description: "Celebrate the winners and an amazing 24 hours.",
      icon: "🏆"
    }
  ];

  return (
    <section id="schedule" className="timeline-section section-padding">
      <div className="container">
        <Parallax speed={-5}>
          <motion.div
            className="timeline-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Event Schedule</h2>
            <p className="section-subtitle">
              24 hours of non-stop innovation, learning, and building
            </p>
          </motion.div>
        </Parallax>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {events.map((event, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? -3 : 3}>
              <motion.div
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content glass">
                  <div className="timeline-icon">{event.icon}</div>
                  <div className="timeline-time">
                    <span className="day">{event.day}</span>
                    <span className="time">{event.time}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
