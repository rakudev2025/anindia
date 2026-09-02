'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileDown } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full filter blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
        >
          Siap Transformasi Digital Institusi Anda?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-xl text-emerald-100 mb-6 sm:mb-8"
        >
          Konsultasikan kebutuhan teknologi pendidikan Anda dengan tim ahli kami
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6285737373999?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20PT%20Anindia%20Karya%20Nusantara.%20Bisa%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi via WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:rakudev2025@gmail.com?subject=Request%20Company%20Profile%20-%20PT%20Anindia%20Karya%20Nusantara&body=Yth.%20Tim%20PT%20Anindia%20Karya%20Nusantara%2C%0A%0ASaya%20tertarik%20untuk%20mendapatkan%20company%20profile.%20Mohon%20dapat%20dikirimkan.%0A%0ATerima%20kasih."
            className="border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <FileDown className="w-5 h-5" />
            Download Company Profile
          </motion.a>
        </motion.div>

        {/* DiEvaluasi CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-emerald-400"
        >
          <p className="text-emerald-100 mb-4 text-sm sm:text-base">
            Atau coba platform tryout online kami
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://dievaluasi.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-800 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:bg-emerald-900 transition text-sm sm:text-base"
          >
            Akses DiEvaluasi →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;