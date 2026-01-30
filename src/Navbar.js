import React from "react";
import { NavLink } from "react-router-dom";
import { Search, ZoomIn, ZoomOut, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl md:text-2xl text-white font-bold">
          Sandeep Folio
        </NavLink>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition ${
                isActive
                  ? "text-blue-400 bg-white/10"
                  : "text-white hover:text-blue-400 hover:bg-white/10"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition ${
                isActive
                  ? "text-blue-400 bg-white/10"
                  : "text-white hover:text-blue-400 hover:bg-white/10"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/Experience"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition ${
                isActive
                  ? "text-blue-400 bg-white/10"
                  : "text-white hover:text-blue-400 hover:bg-white/10"
              }`
            }
          >
            Experience
          </NavLink>

          <NavLink
            to="/projects"
            className="px-3 py-1.5 rounded-md text-white hover:text-blue-400 hover:bg-white/10 transition"
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition ${
                isActive
                  ? "text-blue-400 bg-white/10"
                  : "text-white hover:text-blue-400 hover:bg-white/10"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Control Card */}
          <div className="ml-2 flex items-center gap-3 bg-slate-800/80 border border-white/10 rounded-xl px-3 py-1.5 text-white">
            <Search size={14} />
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
