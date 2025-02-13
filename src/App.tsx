import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveOrb } from './components/InteractiveOrb';
import { ParallaxText } from './components/ParallaxText';
import { FloatingIcons } from './components/FloatingIcons';
import { InteractiveStory } from './components/InteractiveStory';
import { FlowerGame } from './components/FlowerGame';
import { ScrollingDiagram } from './components/ScrollingDiagram';
import { CinematicScroll } from './components/CinematicScroll';
import { InteractiveDiagram } from './components/InteractiveDiagram';
import { ScrollingGalaxy } from './components/ScrollingGalaxy';

const App = () => {
  return (
    <div className="bg-dark-gradient min-h-screen text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <FloatingIcons />
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            BloomScroll
          </motion.h1>
          <InteractiveOrb />
          <motion.p 
            className="text-xl mt-8 text-neon-blue"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Redefining social media for good
          </motion.p>
        </div>
      </motion.section>

      {/* Cinematic Scroll Section */}
      <CinematicScroll />

      {/* Story Section */}
      <InteractiveStory />

      {/* Galaxy Section */}
      <ScrollingGalaxy />

      {/* Interactive Diagram */}
      <InteractiveDiagram />

      {/* Original Diagram Section */}
      <ScrollingDiagram />

      {/* Game Section */}
      <FlowerGame />

      {/* Vision Section */}
      <section className="min-h-screen py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <ParallaxText>
            <h2 className="text-4xl font-bold mb-16">Our Vision</h2>
          </ParallaxText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="p-8 rounded-xl bg-gradient-to-br from-dark-card to-dark-card-hover border border-neon-purple/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Vision Point {item}</h3>
                <p className="text-gray-300">
                  Transforming digital interactions into meaningful connections that nurture growth
                  and inspire positive change.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;