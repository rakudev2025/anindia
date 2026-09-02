'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8"
        >
          {/* Column 1 - Logo & Description */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/logo.png"
                alt="Anindia Karya Nusantara"
                className="h-12 object-contain mb-4"
              />
            </div>
            <p className="text-sm">
              Solusi teknologi pendidikan terpercaya untuk transformasi digital institusi Anda.
            </p>
          </motion.div>

          {/* Column 2 - Layanan */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Layanan</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#services" className="hover:text-emerald-400 transition">
                  Sistem Informasi Akademik
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#services" className="hover:text-emerald-400 transition">
                  Platform E-Learning
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#services" className="hover:text-emerald-400 transition">
                  Penelitian AR/VR
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#services" className="hover:text-emerald-400 transition">
                  Manajemen Jurnal
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a 
                  href="https://dievaluasi.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition font-semibold"
                >
                  DiEvaluasi (Tryout)
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 3 - Perusahaan */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Perusahaan</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#about" className="hover:text-emerald-400 transition">
                  Tentang Kami
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#services" className="hover:text-emerald-400 transition">
                  Layanan
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href="#testimonials" className="hover:text-emerald-400 transition">
                  Testimoni
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Column 4 - Kontak */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontak</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start"
              >
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                JL. Padma GG IX No 7, Saba, KOTA DENPASAR, Bali
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center"
              >
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+622112345678" className="hover:text-emerald-400 transition">
                  +62 857-3737-3999
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center"
              >
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@anindia.co.id" className="hover:text-emerald-400 transition">
                  rakudev2025@gmail.com
                </a>
              </motion.li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="hover:text-emerald-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="hover:text-emerald-400 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="hover:text-emerald-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-800 pt-8 text-center text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} PT Anindia Karya Nusantara. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;