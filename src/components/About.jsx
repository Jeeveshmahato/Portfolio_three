import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { services } from "../Constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const accentColors = [
  { from: "from-cyan-500", to: "to-blue-600", text: "text-cyan-400", shadow: "shadow-cyan-500/10" },
  { from: "from-purple-500", to: "to-pink-600", text: "text-purple-400", shadow: "shadow-purple-500/10" },
  { from: "from-amber-500", to: "to-orange-600", text: "text-amber-400", shadow: "shadow-amber-500/10" },
  { from: "from-emerald-500", to: "to-teal-600", text: "text-emerald-400", shadow: "shadow-emerald-500/10" },
];

const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      {count}{suffix}
    </span>
  );
};

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
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Professional Overview<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left - Bio */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1"
        >
          <p className="text-gray-300 text-base leading-relaxed">
            I'm{" "}
            <span className="text-cyan-400 font-medium">Jeevesh Mahato</span>,
            a Full Stack Developer specializing in{" "}
            <span className="text-cyan-400 font-medium">React.js, Next.js, Node.js, and MongoDB</span>,
            with a strong focus on system design, security, testing, and performance
            optimization. I lead teams, manage products, and build scalable
            architectures from frontend to backend.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mt-4">
            With experience across{" "}
            <span className="text-cyan-400 font-medium">frontend system design, DevOps, and cloud infrastructure</span>,
            I create seamless user experiences through clean architecture, efficient
            communication protocols (WebSockets, SSE), and modern practices like
            PWAs, caching strategies, and real-time systems.
          </p>

          {/* Animated achievement counters */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: 3, suffix: "+", label: "Years Experience" },
              { value: 40, suffix: "%", label: "Faster Load Times" },
              { value: 135, suffix: "%", label: "UX Review Growth" },
              { value: 6, suffix: "+", label: "Team Members Led" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeIn("up", "spring", i * 0.1, 0.75)}
                className="text-center"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Bento Grid Services */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
          {services.map((service, index) => {
            const color = accentColors[index % accentColors.length];
            const isLarge = index < 2;

            return (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative group bg-[#0f0f23] border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700/50 ${
                  isLarge ? "sm:row-span-1 p-6" : "p-5"
                }`}
              >
                {/* Accent line top */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color.from} ${color.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${color.from} ${color.to} flex items-center justify-center mb-4 ${color.shadow} shadow-lg`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className={`text-white font-semibold text-base mb-2`}>
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");
