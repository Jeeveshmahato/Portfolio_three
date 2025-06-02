import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { services } from "../Constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className="w-full"
    options={{ 
      max: 15, 
      scale: 1.05, 
      speed: 500,
      glare: true,
      "max-glare": 0.2
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="w-full rounded-xl shadow-lg"
      whileHover={{ 
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
    >
      <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl py-8 px-6 min-h-[280px] flex flex-col justify-center items-center overflow-hidden border border-gray-800 group">
        {/* Animated background elements */}
        <motion.div 
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-20"
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
        <motion.div 
          className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Icon with floating animation */}
        <motion.div
          className="mb-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-lg"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain"
          />
        </motion.div>

        <h3 className="text-white text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
          {title}
        </h3>
        
        {/* Interactive border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-300" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={sectionStyles.section}
    >
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={sectionStyles.sectionSubText}>Introduction</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Professional Overview</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1"
        >
          <motion.p
            className={`${sectionStyles.sectionContent} text-gray-300`}
          >
            I'm <span className={sectionStyles.sectionSubText}>Jeevesh Mahato</span>, a Full Stack Developer with expertise in both frontend and backend technologies. I specialize in crafting seamless, high-performance web solutions that enhance user experience and drive functionality.
          </motion.p>
          
          <motion.p
            className={`${sectionStyles.sectionContent} text-gray-300 mt-6`}
          >
            With extensive experience in <span className={sectionStyles.sectionSubText}>React.js, Next.js, and Three.js</span>, I build scalable applications that solve real-world problems. My technical skills span across modern JavaScript frameworks, UI/UX design, and cloud platforms like AWS.
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
            {['React.js', 'Next.js', 'Node.js', 'Three.js', 'MongoDB', 'AWS'].map((tech, i) => (
              <motion.div
                key={tech}
                className="flex items-center gap-2"
                variants={fadeIn("up", "spring", i * 0.1, 0.75)}
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      </div>

      {/* Experience Highlights */}
      <motion.div 
        className="mt-16"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        <h3 className="text-xl font-bold text-white mb-6">Key Achievements</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Led team of 6 developers, increasing profits by 20%",
            "Boosted customer satisfaction by 50% through optimized workflows",
            "Reduced project delivery timelines by 35%",
            "Increased product engagement by 25% in dynamic markets"
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
              <div className="text-cyan-400 text-lg mb-2">0{i+1}</div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");