import "./App.css";
import Navbar from "./Navbar";
import Particles from "./Particles";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const coreTechnologies = [
    {
      name: "JavaScript",
      level: "Advanced",
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "React.js",
      level: "Advanced",
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "Next.js",
      level: "Intermediate",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      name: "Python",
      level: "Intermediate",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      name: "CSS",
      level: "Advanced",
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "HTML",
      level: "Advanced",
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "Bootstrap",
      level: "Advanced",
      color: "bg-green-500/20 text-green-400",
    },
    {
      name: "Git",
      level: "Intermediate",
      color: "bg-blue-500/20 text-blue-400",
    },
  ];

  return (
    <div className="bg-slate-900 text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* HOME SECTION */}
      <section id="home" className="relative min-h-screen pt-32 pb-16">
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

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Ledalla Sandeep
          </h1>

          <h2 className="text-base md:text-xl text-gray-300 mb-2">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-xs md:text-sm max-w-sm mb-8">
            Building responsive web experiences with React.js, HTML, and CSS.
          </p>

          {/* CORE TECHNOLOGIES */}
          <h2 className="text-lg md:text-xl font-semibold text-white mb-5">
            Core Technologies
          </h2>

          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {coreTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center shadow"
                >
                  <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                    {tech.name}
                  </h3>

                  <span
                    className={`inline-block px-2 md:px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}
                  >
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-10 md:mt-16 flex-wrap justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-5 py-2.5 rounded-md text-xs md:text-sm transition-all hover:scale-105"
            >
              View Projects
            </button>

            <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-medium px-5 py-2.5 rounded-md text-xs md:text-sm transition-all hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <Experience />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
