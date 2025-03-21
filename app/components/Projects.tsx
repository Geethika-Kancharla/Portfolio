"use client";

import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      "title": "DevCollab",
      "description": "DevCollab is a real-time collaborative code editor that enables multiple users to write and edit code simultaneously.",
      "technologies": [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "SockJS",
        "STOMP",
        "Monaco Editor",
        "Spring Boot",
        "WebSocket",
        "JWT",
        "MongoDB"
      ],
      "image": "images/DevCollab.png",
      "github": "https://github.com/Geethika-Kancharla/DevCollab",
      "live": "https://blood-serve.vercel.app/",

    },
    {
      "title": "FreshSaver",
      "description": "FreshSaver is a web application designed to help users manage their food inventory efficiently by leveraging barcode scanning technology. It aims to reduce food wastage and promote sustainable consumption through timely expiration date tracking and recipe suggestions.",
      "technologies": [
        "React",
        "Tailwind CSS",
        "Firebase",
        "Open Food Facts API",
        "Edamam API"
      ],
      "image": "images/FS.png",
      "github": "https://github.com/Geethika-Kancharla/FreshSaver",
      "live": "https://fresh-saver.vercel.app/",

    },
    {
      "title": "BloodServe",
      "description": "BloodServe is a web application which features role-based authentication, allowing users to register as donors and access analytical summaries of donor distributions by blood group. The system includes CRUD operations, enabling admins to manage donor records.",
      "technologies": [
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "MySQL"
      ],
      "image": "images/BloodServe.png",
      "github": "https://github.com/Geethika-Kancharla/BloodServe",
      "live": "https://dev-collab-eight.vercel.app/",

    },
    {
      "title": "PRotect",
      "description": "A GitHub App(bot) that automatically scans pull requests, identifies malicious code, and prevents security threats before they get merged. The bot provides inline PR comments, assigns a security score, and auto-closes PRs that fall below a threshold, ensuring your repository remains safe from supply chain attacks.",
      "technologies": [
        "GitHub App",
      "Probot",
      "Node.js",
      ],
      "image": "images/Install.jpg",
      "github": "https://github.com/Geethika-Kancharla/PRotect",
      "live": "https://github.com/apps/pryrag"

    },
    {
      "title": "IWeb",
      "description": "IWeb is a web application designed to enhance accessibility for individuals with visual impairments by utilizing advanced object detection technology.",
      "technologies": [
        "Object Detection Framework (YOLO)",
        "Text-to-Speech (Web-Speech API)",
        "React",
        "Flask",
        "Tailwind CSS"
      ],
      "image": "images/IWeb.jpg",
      "github": "https://github.com/Geethika-Kancharla/IWeb",
      "live": "https://iweb-demo.com"

    },
    {
      "title": "CarbMine",
      "description": "CarbMine is a web application that empowers features like carbon emission estimation, carbon neutrality simulations, data visualization, carbon credit calculations, and allows users to generate and store PDF reports of their analysis.",
      "technologies": [
        "React",
        "Tailwind CSS",
        "GSAP",
        "Python (Flask)",
        "Firebase"
      ],
      "image": "images/CarbMine.png",
      "github": "https://github.com/Geethika-Kancharla/CarbMine",
      "live": "https://carbmine-demo.com",
      "category": "Climate Change"
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

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
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
