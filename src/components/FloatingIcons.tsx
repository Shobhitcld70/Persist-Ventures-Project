import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Stars, Flower } from 'lucide-react';

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[Moon, Sun, Stars, Flower].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon className="w-8 h-8 text-neon-purple opacity-30" />
        </motion.div>
      ))}
    </div>
  );
};