'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const reasons = [
    { 
      icon: "🎯", 
      title: "Fokus pada Pendidikan", 
      desc: "Spesialisasi dalam pengembangan teknologi untuk sektor pendidikan" 
    },
    { 
      icon: "💡", 
      title: "Solusi Inovatif", 
      desc: "Menghadirkan teknologi terkini seperti AR/VR dan AI" 
    },
    { 
      icon: "🤝", 
      title: "Kemitraan Jangka Panjang", 
      desc: "Komitmen untuk pertumbuhan bersama klien" 
    },
    { 
      icon: "⚡", 
      title: "Implementasi Cepat", 
      desc: "Delivery tepat waktu dengan kualitas terjamin" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.55, 0.55, 1] as const
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Anindia?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Keunggulan yang membuat kami menjadi mitra terpercaya untuk transformasi digital pendidikan
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="text-center p-4 sm:p-6 hover:bg-emerald-50 rounded-xl transition cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl mb-3 sm:mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-base text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;