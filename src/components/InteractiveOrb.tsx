import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const InteractiveOrb = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.1, y: y * 0.1 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={orbRef}
      className="relative w-64 h-64"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Sparkles className="w-12 h-12 text-white" />
      </div>
    </motion.div>
  );
};