import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Heart, Users } from 'lucide-react';

const diagramData = [
  {
    icon: Brain,
    title: "Mindful Engagement",
    description: "AI-powered content curation that promotes growth"
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Understanding and nurturing emotional well-being"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Creating meaningful connections and support networks"
  },
  {
    icon: Activity,
    title: "Impact Tracking",
    description: "Measuring and visualizing positive change"
  }
];

export const ScrollingDiagram = () => {
  return (
    <div className="py-20 bg-dark-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-neon-blue mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          How BloomScroll Works
        </motion.h2>
        
        <div className="relative">
          {diagramData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-20"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mr-8">
                <item.icon className="w-8 h-8 text-neon-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neon-blue mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            className="absolute left-[2rem] top-0 h-full w-0.5 bg-neon-purple/20"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};