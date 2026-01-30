import React from "react";
import Particles from "./Particles";

const Contact = () => {
  const contactInfo = [
    {
      icon: "👤",
      label: "Full Name",
      value: "Ledalla Sandeep",
      link: null,
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9010815412",
      link: "tel:+919010815412",
    },
    {
      icon: "📧",
      label: "Primary Email",
      value: "lsandeep7980@gmail.com",
      link: "mailto:lsandeep7980@gmail.com",
    },
    {
      icon: "✉️",
      label: "Alternate Email",
      value: "ledallasandeepsandy@gmail.com",
      link: "mailto:ledallasandeepsandy@gmail.com",
    },
    {
      icon: "🏠",
      label: "Native Place",
      value: "Tandur, Mancherial District",
      link: null,
    },
    {
      icon: "📍",
      label: "Current Location",
      value: "Uppal, Hyderabad",
      link: null,
    },
    {
      icon: "💼",
      label: "Naukri Profile",
      value: "Ledalla Sandeep",
      link: "https://www.naukri.com",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "Ledalla Sandeep",
      link: "https://www.linkedin.com/in/ledalla-sandeep",
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
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Feel free to reach out to me through any of the following channels
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-300 mb-1">
                    {contact.label}
                  </h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200 break-words"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-white break-words">
                      {contact.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Let's Connect!
            </h2>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:lsandeep7980@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Email
              </a>
              <a
                href="tel:+919010815412"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Available for freelance opportunities and full-time positions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
