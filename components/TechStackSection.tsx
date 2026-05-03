"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TechStack {
  name: string;
  color: string;
  description: string;
  usage: string;
}

export default function TechStackSection() {
  const [selectedTech, setSelectedTech] = useState<TechStack | null>(null);

  const techStack: TechStack[] = [
    {
      name: "Python",
      color: "#3776AB",
      description: "Bahasa pemrograman utama yang aku pakai",
      usage: "Untuk data analysis, machine learning, automation, dan web scraping"
    },
    {
      name: "TensorFlow",
      color: "#FF6F00",
      description: "Framework deep learning dari Google",
      usage: "Bikin model neural network dan deep learning buat computer vision atau NLP"
    },
    {
      name: "Pandas",
      color: "#150458",
      description: "Library Python buat manipulasi data",
      usage: "Cleaning data, transformasi, analisis data tabular, dan eksplorasi dataset"
    },
    {
      name: "Figma",
      color: "#F24E1E",
      description: "Tool design UI/UX berbasis cloud",
      usage: "Bikin wireframe, prototype, dan design interface aplikasi"
    },
    {
      name: "Scikit-learn",
      color: "#F7931E",
      description: "Library machine learning paling populer di Python",
      usage: "Bikin model klasifikasi, regresi, clustering, dan preprocessing data"
    },
    {
      name: "Git",
      color: "#F34F29",
      description: "Version control system",
      usage: "Tracking perubahan code, kolaborasi tim, dan manage project"
    },
    {
      name: "Jupyter",
      color: "#F37726",
      description: "Interactive notebook buat coding",
      usage: "Eksplorasi data, visualisasi, dan dokumentasi analisis step-by-step"
    },
    {
      name: "VS Code",
      color: "#0065A9",
      description: "Code editor dari Microsoft",
      usage: "Nulis code Python, web development, dan project development"
    },
    {
      name: "Tableau",
      color: "#E97627",
      description: "Business intelligence dan data visualization tool",
      usage: "Bikin dashboard interaktif dan visualisasi data buat presentasi"
    },
    {
      name: "Google Colab",
      color: "#F9AB00",
      description: "Jupyter notebook berbasis cloud dari Google",
      usage: "Training model ML dengan GPU gratis dan kolaborasi real-time"
    },
    {
      name: "NumPy",
      color: "#4DABCF",
      description: "Library Python buat komputasi numerik",
      usage: "Operasi array, matrix, dan perhitungan matematis yang cepat"
    },
    {
      name: "Matplotlib",
      color: "#11557C",
      description: "Library visualisasi data di Python",
      usage: "Bikin plot, chart, dan visualisasi data statis"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Tools & technologies yang aku pakai sehari-hari
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedTech(tech)}
                className="bg-secondary p-6 rounded-lg border-2 border-blue-500/20 hover:border-blue-500/60 transition-all flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedTech && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTech(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-secondary border-2 border-accent/30 rounded-lg p-8 max-w-md w-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold"
                      style={{ backgroundColor: `${selectedTech.color}20`, color: selectedTech.color }}
                    >
                      {selectedTech.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedTech.name}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-accent font-semibold mb-2">Apa itu?</h4>
                      <p className="text-gray-300">{selectedTech.description}</p>
                    </div>

                    <div>
                      <h4 className="text-accent font-semibold mb-2">Aku pakai buat apa?</h4>
                      <p className="text-gray-300">{selectedTech.usage}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedTech(null)}
                    className="mt-6 w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Tutup
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
