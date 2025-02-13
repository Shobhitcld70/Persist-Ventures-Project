import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';

export const FlowerGame = () => {
  const [flowers, setFlowers] = useState<{ x: number; y: number; scale: number }[]>([]);
  const [score, setScore] = useState(0);

  const addFlower = () => {
    if (flowers.length < 10) {
      setFlowers([
        ...flowers,
        {
          x: Math.random() * window.innerWidth * 0.8,
          y: Math.random() * 200,
          scale: 0.5 + Math.random() * 0.5
        }
      ]);
      setScore(score + 1);
    }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-neon-blue mb-4">Plant Your Garden</h3>
        <p className="text-gray-300 mb-4">Click to plant flowers and watch them grow</p>
        <div className="text-2xl text-neon-purple">Score: {score}</div>
      </div>
      
      <motion.div 
        className="relative h-[400px] border-b-2 border-neon-purple/30 mx-auto max-w-4xl"
        onClick={addFlower}
      >
        {flowers.map((flower, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, y: 50, x: flower.x }}
            animate={{ 
              opacity: 1, 
              y: flower.y,
              scale: flower.scale,
              rotate: [-10, 10]
            }}
            transition={{
              duration: 1,
              rotate: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <Flower className="w-12 h-12 text-neon-purple" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};