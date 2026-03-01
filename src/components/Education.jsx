import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative max-w-7xl mx-auto px-6 py-12"
    >
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
          Academic Background
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Education<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="max-w-2xl mx-auto"
      >
        <div className="relative bg-[#0f0f23] border border-gray-800/50 rounded-2xl p-6 sm:p-8 overflow-hidden group hover:border-gray-700/50 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Haldia Institute of Technology
              </h3>
              <p className="text-cyan-400 text-sm font-medium mt-1">
                Bachelor of Technology
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>August 2019 - July 2023</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>
                    CGPA:{" "}
                    <span className="text-white font-semibold">8.6</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Education, "education");
