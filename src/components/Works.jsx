import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { github, deploy } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../Constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="w-full"
    >
      <Tilt
        options={{
          max: 10,
          scale: 1.02,
          speed: 1000,
          glare: true,
          "max-glare": 0.25,
          transition: true,
        }}
        className={`${sectionStyles.card} p-6 h-full overflow-hidden group`}
      >
        {/* Image with smooth overlay */}
        <motion.div 
          className="relative w-full h-[230px] rounded-xl overflow-hidden"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Floating action buttons: always visible on mobile/tablet, on hover for desktop */}
          {/*
            Action icons are positioned absolutely in the project image area. On desktop, they fade in on hover (using group-hover:opacity-100). On mobile/tablet, they are always visible (opacity-100, no hover needed).
            To change their position or behavior, edit the parent 'absolute' div and the responsive classes below.
            The onClick handlers open the respective links in a new tab.
          */}
          <div
            className="absolute inset-0 flex justify-end items-start gap-3 m-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-xl backdrop-blur-sm hover:scale-110 active:scale-95 transition-transform"
              title="View Source Code"
            >
              <img src={github} alt="source code" className="w-5 h-5" />
            </div>
            {deploy_link && (
              <div
                onClick={() => window.open(deploy_link, "_blank")}
                className="bg-gradient-to-br from-green-500 to-emerald-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-xl backdrop-blur-sm hover:scale-110 active:scale-95 transition-transform"
                title="View Live Demo"
              >
                <img src={deploy} alt="Deploy Link" className="w-5 h-5" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Content with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5"
        >
          <h3 className="text-white font-bold text-xl tracking-tight">{name}</h3>
          <motion.p 
            className="mt-2 text-gray-300 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Tags with wave animation */}
        <motion.div 
          className="mt-4 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {tags.map((tag, i) => (
            <motion.span
              key={`${name}-${tag.name}`}
              whileHover={{ 
                y: [0, -3, 0],
                transition: { duration: 0.6 }
              }}
              className={`text-xs px-3 py-1 rounded-full ${tag.color} bg-opacity-20 backdrop-blur-sm`}
              whileInView={{
                opacity: [0, 1],
                x: [i % 2 === 0 ? -5 : 5, 0],
              }}
              transition={{ 
                delay: 0.4 + i * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              #{tag.name}
            </motion.span>
          ))}
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={sectionStyles.section}
    >
      {/* Header with floating animation */}
      <motion.div 
        variants={textVariant()}
        whileHover={{ y: -3 }}
        className="text-center mb-16"
      >
        <motion.p 
          className={sectionStyles.sectionSubText}
          whileHover={{ scale: 1.05 }}
        >
          My work
        </motion.p>
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
          animate={{
            textShadow: ["0 0 10px rgba(34,211,238,0)", "0 0 10px rgba(34,211,238,0.3)", "0 0 10px rgba(34,211,238,0)"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          Projects
        </motion.h2>
      </motion.div>

      {/* Description with typewriter effect */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${sectionStyles.sectionContent} text-gray-300 text-center max-w-3xl mx-auto leading-relaxed`}
      >
        {`My projects showcase real-world solutions. Each reflects my problem-solving skills and technical versatility.`.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.03 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      {/* Projects grid with staggered entrance */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="grid grid-cols-1 md:grid-cols-2 mt- lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Works, "projects");