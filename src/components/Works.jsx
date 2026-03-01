import React, { useRef } from "react";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { github, deploy } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../Constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const isSafeUrl = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative bg-[#0f0f23] border border-gray-800/50 rounded-2xl p-5 h-full overflow-hidden group hover:border-gray-700/50 transition-all duration-300 cursor-default"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.04), transparent 40%), #0f0f23`,
        }}
      >
        {/* Featured badge for first project */}
        {index === 0 && (
          <div className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/20">
            Featured
          </div>
        )}

        {/* Image */}
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Action buttons */}
          <div className="absolute inset-0 flex justify-end items-start gap-2 m-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => isSafeUrl(source_code_link) && window.open(source_code_link, "_blank", "noopener,noreferrer")}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all"
              aria-label="View source code"
            >
              <img src={github} alt="" className="w-4 h-4" />
            </button>
            {deploy_link && (
              <button
                onClick={() => isSafeUrl(deploy_link) && window.open(deploy_link, "_blank", "noopener,noreferrer")}
                className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all"
                aria-label="View live demo"
              >
                <img src={deploy} alt="" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
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
      <motion.div variants={textVariant()} className="text-center mb-6">
        <motion.p className={sectionStyles.sectionSubText}>My work</motion.p>
        <motion.h2 className="text-4xl sm:text-5xl font-bold text-white">
          Projects<span className="text-cyan-400">.</span>
        </motion.h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-500 text-center max-w-2xl mx-auto text-sm leading-relaxed mb-12"
      >
        My projects showcase real-world solutions. Each reflects my problem-solving
        skills and technical versatility.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(Works, "projects");
