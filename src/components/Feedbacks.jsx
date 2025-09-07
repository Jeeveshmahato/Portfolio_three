import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { testimonials } from "../Constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    whileHover={{ y: -10 }}
    className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-3xl xs:w-[350px] w-full shadow-xl border border-gray-800 overflow-hidden"
  >
    {/* Glow effect */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
    
    {/* Quote icon with animation */}
    <motion.p 
      className="text-blue-400 font-black text-5xl absolute top-4 left-6 opacity-20"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 10, repeat: Infinity }}
    >
      "
    </motion.p>

    <div className="mt-6 relative z-10">
      <p className="text-gray-300 tracking-wider text-lg leading-relaxed">
        {testimonial}
      </p>

      <div className="mt-8 flex justify-between items-center gap-4">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              @{name}
            </span>
          </p>
          <p className="mt-1 text-gray-400 text-sm">
            {designation} <span className="text-gray-500">at</span> {company}
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/30"
        >
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative max-w-7xl mx-auto my-24 rounded-[20px] overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] to-[#1a1a2e] -z-10"></div>
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className={`${styles.padding} pt-16 pb-24`}>
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className={`${styles.sectionSubText} text-blue-400`}>
            What others say
          </p>
          <h2 className={`${styles.sectionHeadText} text-4xl sm:text-5xl font-bold text-white mb-12`}>
            Testimonials.
          </h2>
        </motion.div>

        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="flex  lg:flex-row flex-col justify-between gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");