import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      logo: "/api/placeholder/64/64",
      duration: "2023 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and MongoDB. Improved application performance by 40% through optimization techniques.",
    },
    {
      title: "Software Developer Intern",
      company: "Innovation Labs",
      logo: "/api/placeholder/64/64",
      duration: "2022 - 2023",
      description:
        "Collaborated with senior developers to build and maintain web applications. Implemented responsive designs and RESTful APIs.",
    },
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      logo: "/api/placeholder/64/64",
      duration: "2023 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and MongoDB. Improved application performance by 40% through optimization techniques.",
    },
    {
      title: "Software Developer Intern",
      company: "Innovation Labs",
      logo: "/api/placeholder/64/64",
      duration: "2022 - 2023",
      description:
        "Collaborated with senior developers to build and maintain web applications. Implemented responsive designs and RESTful APIs.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative space-y-12 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:to-purple-500">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col items-center md:items-stretch">
              <div className="absolute left-1/2 w-8 h-8 -translate-x-1/2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full z-10 border-4 border-slate-900" />

              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:ml-auto md:mr-16" : "md:mr-auto md:ml-16"
                }`}
              >
                <div className="w-full bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl backdrop-blur-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-4 md:gap-10 mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full bg-slate-900 p-2">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium text-sm md:text-base">{exp.company}</p>
                      <p className="text-slate-400 text-xs md:text-sm">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
