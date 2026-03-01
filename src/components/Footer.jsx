import React from "react";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050816] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">
              Jeevesh{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Mahato
              </span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Full Stack Developer &amp; Frontend System Architect
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jeeveshmahato"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeeveshmahato/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:jeeveshmaaht@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+916203534938"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Jeevesh Mahato. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 text-xs hover:text-cyan-400 transition-colors duration-200 group"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
