import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../Constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Tech = () => {
  return (
    <section className="relative max-w-7xl mx-auto py-12 px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer()}
        className="text-center mb-12"
      >
        <motion.p
          variants={textVariant()}
          className="text-sm uppercase tracking-wider text-cyan-400 mb-2"
        >
          My skills
        </motion.p>
        <motion.h2
          variants={textVariant()}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          Technologies
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon; // Could be an imported image or a Lucide component
            return (
              <motion.div
                key={tech.name}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm mb-2">
                  {typeof Icon === "string" ? (
                    <img
                      src={Icon}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <Icon size={32} className="text-white" />
                  )}
                </div>
                <p className="text-sm text-center text-white font-medium">
                  {tech.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
