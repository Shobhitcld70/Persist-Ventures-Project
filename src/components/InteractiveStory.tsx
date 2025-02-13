import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sprout, Flower2, Users, Heart } from 'lucide-react';

const storySteps = [
  {
    icon: Sparkles,
    title: "The Spark",
    description: "It began with a simple idea: what if social media could nurture instead of drain?",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Sprout,
    title: "The Growth",
    description: "Like a seed taking root, connections began to form and flourish.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Flower2,
    title: "The Bloom",
    description: "Communities blossomed into spaces of genuine support and inspiration.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Users,
    title: "The Community",
    description: "People found their tribes, forming meaningful connections that transcend the digital.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "The Impact",
    description: "Together, we're creating ripples of positive change across the world.",
    color: "from-red-500 to-pink-500"
  }
];

export const InteractiveStory = () => {
  return (
    <div className="py-20">
      {storySteps.map((step, index) => (
        <motion.div
          key={index}
          className="max-w-4xl mx-auto mb-32"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={`p-8 rounded-xl bg-gradient-to-r ${step.color} shadow-2xl`}>
            <step.icon className="w-16 h-16 text-white mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-white/90 text-lg">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};