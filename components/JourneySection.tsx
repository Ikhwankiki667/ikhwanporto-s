"use client";

import { motion } from "framer-motion";

export default function JourneySection() {
  const timeline = [
    {
      period: "2012 - 2018",
      title: "SDN 263 Rancaloa",
      location: "Bandung, Jawa Barat",
      icon: "📚",
      side: "left",
    },
    {
      period: "2018 - 2021",
      title: "MTSN 1 Pasuruan",
      location: "Pasuruan, Jawa Timur",
      icon: "🏫",
      side: "right",
    },
    {
      period: "2021 - 2024",
      title: "MAN 1 Pasuruan",
      location: "Pasuruan, Jawa Timur",
      icon: "🎓",
      achievements: [
        "🏆 Juara 1 Procommit V11 - Pemrograman Excel (Prodistik ITS)",
        "🏆 Juara 1 Procommit V13 - Desain Web (Prodistik ITS)",
        "🏆 Juara 2 ELTRUM X - Line Follower (UMS)",
        "🤖 Aktif di berbagai lomba robotik",
      ],
      side: "left",
    },
    {
      period: "2024 - Sekarang",
      title: "Politeknik Elektronika Negeri Surabaya (PENS)",
      location: "Sains Data Terapan - Semester 4",
      icon: "🚀",
      achievements: ["🚀 Fokus: Machine Learning, Data Analysis, UI/UX Design"],
      side: "right",
      current: true,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Perjalanan <span className="text-accent">Aku</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Dari Bandung sampai PENS Surabaya
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-blue-400 to-accent hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    item.side === "left" ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className={`md:w-1/2 ${item.side === "left" ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`bg-background p-6 rounded-lg border-2 ${
                      item.current ? "border-accent/60" : "border-blue-500/30"
                    } hover:border-blue-500/60 transition-all`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        item.side === "left" ? "md:justify-end" : ""
                      }`}>
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-accent font-bold text-lg">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-3">{item.location}</p>
                      {item.achievements && (
                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="bg-accent/10 px-3 py-2 rounded-lg inline-block"
                            >
                              <p className="text-sm text-blue-400">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${
                    item.current ? "bg-accent animate-pulse" : "bg-blue-400"
                  } rounded-full border-4 border-secondary hidden md:block`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
