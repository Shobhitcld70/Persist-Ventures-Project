import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  speed?: number;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({ children, speed = 1 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  
  return (
    <motion.div style={{ y }} className="text-neon-blue">
      {children}
    </motion.div>
  );
};