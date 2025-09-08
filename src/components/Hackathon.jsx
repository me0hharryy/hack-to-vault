import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Interactive Time-Vortex Canvas Component ---
const TimeVortexCanvas = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const grids = [
            { color: 'rgba(0, 255, 100, 0.1)', size: 50, speed: 0.05 },
            { color: 'rgba(0, 255, 100, 0.2)', size: 100, speed: 0.1 },
            { color: 'rgba(0, 255, 100, 0.3)', size: 200, speed: 0.2 },
        ];

        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            grids.forEach(grid => {
                ctx.strokeStyle = grid.color;
                ctx.lineWidth = 1;
                
                const offsetX = (time * grid.speed + (mouse.current.x / canvas.width - 0.5) * 100) % grid.size;
                const offsetY = (time * grid.speed + (mouse.current.y / canvas.height - 0.5) * 100) % grid.size;

                for (let x = -grid.size + offsetX; x < canvas.width; x += grid.size) {
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.stroke();
                }
                for (let y = -grid.size + offsetY; y < canvas.height; y += grid.size) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        
        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => setCanvasSize();
        
        setCanvasSize();
        draw(0);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};


// --- Main App Component ---
export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-black text-white font-light font-sans overflow-x-hidden relative">
      <TimeVortexCanvas />
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0"></div>
      <Header />
      <main className="relative z-10 flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <PrizesSection />
        <SponsorsSection />
        <RegistrationSection isSubmitted={isSubmitted} handleSubmit={handleSubmit} />
        <Footer />
      </main>
    </div>
  );
}

// --- UI Components ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 bg-black/30 backdrop-blur-sm">
    <nav className="container mx-auto flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-normal tracking-wider text-shadow-glow font-tech"
      >
        Hack the vault
      </motion.div>
      <motion.a
        href="#register"
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 100, 0.7)' }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#00ff64] text-black font-bold py-2 px-6 rounded-none border border-black transition-all duration-300 font-tech"
      >
        SYNC
      </motion.a>
    </nav>
  </header>
);

const AnimatedSection = ({ children, id }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

    return (
        <section id={id} ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 container mx-auto">
            <motion.div className="w-full" style={{ y }}>
                {children}
            </motion.div>
        </section>
    );
};

