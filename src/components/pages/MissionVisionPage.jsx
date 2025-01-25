'use client';
import { motion } from 'framer-motion';
import MissionVisionTabs from '@/components/mission-vision/MissionVisionTabs';
import PageHeader from '@/components/common/PageHeader';

export default function MissionVisionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader 
        title="Misión y Visión" 
        description="Conoce nuestros objetivos y aspiraciones para el futuro"
      />
      <MissionVisionTabs />
    </motion.div>
  );
}