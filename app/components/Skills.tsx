"use client";

import React from "react";
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
  SiGithubactions,
  SiPython,
  SiDatabricks,
  SiGitlab,
  SiFlask,
  SiFastapi,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Frameworks & Technologies",
    gradient: "from-violet-500 to-fuchsia-600",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Databases",
    gradient: "from-emerald-500 to-green-600",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "FAISS (Vector DB)", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Tools",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
       

        <h2 className="text-4xl md:text-5xl font-bold mt-12">
            Technical
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-3">
              Skills
            </span>
          </h2>

    
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

        {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.05]"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 bg-gradient-to-br ${category.gradient}`}
              />

              {/* Header */}
              <div className="relative mb-6 flex items-center justify-between">
                <h3
                  className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-2xl font-bold text-transparent`}
                >
                  {category.title}
                </h3>

              
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/chip flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 transition-all duration-300 hover:scale-105 hover:border-blue-400/40 hover:bg-slate-800"
                  >
                    <skill.icon
                      size={20}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover/chip:rotate-6 group-hover/chip:scale-110"
                    />

                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
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