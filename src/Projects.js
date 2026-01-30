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
        "Implemented multilingual support and GPT-powered search for precise movie recommendations",
        "Built responsive UI with smooth navigation and user-friendly interface",
      ],
    },
    {
      id: 2,
      title: "E-COMMERCE WEBSITE",
      icon: "🛒",
      gradient: "from-blue-600 to-blue-700",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "RESTful API"],
      features: [
        "Built a fully functional e-commerce website using React.js with product listings, search, and shopping cart features",
        "Integrated RESTful API for real-time product data and used React Router for seamless navigation",
        "Designed responsive layout compatible across all devices",
        "Implemented state management for cart and user interactions",
      ],
    },
    {
      id: 3,
      title: "FOOD DELIVERY APP",
      icon: "🍔",
      gradient: "from-orange-600 to-orange-700",
      technologies: ["React.js", "JavaScript", "Firebase", "React Router"],
      features: [
        "Created a food delivery app where users can browse restaurants and place orders using React.js",
        "Implemented Firebase for user authentication and order data storage",
        "Used React Router for seamless navigation between pages",
        "Built real-time order tracking and user dashboard functionality",
      ],
    },
    {
      id: 4,
      title: "YOUTUBE CLONE",
      icon: "📺",
      gradient: "from-purple-600 to-purple-700",
      technologies: ["React.js", "JavaScript", "Rapid API", "HTML", "CSS"],
      features: [
        "Designed and developed a YouTube clone application with comprehensive features, including advanced video and channel search capabilities",
        "Implemented seamless video playback with user-friendly interface",
        "Integrated Rapid API for video retrieval and playback, showcasing proficiency in third-party services",
        "Demonstrated strong programming skills by creating a fully functional video platform with search and playback features",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative pt-32 pb-16 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 space-y-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">My Projects</h1>
          <p className="text-xl text-gray-300">
            Showcasing my work in frontend development and web applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-3xl">{project.icon}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
            <div className="text-gray-300 text-sm">Projects Built</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Responsive</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Learning</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
