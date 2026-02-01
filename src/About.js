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
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Passionate about creating digital experiences that push the
            boundaries of what’s possible
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Card */}
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg">
              <img
                src="/sandeep.jpeg"
                alt="Ledalla Sandeep"
                className="w-72 h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Hello Again, I’m{" "}
              <span className="text-green-400">Ledalla Sandeep</span>
            </h2>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed">
                I am a passionate and detail-oriented Frontend Developer with a
                strong focus on building modern, responsive, and user-friendly
                web applications. I enjoy transforming ideas and designs into
                interactive digital experiences that are both visually appealing
                and highly functional.
              </p>
            </div>
          </div>
        </div>

        {/* Skills / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
