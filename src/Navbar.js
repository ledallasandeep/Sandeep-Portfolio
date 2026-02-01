import React from "react";
import { ZoomIn, ZoomOut, Sun } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-bold text-white"
        >
          Sandeep Folio
        </button>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {["home", "about", "experience", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-3 py-1.5 rounded-md text-white hover:text-blue-400 hover:bg-white/10 transition capitalize"
              >
                {item}
              </button>
            ),
          )}

          {/* Control Card */}
          <div className="ml-2 flex items-center gap-3 bg-slate-800/80 border border-white/10 rounded-xl px-3 py-1.5">
            <ZoomOut size={14} />
            <span className="text-xs">100%</span>
            <ZoomIn size={14} />
            <Sun size={14} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
