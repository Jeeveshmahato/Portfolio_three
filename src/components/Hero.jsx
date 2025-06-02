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
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500 filter blur-[100px] opacity-10"
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
                  Jeevesh
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className={`${sectionStyles.sectionContent} text-gray-300 mt-6 max-w-2xl`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I specialize in creating immersive <span className="text-cyan-400">3D visuals</span>, 
              elegant <span className="text-cyan-400">user interfaces</span>, and 
              powerful <span className="text-cyan-400">web applications</span>.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
              }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#about"
                className={sectionStyles.buttonPrimary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="#contact"
                className={`${sectionStyles.buttonPrimary} bg-transparent border border-cyan-400`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Canvas */}
          <motion.div 
            className="flex-1 h-[50vh] lg:h-full order-1 lg:order-2"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ComputersCanvas />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
            className="w-8 h-14 rounded-full border-2 border-cyan-400 flex justify-center items-start p-1"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-cyan-400"
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;