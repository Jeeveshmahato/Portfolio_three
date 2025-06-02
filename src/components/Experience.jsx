import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../Constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        color: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      contentArrowStyle={{ 
        borderRight: "10px solid rgba(30, 41, 59, 0.8)",
        filter: "drop-shadow(0 0 5px rgba(99, 102, 241, 0.5))"
      }}
      date={experience.date}
      dateClassName="text-gray-300 sm:text-gray-400"
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 20px rgba(99, 102, 241, 0.5)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          />
        </div>
      }
      visible={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3 className="text-white text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {experience.title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base font-semibold mt-1">
          {experience.company_name}
        </p>

        <ul className="mt-5 space-y-3">
          {experience.points.map((point, i) => (
            <motion.li
              key={`experience-point-${i}`}
              className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-3 border-l-2 border-blue-500/30"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
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
        <p className={`${styles.sectionSubText} text-cyan-400`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-4xl sm:text-5xl font-bold text-white mb-12`}>
          Work Experience.
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
        <VerticalTimeline
          lineColor="rgba(99, 102, 241, 0.2)"
          layout="1-column-left"
          className="vertical-timeline-custom-line"
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