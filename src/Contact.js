import React from "react";
import Particles from "./Particles";

const Contact = () => {
  const contactInfo = [
    {
      icon: "👤",
      label: "Full Name",
      value: "Ledalla Sandeep",
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
    },
    {
      icon: "📍",
      label: "Current Location",
      value: "Uppal, Hyderabad",
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
      value: "linkedin.com/in/ledalla-sandeep",
      link: "https://www.linkedin.com/in/ledalla-sandeep",
    },
  ];

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
      <div className="relative z-10 max-w-4xl mx-auto px-5 space-y-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>

        {/* Single Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg space-y-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="text-3xl">{item.icon}</div>

              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>

                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-white hover:text-blue-400 transition break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-white">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Available for freelance opportunities and full-time positions
        </p>
      </div>
    </div>
  );
};

export default Contact;
