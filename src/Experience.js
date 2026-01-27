import React from "react";
import Particles from "./Particles";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      role: "Analyst",
      company: "Teleperformance",
      period: "Feb 2025 - Dec 2025",
      location: "India",
      color: "from-blue-500 to-blue-600",
      responsibilities: [
        "Reviewed and moderated YouTube video content for product relevance, ensuring 100% compliance with client guidelines and quality standards",
        "Analyzed and tagged products in videos using specific evaluation criteria to identify accurate or misleading content associations",
        "Collaborated with quality analysts and project leads to refine moderation logic and improve tagging framework accuracy",
        "Handled high-volume content review while maintaining quality metrics and meeting performance targets",
      ],
      skills: [
        "Content Moderation",
        "Quality Analysis",
        "Team Collaboration",
        "Data Tagging",
      ],
    },
    {
      id: 2,
      role: "Associate",
      company: "Wipro Ltd",
      period: "Oct 2023 - Nov 2024",
      location: "India",
      color: "from-purple-500 to-purple-600",
      responsibilities: [
        "Managed escalated fraud-related customer issues for Google Ads platform, achieving 95%+ customer satisfaction ratings",
        "Reviewed and enforced ad campaign compliance, identifying and suspending non-compliant or fraudulent content",
        "Verified advertiser documentation and data integrity, escalating fraudulent submissions through proper channels",
        "Resolved 50+ tickets daily within SLA using advanced risk mitigation tools while maintaining 98% accuracy rate",
        "Delivered support to global customers across multiple regions, adapting communication style to cultural expectations",
      ],
      skills: [
        "Customer Support",
        "Fraud Detection",
        "Google Ads",
        "Compliance",
        "Risk Mitigation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative pt-32 overflow-hidden">
      {/* Particles Background (same as About section) */}
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
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
          >
            {/* Company + Role */}
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-2">🏢</span>
              {experience.company} – {experience.role}
            </h3>

            {/* Responsibilities */}
            <ul className="space-y-3 mb-6">
              {experience.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 text-xl">✓</span>
                  <span className="text-gray-200 leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="border-t border-white/20 pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 bg-gradient-to-r ${experience.color} text-white rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
