'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Komang Mahendra", 
      role: "Direktur Utama, EduMandiri Network", 
      text: "Sistem informasi akademik dari Anindia benar-benar mengubah cara kami mengelola data mahasiswa. Proses yang dulu memakan waktu berhari-hari, kini bisa selesai dalam hitungan jam. Tim support-nya juga sangat responsif.",
      initial: "K"
    },
    { 
      name: "Agus Supriatmaja", 
      role: "Kepala Divisi Digital, Nusacode Academy", 
      text: "Platform e-learning yang dikembangkan sangat user-friendly. Peserta pelatihan kami bisa mengakses materi kapan saja. Fitur progress tracking membantu kami memantau perkembangan setiap peserta dengan mudah.",
      initial: "A"
    },
    { 
      name: "Bagastia Atmaja", 
      role: "Manajer Akademik, Aksara Tekno College", 
      text: "Implementasi virtual lab berbasis AR/VR untuk simulasi praktikum sangat inovatif. Mahasiswa bisa berlatih skenario nyata secara virtual sebelum terjun ke lapangan. Teknologi yang luar biasa!",
      initial: "B"
    },
    { 
      name: "Gio Satria", 
      role: "Direktur Operasional, Bimantara Learning Center", 
      text: "DiEvaluasi membantu kami menyediakan tryout online untuk siswa-siswa kami. Sistem penilaian otomatis dan analitik hasilnya sangat detail. Orang tua siswa pun bisa memantau progres anak mereka secara real-time.",
      initial: "G"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.55, 0.55, 1]
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
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Apa Kata Mereka
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kepercayaan dari berbagai institusi pendidikan dan pelatihan di Bali
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden group"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-emerald-600" />
              </div>

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
                    className="text-yellow-400 text-lg"
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
                className="text-gray-600 mb-6 italic leading-relaxed text-sm sm:text-base"
              >
                &ldquo;{testimonial.text}&rdquo;
              </motion.p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-emerald-200 mb-4"></div>

              {/* User Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.6 }}
                className="flex items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0"
                >
                  {testimonial.initial}
                </motion.div>
                <div className="ml-3 sm:ml-4 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;