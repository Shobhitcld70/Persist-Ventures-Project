import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollingGalaxy = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ rotate, scale }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
      </motion.div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-neon-blue mb-8">Explore Your Digital Universe</h2>
          <p className="text-xl text-gray-300">
            Navigate through a cosmos of meaningful connections and inspiring content
          </p>
        </motion.div>
      </div>
    </section>
  );
};