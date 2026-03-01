import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  nodejs,
  mongodb,
  getaitool,
  cognizant,
  nextjs,
  kunal,
  rajesh,
  adobe,
  swiggyClone,
  Netflix,
  youtubeClone,
  hybrid_utopia,
  maitri,
  position2,
  wordpress,
} from "../assets";
import { Code2, Workflow, Cpu, Palette } from "lucide-react";
import {
  Server,
  Box,
  Layers,
  Cloud,
  Code,
} from "lucide-react";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full Stack Web Development",
    icon: Code2,
    description:
      "Building complete web applications from React/Next.js frontends to Node.js/MongoDB backends with JWT auth, real-time features, and payment integration.",
  },
  {
    title: "Project & Team Leadership",
    icon: Workflow,
    description:
      "Leading teams of 6+ developers, managing product roadmaps, coordinating delivery milestones, and driving 35% faster project delivery timelines.",
  },
  {
    title: "Backend & API Architecture",
    icon: Cpu,
    description:
      "Designing RESTful APIs, GraphQL endpoints, WebSocket systems, and cloud deployments on AWS with Nginx, Docker, and CI/CD pipelines.",
  },
  {
    title: "Frontend System Design",
    icon: Palette,
    description:
      "Architecting scalable UI systems with performance optimization, caching strategies, PWAs, accessibility (WCAG), and security best practices.",
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: Code },
  { name: "React JS", icon: reactjs },
  { name: "NextJS", icon: nextjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Express.js", icon: Server },
  { name: "MongoDB", icon: mongodb },
  { name: "GraphQL", icon: Layers },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Adobe", icon: adobe },
  { name: "WordPress", icon: wordpress },
];

