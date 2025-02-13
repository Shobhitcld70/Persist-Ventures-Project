import React from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, Users, Brain } from 'lucide-react';

const diagramSteps = [
  {
    icon: Network,
    title: "Neural Networks",
    description: "AI-powered connections that understand and adapt to your growth journey"
  },
  {
    icon: Zap,
    title: "Energy Flow",
    description: "Dynamic content curation that energizes rather than drains"
  },
  {
    icon: Users,
    title: "Community Synergy",
    description: "Collaborative spaces that foster meaningful relationships"
  },
  {
    icon: Brain,
    title: "Cognitive Enhancement",
    description: "Tools and interactions designed to expand consciousness"
  }
];

export const InteractiveDiagram = () => {
  return (
    <section className="min-h-screen py-32 bg-dark-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neon-blue">The BloomScroll Ecosystem</h2>
        </motion.div>

        <div className="grid gap-16">
          {diagramSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-8">
                <motion.div
                  className="w-24 h-24 rounded-full bg-neon-purple/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <step.icon className="w-12 h-12 text-neon-purple" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neon-blue mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
              {index < diagramSteps.length - 1 && (
                <motion.div
                  className="absolute left-12 top-24 w-0.5 h-24 bg-gradient-to-b from-neon-purple to-neon-blue"
                  initial={{ height: 0 }}
                  whileInView={{ height: 96 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};