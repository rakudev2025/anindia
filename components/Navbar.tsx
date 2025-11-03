'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/logo.png"
              alt="Anindia Karya Nusantara"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
              }`}
            />            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Testimoni
            </button>
            <a 
              href="https://dievaluasi.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              DiEvaluasi
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')} 
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition font-medium"
            >
              Hubungi Kami
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-700 p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg font-medium transition"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg font-medium transition"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg font-medium transition"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg font-medium transition"
            >
              Testimoni
            </button>
            <a 
              href="https://dievaluasi.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg font-medium transition"
            >
              DiEvaluasi
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition"
            >
              Hubungi Kami
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;