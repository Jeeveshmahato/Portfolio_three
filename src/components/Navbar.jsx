import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { menu, close } from "../assets";
import img1 from "../assets/logo.png";
import { navLinks } from "../Constants";

const NewNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full max-w-[1400px] flex flex-col items-center py-4 px-6 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-[#050816]/40 backdrop-blur-md"
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={img1} alt="logo" className="w-9 h-9 object-contain" />
          <p className="flex text-[18px] text-white font-bold cursor-pointer">
            Jeevesh &nbsp;
            <span className="sm:block hidden">| Software Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden lg:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-gray-400"
              } hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a
            href="https://github.com/Jeeveshmahato"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeeveshmahato/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1jeGPP9ifB_9VEUpDfNfio7nU2DMgRQKf/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200"
          >
            Resume
          </a>
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            initial={false}
            animate={toggle ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
            className={`${
              !toggle ? "pointer-events-none" : ""
            } p-6 absolute top-16 right-4 min-w-[200px] z-10 rounded-2xl bg-[#0a0a20]/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-400"
                  } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <a
                href="https://github.com/Jeeveshmahato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-[16px] font-medium cursor-pointer transition-colors"
                onClick={() => setToggle(false)}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jeeveshmahato/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-[16px] font-medium cursor-pointer transition-colors"
                onClick={() => setToggle(false)}
              >
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/1jeGPP9ifB_9VEUpDfNfio7nU2DMgRQKf/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-[16px] font-medium cursor-pointer transition-colors"
                onClick={() => setToggle(false)}
              >
                Resume
              </a>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800/30">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 scroll-progress"
          style={{ scaleX: scrollProgress }}
        />
      </div>
    </nav>
  );
};

export default NewNavbar;
