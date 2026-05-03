"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FunFactsSection() {
  const [showSurprise, setShowSurprise] = useState(false);

  const facts = [
    {
      icon: "🎮",
      title: "Hobi",
      description: "Main game & baca buku (tergantung mood wkwkwk). Pasti mentok 2 itu",
      color: "blue-500",
    },
    {
      icon: "🎵",
      title: "Musik",
      description: "Tergantung suasana hati sih",
      link: "https://open.spotify.com/user/31iugjha6gnd6pr3omj3yan4alou?si=cb7b5a6d87e6490c",
      linkText: "Cek Spotify ku →",
      color: "blue-400",
    },
    {
      icon: "🍜",
      title: "Makanan Favorit",
      description: "Indomie kuah plus telor. Apalagi pas hujan kwkwkwkw",
      color: "blue-500",
    },
    {
      icon: "📚",
      title: "Kebiasaan Unik",
      description: "Tiba-tiba nyari jurnal terus dibaca.",
      color: "blue-500",
    },
    {
      icon: "🏫",
      title: "Hal Random",
      description: "Suka tiba-tiba muterin ITS 4 kali 😂",
      color: "blue-400",
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
            Fun <span className="text-accent">Facts</span> About Me
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Hal-hal random yang mungkin kamu gak tau tentang aku (Mungkin)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-background p-6 rounded-lg border-2 border-${fact.color}/30 hover:border-${fact.color}/60 transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-${fact.color}/20 p-3 rounded-lg text-3xl`}>
                    {fact.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 text-${fact.color}`}>
                      {fact.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{fact.description}</p>
                    {fact.link && (
                      <a
                        href={fact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-${fact.color} hover:text-blue-300 text-sm underline mt-2 inline-block`}
                      >
                        {fact.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quote Card with Surprise */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowSurprise(!showSurprise)}
              className="bg-background p-6 rounded-lg border-2 border-blue-400/30 hover:border-blue-400/60 transition-all cursor-pointer md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-400/20 p-3 rounded-lg text-3xl">💭</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-blue-400">Quote Favorit</h3>
                  <p className="text-gray-300 italic text-sm">
                    "Gpp yg penting udh usaha buat hasil apa kata ntar serahin aja, bismillah"
                  </p>
                  <p className="text-gray-500 text-xs mt-1">~nz.nova</p>
                  {showSurprise && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-accent text-xs mt-2"
                    >
                      ✨ Keep pushing forward 🚀
                    </motion.p>
                  )}
                  {!showSurprise && (
                    <p className="text-blue-400 text-xs mt-2 opacity-70">
                      Klik untuk surprise 👀
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
