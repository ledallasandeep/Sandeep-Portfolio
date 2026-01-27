import "./App.css";
import Navbar from "./Navbar";
import Particles from "./Particles";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Experience from "./Experience";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="w-full min-h-screen bg-slate-900 relative overflow-hidden">
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
                  disableRotation={false}
                  pixelRatio={1}
                />
              </div>

              {/* HERO CONTENT */}
              <div className="relative z-10 pt-32 flex flex-col items-center text-center px-5">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Ledalla Sandeep
                </h1>

                <h2 className="text-lg md:text-xl text-gray-300 mb-2">
                  Frontend Developer
                </h2>

                <p className="text-gray-400 text-sm max-w-md mb-10">
                  Building responsive web experiences with React.js, HTML, and
                  CSS.
                </p>

                {/* CORE TECHNOLOGIES */}
                <h2 className="text-xl font-semibold text-white mb-6">
                  Core Technologies
                </h2>

                <div className="max-w-6xl w-full mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-1">
                    {[
                      {
                        name: "JavaScript",
                        role: "Frontend",
                        level: "Advanced",
                        color: "bg-green-500/20 text-green-400",
                      },
                      {
                        name: "React.js",
                        role: "Frontend Library",
                        level: "Advanced",
                        color: "bg-green-500/20 text-green-400",
                      },
                      {
                        name: "Python",
                        role: "Backend",
                        level: "Intermediate",
                        color: "bg-blue-500/20 text-blue-400",
                      },
                      {
                        name: "CSS",
                        role: "Styling",
                        level: "Advanced",
                        color: "bg-green-500/20 text-green-400",
                      },
                      {
                        name: "HTML",
                        role: "Markup",
                        level: "Advanced",
                        color: "bg-green-500/20 text-green-400",
                      },
                      {
                        name: "Bootstrap",
                        role: "CSS Framework",
                        level: "Advanced",
                        color: "bg-green-500/20 text-green-400",
                      },
                      {
                        name: "MySQL",
                        role: "Database",
                        level: "Beginner",
                        color: "bg-yellow-500/20 text-yellow-400",
                      },
                      {
                        name: "Git",
                        role: "Version Control",
                        level: "Intermediate",
                        color: "bg-blue-500/20 text-blue-400",
                      },
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center shadow hover:scale-105 transition"
                      >
                        <h3 className="text-base font-semibold text-white mb-1">
                          {tech.name}
                        </h3>

                        <p className="text-gray-400 text-xs mb-3">
                          {tech.role}
                        </p>

                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}
                        >
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-8">
                  <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-4 py-2 rounded-md text-xs">
                    View Projects
                  </button>

                  <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-medium px-4 py-2 rounded-md text-xs transition">
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
