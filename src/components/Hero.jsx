import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import myImg from "../assets/Myimg.jpg";

const roles = [
  "Full Stack Developer",
  "UI/UX Specialist",
  "React Engineer",
  "Problem Solver",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.section
      className="relative w-full mt-[40px] overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Dot Grid + Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a20] via-[#1a1a40] to-[#2d0a4a]" />
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Subtle animated blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#915eff] filter blur-[100px] opacity-15"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5] filter blur-[120px] opacity-10"
          animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", delay: 3 }}
        />
      </div>

      {/* Content Container */}
      <div className="w-full px-6 lg:px-28 rounded-lg flex flex-col justify-center pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[120px] gap-10 w-full">
          {/* Left Column - Content */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Available for hire</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Jeevesh
              </span>
            </motion.h1>

            {/* Typing Effect Role */}
            <motion.div
              className="mt-4 flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl sm:text-2xl text-gray-300 font-medium">
                {displayText}
              </span>
              <span className="text-xl sm:text-2xl text-cyan-400 animate-blink">|</span>
            </motion.div>

            <motion.p
              className="text-gray-400 mt-6 max-w-xl text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I craft immersive 3D visuals, elegant user interfaces, and powerful
              web applications. Building scalable solutions that solve real-world
              problems.
            </motion.p>

            {/* Glassmorphic Skill Badges */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {["React.js", "Next.js", "Three.js", "Node.js", "MongoDB", "AWS"].map(
                (skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="#projects"
                className={`${sectionStyles.buttonPrimary} flex items-center gap-2`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-lg text-white font-bold border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with gradient ring */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-2 border-[#0a0a20]"
                src={myImg}
                alt="Jeevesh Mahato"
                loading="eager"
              />
            </div>
            {/* Floating accent dot */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-cyan-400"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#about">
          <motion.div
            className="w-8 h-14 rounded-full border-2 border-gray-600 flex justify-center items-start p-1.5 hover:border-cyan-400/50 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
