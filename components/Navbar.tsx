'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }, []);

  const navLinks = [
    { label: 'Beranda', id: 'home' },
    { label: 'Layanan', id: 'services' },
    { label: 'Tentang', id: 'about' },
    { label: 'Testimoni', id: 'testimonials' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2 sm:py-3' : 'bg-white/95 backdrop-blur-sm py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/logo.png"
                alt="Anindia Karya Nusantara"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'h-10 sm:h-12 md:h-14' : 'h-11 sm:h-13 md:h-16'
                }`}
              />            
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-emerald-600 transition font-medium text-sm lg:text-base"
                >
                  {link.label}
                </button>
              ))}
              <a 
                href="https://dievaluasi.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-emerald-600 transition font-medium text-sm lg:text-base"
              >
                DiEvaluasi
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')} 
                className="bg-emerald-600 text-white px-5 lg:px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition font-medium text-sm lg:text-base"
              >
                Hubungi Kami
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden text-gray-700 p-2 -mr-2 relative z-50 rounded-lg hover:bg-gray-100 transition"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-40 md:hidden pt-20 px-4 pb-6 overflow-y-auto"
            >
              <div className="space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-4 py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl font-medium transition text-[15px]"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                  href="https://dievaluasi.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl font-medium transition text-[15px]"
                >
                  DiEvaluasi
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05 + 0.1 }}
                  className="pt-2"
                >
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-center px-4 py-3.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-medium transition text-[15px]"
                  >
                    Hubungi Kami
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;