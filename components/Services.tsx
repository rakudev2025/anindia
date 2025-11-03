'use client';

import React from 'react';
import { CheckCircle2, GraduationCap, BookOpen, Network, Microscope, FileText, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Sistem Informasi Akademik",
      desc: "Pengembangan sistem manajemen akademik terintegrasi untuk universitas, sekolah, dan institusi pendidikan.",
      features: ["Manajemen Mahasiswa", "Penjadwalan Otomatis", "E-Learning Integration", "Reporting & Analytics"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Platform Pembelajaran Digital",
      desc: "Solusi Learning Management System (LMS) dan platform e-learning interaktif dengan fitur modern.",
      features: ["Virtual Classroom", "Konten Multimedia", "Assessment Tools", "Progress Tracking"]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Penelitian & Pengembangan",
      desc: "Riset dan implementasi teknologi AR/VR untuk pembelajaran, simulasi, dan penelitian akademik.",
      features: ["AR/VR Learning", "Virtual Laboratory", "3D Simulation", "Research Tools"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Manajemen Jurnal Ilmiah",
      desc: "Sistem pengelolaan jurnal online (OJS) untuk publikasi, review, dan indexing karya ilmiah.",
      features: ["Submission System", "Peer Review", "DOI Integration", "Indexing Support"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Integrasi Sistem Pendidikan",
      desc: "Integrasi berbagai platform pendidikan dengan sistem informasi terpusat dan API modern.",
      features: ["API Development", "Data Integration", "Single Sign-On", "Cloud Infrastructure"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplikasi Mobile Pendidikan",
      desc: "Pengembangan aplikasi mobile untuk akses akademik, pembelajaran, dan komunikasi kampus.",
      features: ["Cross-Platform", "Offline Access", "Push Notifications", "Real-time Sync"]
    }
  ];

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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan & Solusi Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi teknologi komprehensif untuk transformasi digital institusi pendidikan
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-emerald-500 hover:shadow-xl transition group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* DiEvaluasi Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Platform Unggulan
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              DiEvaluasi - Platform Tryout Online Terpercaya
            </h3>
            <p className="text-emerald-100 mb-6">
              Sistem tryout online yang dikembangkan untuk persiapan ujian SKD, BUMN, SNBT, dan berbagai tes kompetensi lainnya. Dilengkapi dengan analitik mendalam dan bank soal berkualitas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { value: "10,000+", label: "Pengguna Aktif" },
                { value: "50,000+", label: "Bank Soal" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 px-4 py-2 rounded-lg"
                >
                  <p className="font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-emerald-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://dievaluasi.id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Kunjungi DiEvaluasi
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;