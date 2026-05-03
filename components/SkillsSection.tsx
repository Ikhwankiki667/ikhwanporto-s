"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      title: "Data Analysis & Visualization",
      description: "Expert dalam mengolah dan memvisualisasikan data menggunakan Python, Pandas, Matplotlib, dan Seaborn untuk menghasilkan insight yang actionable.",
      percentage: 95,
      color: "bg-blue-500",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Machine Learning",
      description: "Pengalaman dalam membangun model ML menggunakan Scikit-learn, TensorFlow, dan XGBoost",
      percentage: 85,
      color: "bg-blue-400",
      span: "",
    },
    {
      title: "Digital Marketing",
      description: "Analisis data marketing dan optimasi kampanye digital",
      percentage: 80,
      color: "bg-blue-400",
      span: "",
    },
    {
      title: "UI/UX Design Principles",
      description: "Desain interface yang user-friendly menggunakan Figma",
      percentage: 75,
      color: "bg-blue-500",
      span: "md:col-span-2",
    },
    {
      title: "AI Prompting",
      description: "Prompt engineering untuk AI tools dan automation",
      percentage: 90,
      color: "bg-blue-400",
      span: "",
    },
    {
      title: "Web Development",
      description: "Frontend development dengan React dan Next.js",
      percentage: 70,
      color: "bg-blue-400",
      span: "",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-accent">Keahlian</span> Aku
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-background p-6 rounded-lg border-2 border-blue-500/20 hover:border-blue-500/60 transition-all ${skill.span}`}
              >
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                {skill.description && (
                  <p className="text-gray-400 mb-4 text-sm">{skill.description}</p>
                )}
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`${skill.color} h-3 rounded-full`}
                  ></motion.div>
                </div>
                <p className={`text-right mt-2 font-bold ${skill.color.replace('bg-', 'text-')}`}>
                  {skill.percentage}%
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
