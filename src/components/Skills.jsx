import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import {
  Monitor,
  Code2,
  Server,
  Globe,
  Search,
  Palette,
  Layout,
  Cloud,
  Shield,
  Database,
  CreditCard,
  Radio,
  Network,
  TestTube2,
  Users,
  Kanban,
  Crown,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend System Design",
    icon: Monitor,
    color: "from-cyan-500 to-blue-600",
    skills: [
      "Web Fundamentals",
      "Polling, WebSockets, SSE, WebHooks",
      "XSS, CSRF, CORS, iFrame Protection",
      "Unit, Integration, E2E, TDD",
      "Performance Optimization",
      "IndexedDB, API/HTTP Caching, Service Workers",
      "Accessibility (WCAG)",
      "Logging & Monitoring",
      "PWAs & Offline Support",
      "Scalable UI Architecture",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-indigo-600",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Daisy UI",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-600",
    skills: [
      "Node.js",
      "Express.js",
      "Firebase Auth",
      "MongoDB",
      "Laravel",
      "PHP",
      "RESTful APIs",
      "API Integration",
    ],
  },
  {
    title: "CMS Development",
    icon: Globe,
    color: "from-purple-500 to-pink-600",
    skills: ["WIX", "WordPress", "Webflow", "Shopify"],
  },
  {
    title: "SEO",
    icon: Search,
    color: "from-amber-500 to-orange-600",
    skills: [
      "On-Page Optimization",
      "Link Building",
      "Google Analytics",
      "Google Search Console",
      "Performance Tracking",
    ],
  },
  {
    title: "Design Tools",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    skills: ["Figma", "Photoshop", "Adobe XD"],
  },
  {
    title: "UI/UX & Web Design",
    icon: Layout,
    color: "from-violet-500 to-purple-600",
    skills: [
      "Responsive Design",
      "Prototyping",
      "Wireframing",
      "API Integration",
      "Component-based Architecture",
      "Functional & UI Testing",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Cloud,
    color: "from-sky-500 to-cyan-600",
    skills: [
      "AWS EC2",
      "Nginx",
      "PM2",
      "Docker",
      "CI/CD (GitHub Actions, GitLab CI)",
      "AWS/GCP/Azure",
      "Linux & Bash Scripting",
      "GitHub",
      "AWS Amplify",
      "Cloudflare",
    ],
  },
  {
    title: "Authentication & Security",
    icon: Shield,
    color: "from-red-500 to-rose-600",
    skills: [
      "Firebase Auth",
      "JWT Authentication",
      "OAuth & OIDC",
      "Role-based Access Control",
      "Hashing & Salting",
      "Encryption Standards",
      "Rate Limiting & DDoS Protection",
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    color: "from-orange-500 to-amber-600",
    skills: [
      "MongoDB & Mongoose",
      "Firebase Firestore",
      "AWS SES",
      "SQL vs NoSQL",
      "ACID & Transactions",
      "Indexing & Query Optimization",
      "Normalization vs Denormalization",
      "Sharding & Replication",
      "Connection Pooling",
    ],
  },
  {
    title: "Payment & Real-Time",
    icon: CreditCard,
    color: "from-green-500 to-emerald-600",
    skills: [
      "Razorpay Integration",
      "Webhooks",
      "WebSockets",
      "Socket.io",
    ],
  },
  {
    title: "System Design & Architecture",
    icon: Network,
    color: "from-indigo-500 to-blue-600",
    skills: [
      "Monolith vs Microservices",
      "Load Balancing",
      "Redis & Memcached",
      "CDNs",
      "Kafka & RabbitMQ",
      "Horizontal & Vertical Scaling",
      "Distributed Tracing",
    ],
  },
  {
    title: "Testing & Monitoring",
    icon: TestTube2,
    color: "from-teal-500 to-green-600",
    skills: [
      "Unit & Integration Testing",
      "Load Testing (k6, JMeter)",
      "Structured Logging",
      "Prometheus & Grafana",
      "Monitoring & Alerts",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-fuchsia-500 to-pink-600",
    skills: [
      "Effective Communication",
      "Time Management",
      "Presentation Skills",
      "Collaboration",
      "Cross-functional Coordination",
      "Support Ticket Resolution",
    ],
  },
  {
    title: "Project Management",
    icon: Kanban,
    color: "from-lime-500 to-green-600",
    skills: ["Trello", "Jira", "Slack Integration"],
  },
  {
    title: "Managerial Skills",
    icon: Crown,
    color: "from-yellow-500 to-amber-600",
    skills: [
      "Team Leadership",
      "Strategic Planning",
      "Task Prioritization",
      "Conflict Resolution",
      "Client Relationship Management",
      "Performance Evaluation",
    ],
  },
];

const SkillCard = ({ category, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = category.icon;
  const displaySkills = isExpanded ? category.skills : category.skills.slice(0, 4);
  const hasMore = category.skills.length > 4;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.75)}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative bg-[#0f0f23] border border-gray-800/50 rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:border-gray-700/50"
    >
      {/* Accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-white font-semibold text-sm leading-tight">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {displaySkills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:text-gray-200 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
        {hasMore && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className={`px-2.5 py-1 text-[11px] font-medium rounded-full bg-gradient-to-r ${category.color} text-white cursor-pointer hover:opacity-90 transition-opacity`}
          >
            +{category.skills.length - 4} more
          </button>
        )}
        {hasMore && isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="px-2.5 py-1 text-[11px] font-medium text-gray-500 bg-white/5 border border-white/5 rounded-full cursor-pointer hover:text-gray-300 transition-colors"
          >
            Show less
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={sectionStyles.section}
    >
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={sectionStyles.sectionSubText}>What I bring to the table</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Skills & Expertise<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base">
          A comprehensive toolkit spanning frontend architecture, backend systems,
          cloud infrastructure, and team leadership.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Skills, "skills");
