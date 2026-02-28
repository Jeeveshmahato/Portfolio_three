import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../Constants";
import { textVariant, staggerContainer } from "../utils/motion";

const TechPill = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-200 group">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        {typeof Icon === "string" ? (
          <img src={Icon} alt={tech.name} className="w-5 h-5 object-contain" loading="lazy" />
        ) : (
          <Icon size={18} className="text-white" />
        )}
      </div>
      <span className="text-sm text-gray-300 font-medium whitespace-nowrap group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
};

const Tech = () => {
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

  return (
    <section className="relative max-w-7xl mx-auto py-12 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer()}
        className="text-center mb-12 px-4"
      >
        <motion.p
          variants={textVariant()}
          className="text-sm uppercase tracking-wider text-cyan-400 mb-2"
        >
          My skills
        </motion.p>
        <motion.h2
          variants={textVariant()}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          Technologies<span className="text-cyan-400">.</span>
        </motion.h2>
      </motion.div>

      {/* Infinite Marquee - Row 1 (left to right) */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...firstRow, ...firstRow].map((tech, i) => (
            <TechPill key={`row1-${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Infinite Marquee - Row 2 (right to left) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...secondRow, ...secondRow].map((tech, i) => (
            <TechPill key={`row2-${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
