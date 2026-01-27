import React from "react";
import Particles from "./Particles";

const About = () => {
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

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <p className="text-gray-300 mb-10 leading-relaxed">
          I am a passionate and detail-oriented Frontend Developer with a strong
          focus on building modern, responsive, and user-friendly web
          applications. I enjoy transforming ideas and designs into interactive
          digital experiences that are both visually appealing and highly
          functional.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "React.js Development",
              desc: "Building scalable, component-based applications using hooks, props, and clean architecture.",
            },
            {
              title: "HTML & CSS",
              desc: "Creating responsive, accessible, and visually consistent interfaces using modern CSS techniques.",
            },
            {
              title: "Backend Awareness",
              desc: "Working knowledge of Python and understanding frontend-backend interactions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
