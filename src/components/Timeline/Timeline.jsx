import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './Timeline.css';

const Timeline = () => {
  const events = [
    {
      time: "9:00 AM",
      day: "Day 1",
      title: "Registration & Check-in",
      description: "Get your swag bag and meet fellow participants",
      icon: "🎯"
    },
    {
      time: "10:30 AM",
      day: "Day 1", 
      title: "Opening Ceremony",
      description: "Keynote speeches and hackathon kickoff",
      icon: "🚀"
    },
    {
      time: "12:00 PM",
      day: "Day 1",
      title: "Team Formation",
      description: "Find your team and start brainstorming",
      icon: "🤝"
    },
    {
      time: "1:00 PM",
      day: "Day 1",
      title: "Hacking Begins!",
      description: "Start building your amazing projects",
      icon: "💻"
    },
    {
      time: "7:00 PM",
      day: "Day 1",
      title: "Dinner & Networking",
      description: "Fuel up and connect with mentors",
      icon: "🍕"
    },
    {
      time: "12:00 AM",
      day: "Day 2",
      title: "Midnight Snacks",
      description: "Late night coding fuel provided",
      icon: "🌙"
    },
    {
      time: "8:00 AM",
      day: "Day 2",
      title: "Breakfast",
      description: "Start your final day strong",
      icon: "☀️"
    },
    {
      time: "1:00 PM",
      day: "Day 2",
      title: "Submission Deadline",
      description: "Submit your projects and prepare demos",
      icon: "📤"
    },
    {
      time: "2:00 PM",
      day: "Day 2",
      title: "Project Presentations",
      description: "Show off your incredible creations",
      icon: "🎤"
    },
    {
      time: "5:00 PM",
      day: "Day 2",
      title: "Awards Ceremony",
      description: "Celebrate winners and amazing projects",
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
              48 hours of non-stop innovation, learning, and building
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
