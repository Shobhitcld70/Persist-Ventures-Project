import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CinematicScroll = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ scale, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20" />
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] bg-cover bg-center" />
      </motion.div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-neon-blue mb-8">Journey Through Digital Space</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience a new dimension of social connection
          </p>
        </motion.div>
      </div>
    </section>
  );
};