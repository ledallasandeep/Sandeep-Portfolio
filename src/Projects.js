import React from "react";
import Particles from "./Particles";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NETFLIX GPT",
      icon: "🎬",
      gradient: "from-red-600 to-red-700",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "TMDb API",
      ],
      features: [
        "Led development of NetflixGPT, a React and Tailwind CSS web app",
        "Integrated TMDb API and Redux Toolkit for seamless data management",
        "Implemented multilingual support and GPT-powered search",
        "Built responsive UI with smooth navigation",
      ],
    },
    {
      id: 2,
      title: "E-COMMERCE WEBSITE",
      icon: "🛒",
      gradient: "from-blue-600 to-blue-700",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "REST API"],
      features: [
        "Built a complete e-commerce platform with cart and search",
        "Integrated REST APIs and React Router",
        "Responsive across all devices",
        "Managed application state efficiently",
      ],
    },
    {
      id: 3,
      title: "FOOD DELIVERY APP",
      icon: "🍔",
      gradient: "from-orange-600 to-orange-700",
      technologies: ["React.js", "JavaScript", "Firebase", "React Router"],
      features: [
        "Developed a food delivery application with restaurant listings and order flow",
        "Implemented Firebase authentication and order data storage",
        "Used React Router for smooth page navigation",
        "Built responsive UI and real-time order handling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative pt-32 pb-20 overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            My Projects
          </h1>
          <p className="text-gray-300">
            Frontend & full-stack web applications
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-3xl">{project.icon}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
