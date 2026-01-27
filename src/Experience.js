import React from "react";
import Particles from "./Particles";

const Experience = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative pt-32 overflow-hidden">
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
    </div>
  );
};

export default Experience;
