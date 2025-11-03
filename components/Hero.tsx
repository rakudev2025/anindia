'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Solusi Teknologi Pendidikan Terpadu
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transformasi Digital untuk Ekosistem <span className="text-emerald-600">Pendidikan Indonesia</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              PT Anindia Karya Nusantara mengembangkan sistem informasi akademik, platform pembelajaran digital, penelitian berbasis AR/VR, dan solusi teknologi pendidikan yang inovatif.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')} 
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center group"
              >
                Lihat Layanan Kami
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://dievaluasi.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition text-center"
              >
                Platform DiEvaluasi
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex items-center space-x-8"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-emerald-600">50+</p>
                <p className="text-sm text-gray-600">Institusi Mitra</p>
              </motion.div>
              <div className="w-px h-12 bg-gray-300"></div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-emerald-600">100+</p>
                <p className="text-sm text-gray-600">Proyek Selesai</p>
              </motion.div>
              <div className="w-px h-12 bg-gray-300"></div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-emerald-600">10+</p>
                <p className="text-sm text-gray-600">Tahun Berpengalaman</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10 bg-white rounded-2xl shadow-2xl p-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Education Technology" 
                className="rounded-lg w-full"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-3xl font-bold">ISO</p>
                <p className="text-sm">Certified Company</p>
              </motion.div>
            </motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-72 h-72 bg-emerald-200 rounded-full filter blur-3xl"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200 rounded-full filter blur-3xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;