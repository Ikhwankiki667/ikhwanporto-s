"use client";

import { motion } from "framer-motion";

export default function LearningSection() {
  const learningItems = [
    {
      title: "Deep Learning & Neural Networks",
      description: "Lagi belajar TensorFlow sama PyTorch buat bikin model yang lebih ribet. Pengen bisa bikin image classifier sendiri sih, kadang eksplor PyCaret buat autoML nya",
      progress: 45,
      icon: "💡",
      color: "blue-400",
    },
    {
      title: "Advanced Figma & Prototyping",
      description: "Upgrade skill UI/UX belajar auto-layout, component variants, dan interactive prototyping yang lebih ngecir.",
      progress: 60,
      icon: "🎨",
      color: "blue-500",
    },
    {
      title: "React & Modern Web Dev",
      description: "Lagi belajar React buat bikin dashboard yang lebih interaktif. Sama nyoba Next.js juga sih, biar mendingan wkwk",
      progress: 50,
      icon: "⚡",
      color: "blue-500",
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
          <h2 className="text-4xl font-bold text-center mb-12">
            Lagi <span className="text-accent">Belajar</span> Apa?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-6 rounded-lg border-2 border-blue-400/30 hover:border-blue-400/60 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-${item.color}/20 p-3 rounded-lg text-3xl`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-3 text-sm">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`bg-${item.color} h-2 rounded-full`}
                        ></motion.div>
                      </div>
                      <span className={`text-sm text-${item.color}`}>{item.progress}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
