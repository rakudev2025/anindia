'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Dr. Ahmad Fauzi", 
      role: "Rektor Universitas Negeri Jakarta", 
      text: "Sistem informasi akademik yang dikembangkan Anindia sangat membantu dalam digitalisasi kampus kami. Implementasi cepat dan support yang responsif.",
      initial: "A"
    },
    { 
      name: "Siti Rahmawati, M.Pd", 
      role: "Kepala Sekolah SMAN 1 Bandung", 
      text: "Platform e-learning yang user-friendly dan fitur yang lengkap. Guru dan siswa sangat terbantu, terutama saat pembelajaran hybrid.",
      initial: "S"
    },
    { 
      name: "Prof. Budi Santoso", 
      role: "Direktur Lembaga Penelitian IPB", 
      text: "Implementasi AR/VR untuk virtual lab sangat inovatif. Mahasiswa bisa melakukan praktikum secara virtual dengan pengalaman yang mendekati real.",
      initial: "B"
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien
          </h2>
          <p className="text-lg text-gray-600">
            Kepercayaan dari institusi pendidikan terkemuka
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-lg cursor-pointer"
            >
              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="flex items-center mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.4 + i * 0.05 }}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.5 }}
                className="text-gray-600 mb-6 italic"
              >
                "{testimonial.text}"
              </motion.p>

              {/* User Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.6 }}
                className="flex items-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                >
                  {testimonial.initial}
                </motion.div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;