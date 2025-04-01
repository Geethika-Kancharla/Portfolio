"use client"

import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiSpringboot,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiPostgresql,
  SiGithubactions
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },

      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Git", icon: SiGit, color: "#F05032" }
      ]
    }
  ];

  return (
    <section id="skills" className="text-white min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mt-12">
            Technical
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-3">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise and the technologies I work with to build modern applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-blue-500/50 transition-all duration-300 group animate-fade-in-up"
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