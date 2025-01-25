'use client';
import { motion } from 'framer-motion';

export default function RainbowBanner() {
  return (
    <div className="w-full h-4 flex">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-full bg-gradient-to-r from-red-600 via-orange-500 via-yellow-400 via-green-500 via-blue-600 via-purple-600 to-pink-600"
      />
    </div>
  );
}