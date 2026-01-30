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
    <div className="min-h-screen bg-slate-900 text-white relative  pt-32 overflow-hidden">
      {/* Particles Background (ONLY background) */}
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
      <div className="relative z-10 max-w-6xl mx-auto px-5 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{contact.icon}</div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-400 mb-1">{contact.label}</p>

                  {contact.link ? (
                    <a
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-white hover:text-blue-400 transition-colors break-words"
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

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Available for freelance opportunities and full-time positions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
