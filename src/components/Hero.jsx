import React from 'react';
import { motion } from 'framer-motion';
import { sectionStyles } from './Styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a20] via-[#1a1a40] to-[#2d0a4a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Animated Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#915eff] filter blur-[100px] opacity-20"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5] filter blur-[120px] opacity-15"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 3,
          }}
        />
      </div>

      {/* Content Container */}
      <div className={`${sectionStyles.section} h-full flex flex-col justify-center pt-20 pb-32`}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full">
          {/* Left Column - Content */}
          <motion.div 
            className="flex-1 order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div variants={sectionStyles.textVariant}>
              <p className={sectionStyles.sectionSubText}>Hello, I'm</p>
              <h1 className={`${sectionStyles.sectionHeadText} mt-2`}>
                <motion.span 
                  className="text-4xl sm:text-5xl font-bold text-white mb-12"
                  animate={{ 
                    textShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Jeevesh Mahato
                </motion.span>
              </h1>
            </motion.div>

            <motion.h2
              className="text-xl sm:text-2xl text-gray-300 mt-4 font-medium"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Full Stack Developer | UI/UX Specialist
            </motion.h2>

            <motion.p
              className={`${sectionStyles.sectionContent} text-gray-300 mt-6 max-w-2xl`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I create immersive <span className={sectionStyles.sectionSubText}>3D visuals</span>, 
              elegant <span className={sectionStyles.sectionSubText}>user interfaces</span>, and 
              powerful <span className={sectionStyles.sectionSubText}>web applications</span>. 
              With expertise in React, Next.js, and Three.js, I build scalable solutions 
              that solve real-world problems.
            </motion.p>

            {/* Key Skills Highlights */}
            <motion.div
              className="mt-6 grid grid-cols-2 gap-3 max-w-md"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
              }}
              transition={{ delay: 0.3 }}
            >
              {['React.js', 'Next.js', 'Three.js', 'Node.js', 'MongoDB', 'AWS'].map((skill, i) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
              }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className={`${sectionStyles.buttonPrimary} flex items-center gap-2`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(145, 94, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#contact"
                className={`${sectionStyles.buttonPrimary} bg-transparent border border-[#915eff] hover:bg-[#915eff]/10 flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hire Me</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Canvas */}
          <motion.div 
            className="flex-1 h-[50vh] lg:h-full order-1 lg:order-2 relative"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ComputersCanvas />
            <div className="absolute bottom-0 left-0 right-0 text-center text-gray-400 text-xs mt-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
               
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
        transition={{ delay: 0.8 }}
      >
        <a href="#about">
          <motion.div
            className="w-10 h-16 rounded-full border-2 border-[#915eff] flex justify-center items-start p-1 group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(145, 94, 255, 0.3)"
            }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: [0.65, 0, 0.35, 1]
              }}
              className="w-2 h-2 rounded-full bg-[#915eff] group-hover:bg-cyan-400 transition-colors"
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;