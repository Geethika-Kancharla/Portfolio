"use client";

import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory tracking and secure payment processing. Features include user authentication, product management, and order tracking.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/johndoe/ecommerce",
      live: "https://ecommerce-demo.com",
      category: "Full Stack",
    },
    {
      title: "AI Task Manager",
      description:
        "An intelligent task management system with AI-powered prioritization and natural language processing. Includes team collaboration features and performance analytics.",
      technologies: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/johndoe/taskmanager",
      live: "https://task-manager-demo.com",
      category: "Machine Learning",
    },
    {
      title: "Social Analytics Dashboard",
      description:
        "Real-time social media analytics platform providing sentiment analysis and engagement metrics visualization. Helps businesses make data-driven decisions.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "D3.js", "Socket.io"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/johndoe/analytics",
      live: "https://social-analytics.com",
      category: "Data Visualization",
    },
  ];

  return (
    <section
      id="projects"
      className="text-white min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-12">
            Featured
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-3">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/50 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900/70 backdrop-blur-sm text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-900/70 backdrop-blur-sm text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg bg-slate-800/50 text-slate-300 hover:bg-slate-800 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
