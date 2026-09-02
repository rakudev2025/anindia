'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { 
      title: "Tim Ahli Berpengalaman", 
      desc: "Developer, researcher, dan konsultan teknologi pendidikan bersertifikat internasional" 
    },
    { 
      title: "Inovasi Berkelanjutan", 
      desc: "Riset dan pengembangan teknologi terkini seperti AR/VR dan AI untuk pendidikan" 
    },
    { 
      title: "Standar Kualitas Tinggi", 
      desc: "Mengikuti best practices dalam software development dan quality assurance" 
    },
    { 
      title: "Dukungan Purna Jual", 
      desc: "Maintenance, training, dan technical support untuk keberlangsungan sistem" 
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              src="/about-team.png" 
              alt="Tim Kolaborasi Anindia" 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Tentang PT Anindia Karya Nusantara
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
            >
              PT Anindia Karya Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk sektor pendidikan. Kami menyediakan sistem informasi akademik, platform pembelajaran, aplikasi mobile, dan layanan software development khusus bidang pendidikan.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            >
              Dengan pengalaman lebih dari 10 tahun, kami telah bermitra dengan berbagai universitas, sekolah, dan lembaga pendidikan di Indonesia. Kami juga aktif dalam penelitian dan pengembangan teknologi AR/VR, publikasi jurnal ilmiah, serta inovasi pembelajaran digital.
            </motion.p>
            
            <div className="space-y-4">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 cursor-pointer"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* DiEvaluasi Mention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-6 bg-white rounded-xl border-2 border-emerald-100 cursor-pointer"
            >
              <p className="text-gray-700">
                <span className="font-semibold text-emerald-600">DiEvaluasi</span> merupakan salah satu produk unggulan kami - platform tryout online yang dikembangkan untuk mendukung persiapan berbagai tes kompetensi dan seleksi di Indonesia.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;