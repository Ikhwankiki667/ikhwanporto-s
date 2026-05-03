"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import { useState } from "react";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section className="py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-accent">Certificates</span>
          </h1>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Sertifikat dan pencapaian yang pernah aku raih selama perjalanan belajar
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCert(cert.id)}
                className="bg-secondary rounded-lg border-2 border-blue-500/20 hover:border-blue-500/60 transition-all cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-blue-700/50">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-accent font-semibold">{cert.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal for full certificate view */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-accent"
              >
                ✕
              </button>
              <Image
                src={certificates.find(c => c.id === selectedCert)?.image || ""}
                alt="Certificate"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
