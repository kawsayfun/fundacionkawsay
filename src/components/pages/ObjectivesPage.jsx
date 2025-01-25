'use client';
import { motion } from 'framer-motion';
import VideoSection from '@/components/objectives/VideoSection';

export default function ObjectivesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <VideoSection />
    </motion.div>
  );
}