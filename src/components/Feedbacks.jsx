import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant, staggerContainer } from "../utils/motion";
import { testimonials } from "../Constants";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <div className="flex-shrink-0 w-[320px] sm:w-[380px] mx-3 bg-[#0f0f23] border border-gray-800/50 rounded-2xl p-6 hover:border-gray-700/50 transition-all duration-300 group">
    {/* Quote */}
    <div className="text-cyan-400/20 text-5xl font-serif leading-none mb-2">"</div>

    <p className="text-gray-400 text-sm leading-relaxed min-h-[80px]">
      {testimonial}
    </p>

    <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-800/50">
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border border-gray-700"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">
          {name}
        </p>
        <p className="text-gray-500 text-xs truncate">
          {designation}, {company}
        </p>
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative max-w-7xl mx-auto my-16 overflow-hidden"
    >
      <motion.div variants={textVariant()} className="text-center mb-12 px-4">
        <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
          What others say
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Testimonials<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicated.map((t, index) => (
            <FeedbackCard key={`feedback-${index}`} {...t} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
