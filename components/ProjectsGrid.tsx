"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-secondary rounded-lg overflow-hidden border-2 border-blue-500/20 hover:border-blue-500/60 transition-all relative group"
        >
          {project.status === "coming-soon" && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
          )}

          <div className="relative h-48 bg-gradient-to-br from-blue-900/50 to-blue-700/50 flex items-center justify-center overflow-hidden">
            {project.image && project.status === "completed" ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <svg
                className="w-20 h-20 text-blue-500/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            )}
          </div>

          <div className="p-6">
            <div className="mb-2">
              <span className="text-xs text-accent font-semibold">{project.category}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/20 text-accent text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {project.status === "completed" ? (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-block bg-accent text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
              >
                View Details
              </Link>
            ) : (
              <button
                disabled
                className="bg-gray-600 text-gray-300 px-4 py-2 rounded cursor-not-allowed opacity-50 text-sm"
              >
                Coming Soon
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
