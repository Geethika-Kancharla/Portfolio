
"use client"

import React from 'react';
import { SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, SiGit, SiDocker } from 'react-icons/si';
import { FaDatabase, FaAws } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "SQL", icon: FaDatabase, color: "#336791" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ]
    }
  ];

  return (
    <section id="skills" className="text-white min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-3">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise and the technologies I work with to build modern web applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]"
                  >
                    <skill.icon
                      className="text-2xl transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;