import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../Constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full" options={{ max: 15, scale: 1.05, speed: 500 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full rounded-[20px] shadow-card"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div
        className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[20px] py-8 px-6 min-h-[300px] flex justify-evenly items-center flex-col overflow-hidden"
      >
        {/* Animated background element */}
        <motion.div 
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0f3460] rounded-full filter blur-3xl opacity-70"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Icon with floating animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src={icon}
            alt={title}
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        <h3 className="text-white text-[22px] font-bold text-center z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          {title}
        </h3>
        
        {/* Interactive border effect */}
        <div className="absolute inset-0 rounded-[20px] p-[1px] bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-cyan-300`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-4xl sm:text-5xl font-bold text-white mb-12`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[18px] max-w-3xl leading-[32px]"
      >
        I am a proficient software developer with extensive experience in
        JavaScript and specialized expertise in frameworks like React.js,
        Next.js, and Three.js. As a quick learner, I excel in collaborating
        closely with clients to create efficient, scalable, and user-friendly
        solutions that address real-world challenges. Let's work together to
        bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");