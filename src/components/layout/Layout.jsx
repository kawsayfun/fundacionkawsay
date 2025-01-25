'use client';
import Header from './Header';
import Footer from './Footer';
import SocialLinks from '../SocialLinks';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <SocialLinks />
      <Footer />
    </div>
  );
}