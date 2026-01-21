import "./App.css";
import Particles from "./Particles";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-black relative overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-20  py-5">
          <h1 className="text-3xl text-white font-bold">Sandeep Folio</h1>

          <div className="flex gap-6 text-lg">
            <h2 className="cursor-pointer hover:text-blue-600 text-white">
              Home
            </h2>
            <h2 className="cursor-pointer hover:text-blue-600 text-white">
              About
            </h2>
            <h2 className="cursor-pointer hover:text-blue-600 text-white">
              Experience
            </h2>
            <h2 className="cursor-pointer hover:text-blue-600 text-white">
              Projects
            </h2>
            <h2 className="cursor-pointer hover:text-blue-600 text-white">
              Contact
            </h2>
          </div>
        </div>

        {/* Center Text */}
        <div className="absolute top-32 left-0 w-full z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Ledalla Sandeep
          </h1>
          <h2 className="text-2xl text-gray-300">Frontend Developer</h2>
        </div>
      </div>
    </>
  );
}

export default App;
