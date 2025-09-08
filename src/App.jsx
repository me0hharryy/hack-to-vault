import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