const TextGlitch = ({ children }) => {
    const text = children.toString();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const [displayText, setDisplayText] = useState(text);

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev => prev.split("").map((_, index) => {
                if(index < iteration) return text[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join(""));

            if(iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    return <span onMouseOver={scramble}>{displayText}</span>;
}

const HeroSection = () => (
  <section className="h-screen w-full flex flex-col items-center justify-center text-center p-4">
    <motion.h1 
      className="text-5xl md:text-8xl font-thin uppercase text-shadow-glow tracking-[0.3em] font-tech"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
    >
      <TextGlitch>Hack the Vault</TextGlitch>
    </motion.h1>
    <motion.p 
      className="mt-4 text-xl md:text-2xl text-[#00ff64] max-w-2xl text-shadow-sm font-tech"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      Rewrite the Future.
    </motion.p>
  </section>
);

const TerminalCard = ({ children, className }) => (
  <motion.div 
      className={`bg-black/50 backdrop-blur-sm border border-[#00ff64]/30 p-8 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, type: 'spring' }}
      whileHover={{ borderColor: 'rgba(0, 255, 100, 0.8)', boxShadow: '0 0 20px rgba(0, 255, 100, 0.3)'}}
  >
    {children}
  </motion.div>
);

const AboutSection = () => (
  <AnimatedSection id="about">
    <TerminalCard className="w-full max-w-4xl text-center">
      <h2 className="text-3xl md:text-5xl font-normal mb-6 text-shadow-glow font-tech"><TextGlitch>THE ANOMALY</TextGlitch></h2>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
        A temporal rift has opened, presenting a unique 48-hour window to access the past and reshape the future. Chrono-Shift is a call to all developers, designers, and innovators to harness this anomaly. Your mission: build technology that transcends time.
      </p>
    </TerminalCard>
  </AnimatedSection>
);

const themes = [
  { icon: '⏳', title: 'Quantum Computing', desc: 'Explore parallel futures by simulating quantum algorithms and their real-world impact.' },
  { icon: '💾', title: 'Retro-Futurism', desc: 'Reimagine today\'s technology with the constraints and aesthetics of a bygone era.' },
  { icon: '🧬', title: 'Predictive Systems', desc: 'Build AI models that forecast future trends, from climate change to cultural shifts.' },
  { icon: '⚙️', title: 'Steampunk Automation', desc: 'Create complex automated systems using the logic and mechanics of the industrial age.' },
];

const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardItemVariants = {
    hidden: { y: 20, opacity: 0, filter: 'blur(5px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
};

const ThemesSection = () => (
  <AnimatedSection id="themes">
    <h2 className="text-3xl md:text-5xl font-normal mb-12 text-shadow-glow text-center font-tech"><TextGlitch>TIMELINES</TextGlitch></h2>
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
      variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
    >
      {themes.map((theme) => (
        <motion.div
          key={theme.title} variants={cardItemVariants}
          className="bg-black/50 backdrop-blur-sm border border-[#00ff64]/30 p-6 text-center h-full flex flex-col"
        >
          <div className="text-5xl mb-4 flex-shrink-0">{theme.icon}</div>
          <h3 className="text-2xl font-semibold mb-2 text-[#00ff64] font-tech">{theme.title}</h3>
          <p className="text-gray-300 flex-grow font-mono">{theme.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

const prizes = [
  { tier: 'Paradox Engine', prize: '$10,000', item: 'Control the Timeline' },
  { tier: 'Continuum Device', prize: '$5,000', item: 'Bend Reality' },
  { tier: 'Chrono-Key', prize: '$2,500', item: 'Unlock the Past' },
];

const PrizesSection = () => (
  <AnimatedSection id="prizes">
    <h2 className="text-3xl md:text-5xl font-normal mb-12 text-shadow-glow text-center font-tech"><TextGlitch>THE REWARDS</TextGlitch></h2>
    <motion.div 
        className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center"
        variants={cardContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
    >
      {prizes.map((prize) => (
        <motion.div key={prize.tier} variants={cardItemVariants} className="flex-1 text-center border-2 border-[#00ff64] p-8 bg-black/50">
          <h3 className="text-2xl font-semibold text-[#00ff64] font-tech">{prize.tier}</h3>
          <p className="text-4xl font-bold my-4 font-mono">{prize.prize}</p>
          <p className="text-lg text-gray-300 font-mono">{prize.item}</p>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

const sponsors = ['Temporal Dynamics', 'Paradigm Shift Inc.', 'Eon Corp', 'Momentum Machines', 'Flux Capacitor Co.'];

const SponsorsSection = () => (
  <AnimatedSection id="sponsors">
    <h2 className="text-3xl md:text-5xl font-normal mb-12 text-shadow-glow text-center font-tech"><TextGlitch>ARCHITECTS</TextGlitch></h2>
    <TerminalCard className="w-full max-w-4xl">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {sponsors.map(sponsor => (<div key={sponsor} className="text-2xl font-light text-gray-300 opacity-80 font-tech">{sponsor}</div>))}
      </div>
    </TerminalCard>
  </AnimatedSection>
);

const RegistrationSection = ({ isSubmitted, handleSubmit }) => (
  <AnimatedSection id="register">
    <h2 className="text-3xl md:text-5xl font-normal mb-12 text-shadow-glow text-center font-tech"><TextGlitch>SYNC WITH TIMELINE</TextGlitch></h2>
    <TerminalCard className="w-full max-w-2xl">
      {isSubmitted ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="text-6xl mb-4 font-tech">[SYNC COMPLETE]</div>
          <h3 className="text-3xl font-semibold text-[#00ff64] font-tech">TIMELINE SECURED</h3>
          <p className="text-lg mt-2 font-mono">Welcome, Chrononaut. Your presence has been recorded. Stand by for temporal coordinates.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="text" placeholder="AGENT_ID" required className="w-full p-4 bg-black/20 rounded-none border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff64] font-tech" />
          <input type="email" placeholder="ENCRYPTED_EMAIL" required className="w-full p-4 bg-black/20 rounded-none border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff64] font-tech" />
          <input type="text" placeholder="TEMPORAL_SPECIALTY" required className="w-full p-4 bg-black/20 rounded-none border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff64] font-tech" />
          <motion.button type="submit" whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 100, 0.8)' }} whileTap={{ scale: 0.95 }}
            className="w-full p-4 font-bold text-xl bg-[#00ff64] text-black rounded-none transition-all duration-300 font-tech">
            INITIATE SHIFT
          </motion.button>
        </form>
      )}
    </TerminalCard>
  </AnimatedSection>
);

const Footer = () => (
  <footer className="w-full text-center p-8 text-gray-500 relative z-10 font-tech">
    <p>&copy; 2025 CHRONO-SHIFT // All timelines are the property of their respective architects.</p>
  </footer>
);

const style = document.createElement('style');
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=VT323&family=Roboto+Mono:wght@300;400&display=swap');
  body {
      font-family: 'Roboto Mono', monospace;
  }
  .font-tech {
      font-family: 'VT323', monospace;
  }
  .text-shadow-glow {
    text-shadow: 0 0 8px rgba(0, 255, 100, 0.6), 0 0 12px rgba(0, 255, 100, 0.4);
  }
`;
document.head.appendChild(style);