const experiences = [
  {
    title: "Front-end Engineer",
    company_name: "Protecte Technologies",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%230ea5e9' width='100' height='100' rx='20'/%3E%3Ctext x='50' y='62' text-anchor='middle' fill='white' font-size='40' font-family='Arial,sans-serif' font-weight='bold'%3EPT%3C/text%3E%3C/svg%3E",
    iconBg: "#0c1a2e",
    date: "November 2025 - Present",
    points: [
      "Engineered high-performance, responsive user interfaces using React.js, Next.js, Tailwind CSS, and Redux Toolkit, improving load times and user engagement by 40%.",
      "Designed and developed the MailArmor Admin Portal frontend from scratch, ensuring clean UI/UX and long-term maintainability.",
      "Built and managed the MailArmor Client Portal, delivering updates, improvements, and platform stability.",
      "Integrated RESTful APIs and GraphQL endpoints with dynamic frontend views, enhancing data flow and real-time interactivity across dashboards.",
      "Led UI/UX audits and implemented accessibility best practices (WCAG), increasing usability scores and compliance across client-facing platforms.",
      "Managed AWS servers and AWS Amplify with Git integration, overseeing deployments, monitoring, and CI/CD pipelines.",
      "Collaborated with cross-functional teams to translate complex business requirements into intuitive UI components, reducing revision cycles by 25%.",
      "Performed functional and UI testing, identifying bugs early and ensuring quality before deployment.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Ynaps",
    icon: "https://ynaps.com/assets/avator/YNAPS.png",
    iconBg: "#383E56",
    date: "December 2024 - November 2025",
    points: [
      "Directed cross-functional teams to translate complex business requirements into intuitive UI solutions, reducing revision cycles by 25%.",
      "Oversaw product roadmaps and coordinated delivery milestones, ensuring alignment with business goals and client expectations.",
      "Guided developers through technical roadblocks, offering insights and alternative approaches, accelerating project delivery timelines by 35%.",
      "Enhanced customer satisfaction by implementing user-centric solutions, resulting in a 50% improvement in overall client feedback scores.",
      "Defined product strategies and conducted competitor analysis, identifying opportunities that increased product engagement by 25%.",
      "Facilitated collaboration between teams to streamline development processes, improving cross-functional coordination and reducing project bottlenecks.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Hybrid Utopia",
    icon: hybrid_utopia,
    iconBg: "#383E56",
    date: "July 2023 - December 2024",
    points: [
      "Optimized project workflows and strategic execution, leading to a 20% increase in company profits and a 50% boost in customer satisfaction.",
      "Delivered accessible, responsive interfaces that led to a 135% increase in 5-star UX/UI reviews.",
      "Eliminated workflow bottlenecks using the Complexity Score tool, improving team efficiency by 72%.",
      "Engineered and customized Shopify storefronts and backend logic, enhancing user experience and boosting conversion rates by 40%.",
      "Integrated third-party apps and APIs into Shopify ecosystems, automating workflows and improving operational efficiency.",
      "Conducted thorough code reviews and testing cycles, enhancing feature stability and increasing donor contributions by 12%.",
    ],
  },
  {
    title: "Mainframe Developer Intern",
    company_name: "Cognizant Technology Solutions",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "February 2023 - July 2023",
    points: [
      "Developed and maintained mainframe applications using JCL, VSAM, COBOL, and DB2, contributing to project reliability through meticulous debugging and testing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a database as beautiful as our product, but Jeevesh proved me wrong.",
    name: "Ravi Kumar S",
    designation: "CEO",
    company: "Cognizant Technology Solutions",
    image:
      "https://cognizant.scene7.com/is/image/cognizant/ravi-kumar-s-cognizant",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jeevesh does.",
    name: "Rajesh Kumar",
    designation: "CEO",
    company: "Ricoz",
    image: rajesh,
  },
  {
    testimonial:
      "After Jeevesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kunal Vashisht",
    designation: "CTO",
    company: "Ricoz",
    image: kunal,
  },
];

const projects = [
  {
    name: "Maitri App",
    description:
      "Maitri is a matchmaking and collaboration platform designed for diverse skill-based communities—from artists and writers to developers and designers. Built with Vite, React, and Tailwind CSS, it enables users to connect meaningfully through profile browsing, connection requests, and real-time chat. With secure authentication, role-based access, and Razorpay-powered premium subscriptions, Maitri fosters intentional networking and project discovery across disciplines.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "Redux Toolkit", color: "orange-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "purple-text-gradient" },
      { name: "JWT Auth", color: "red-text-gradient" },
      { name: "Razorpay", color: "cyan-text-gradient" },
      { name: "AWS + Nginx", color: "lime-text-gradient" },
      { name: "Cloudflare", color: "indigo-text-gradient" },
    ],
    image: maitri,
    source_code_link: "https://github.com/Jeeveshmahato/Maitri_App",
    deploy_link: "https://maitri-app-frontend.onrender.com/",
  },
  {
    name: "Get Me AI Tool",
    description:
      "Get Me AI Tool is a full-stack directory platform for discovering and sharing AI-powered tools. Built with Vite, React, Tailwind CSS, and Redux Toolkit, it enables users to browse, submit, and manage AI tools with rich metadata and image previews. The backend, powered by Node.js, Express, and MongoDB, features secure JWT authentication, RESTful APIs, and CORS-protected communication.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Redux Toolkit", color: "orange-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "purple-text-gradient" },
      { name: "JWT Auth", color: "red-text-gradient" },
      { name: "Render", color: "cyan-text-gradient" },
      { name: "Vercel", color: "lime-text-gradient" },
      { name: "REST API", color: "indigo-text-gradient" },
    ],
    image: getaitool,
    source_code_link: "https://github.com/Jeeveshmahato/AI-website",
    deploy_link: "https://ai-website-frontend.onrender.com/",
  },
  {
    name: "Youtube Clone",
    description:
      "I used YouTube APIs to display real-time data, optimize search, implement live chat functionality, and handle nth comments. I developed the frontend using ReactJS and TailwindCSS, and utilized Redux for state management.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "Redux-ToolKit", color: "orange-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: youtubeClone,
    source_code_link: "https://github.com/Jeeveshmahato/youtube_clone",
    deploy_link: "https://youtube-clone-three-ivory.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "I developed the frontend using ReactJS and TailwindCSS. I also used Google Firebase for user authentication and account management. Additionally, I utilized TMDB APIs to display real-time movies and TV shows with a search section for discovery.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "Redux-ToolKit", color: "orange-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
    ],
    image: Netflix,
    source_code_link: "https://github.com/Jeeveshmahato/NetflixGPT",
    deploy_link: "https://netflix-gpt-six-theta.vercel.app/",
  },
  {
    name: "Swiggy Clone",
    description:
      "A food ordering app clone built with ReactJS, TailwindCSS and Redux Toolkit. Features include restaurant browsing, menu display, cart management, and responsive design across all devices.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "Redux-ToolKit", color: "orange-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: swiggyClone,
    source_code_link: "https://github.com/Jeeveshmahato/Swiggy_Clone",
    deploy_link: "https://namaste-react-mu-dun.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
