import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../Constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0f0f23",
        color: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      contentArrowStyle={{
        borderRight: "10px solid #0f0f23",
      }}
      date={experience.date}
      dateClassName="text-gray-400"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(255,255,255,0.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      visible={true}
    >
      <div>
        <h3 className="text-white text-lg sm:text-xl font-bold">
          {experience.title}
        </h3>
        <p className="text-cyan-400 text-sm font-medium mt-0.5">
          {experience.company_name}
        </p>

        <ul className="mt-4 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-3 border-l border-gray-800 hover:border-cyan-500/40 transition-colors duration-200"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
          What I have done so far
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Work Experience<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
        <VerticalTimeline
          lineColor="rgba(99, 102, 241, 0.15)"
          layout="1-column-left"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Experience, "work");
