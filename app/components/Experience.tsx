import React from "react";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      company: "Nasdaq",
      title: "Software Development Intern",
      logo: "/images/Nasdaq.jpg",
      duration: "Jan 2026 - June 2026",
      location: "Bangalore",
      highlights: [
        "Developed and deployed a full-stack Human-in-the-Loop (HITL) adjudication platform as a Databricks App using Next.js, FastAPI and Okta SSO, integrating AI-powered research agents and NER workflows to automate entity matching validation.",
        "Built production-grade deployment and workflow automation infrastructure using GitLab CI/CD and Databricks Asset Bundles, contributing to an initiative projected to reduce dataset onboarding effort by 90%.",
        "Built a reusable design system using customized shadcn/ui components and design tokens, with an automated migration agent that transformed existing components into Nasdaq-compliant implementations, reducing manual effort.",
      ],
    },
    {
      company: "Clipsi",
      title: "Next.js Developer Intern",
      logo: "/images/Clipsi.jpg",
      duration: "Oct 2024 - Jan 2025",
      location: "Remote",
      highlights: [
        "Developed scalable Next.js applications with server-side rendering, improving performance, SEO, and responsiveness across devices.",
        "Integrated Firebase services for data management and authentication, enhancing data-fetching efficiency and overall application performance.",
      ],
    },
    {
      company: "Point Blank",
      title: "Member",
      logo: "/images/PB.jpg",
      duration: "March 2024 - Present",
      location: "",
      highlights: [
        "Point Blank is an interdisciplinary team of programmers that focuses on developing a coding culture in DSCE through participation in competitions such as ACM-ICPC, GSoC and SIH.",
      ],
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-14 before:absolute before:left-1/2 before:top-0 before:h-full before:w-[2px] before:-translate-x-1/2 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-purple-500">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center md:items-stretch"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 z-20 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-slate-900 bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-500/30" />

              {/* Card */}
              <div
                className={`flex w-full flex-col md:w-5/12 ${
                  index % 2 === 0
                    ? "md:ml-auto md:mr-16"
                    : "md:mr-auto md:ml-16"
                }`}
              >
                <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 md:p-8">
                  {/* Header */}
                  <div className="mb-6 flex items-center gap-5">
                    <div className="rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-[2px]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={56}
                          height={56}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {exp.company}
                      </h3>

                      <p className="text-sm font-medium text-blue-400 md:text-base">
                        {exp.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400 md:text-sm">
                        {exp.duration}
                        {exp.location && (
                          <>
                            <span className="mx-2">•</span>
                            {exp.location}
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-300 md:text-base"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;