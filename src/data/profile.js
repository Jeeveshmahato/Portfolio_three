// Single source of truth for all site content. Keep in sync with the Resume.
import maitriImg from "../assets/Maitri_App.png";
import aiToolsImg from "../assets/getAITool.webp";
import netflixImg from "../assets/Netflix_Clone.png";

export const profile = {
  name: "Jeevesh Mahato",
  role: "Full Stack Engineer",
  location: "Jamshedpur, India",
  email: "jeeveshmaaht@gmail.com",
  phone: "+91 6203534938",
  phoneHref: "tel:+916203534938",
  github: "https://github.com/Jeeveshmahato",
  linkedin: "https://www.linkedin.com/in/jeeveshmahato/",
  resume: `${import.meta.env.BASE_URL}Jeevesh_Mahato_Resume.pdf`,
  current: { title: "Full Stack Engineer", company: "Content Whale" },
  headline:
    "I build scalable web applications across the frontend, backend and AI layers.",
  summary:
    "For 4+ years I've worked with React, Next.js, Node.js, Laravel and Python FastAPI on PostgreSQL, MongoDB and Redis, and designed and shipped AI content generation pipelines using OpenAI, Gemini and Perplexity with RAG and vector search.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Figures come straight from the Resume; keep them verifiable.
export const highlights = [
  { value: "4", suffix: "+", label: "Years building production web apps" },
  { value: "40", suffix: "%", label: "Faster load and engagement at Protecte" },
  { value: "72", suffix: "%", label: "Team efficiency gain from API automation" },
  { value: "99.9", suffix: "%", label: "Production uptime maintained" },
];

export const about = [
  "I'm a full stack engineer who enjoys owning a feature end to end, from the database schema and API design to the interface people actually use. Most of my work sits where product, performance and infrastructure meet.",
  "Right now I'm at Content Whale, building an AI content platform in Laravel and FastAPI: a multi-stage generation pipeline, retrieval with pgvector, and quality checks before anything gets published. Before that I built React and Next.js products for security, e-commerce and analytics teams, and spent a year leading delivery as a project manager.",
];

export const focusAreas = [
  {
    title: "Frontend engineering",
    description:
      "React and Next.js apps that load fast and stay accessible: code splitting, memoization, Core Web Vitals and WCAG 2.1.",
  },
  {
    title: "Backend and APIs",
    description:
      "REST and real-time services in Node.js, Laravel and FastAPI, with auth, billing, queues and webhooks done properly.",
  },
  {
    title: "AI and LLM systems",
    description:
      "Content pipelines on OpenAI, Gemini and Perplexity with RAG, embeddings, semantic search and automated quality gates.",
  },
];

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Content Whale",
    location: "Remote",
    period: "Apr 2026 — Present",
    current: true,
    points: [
      "Built a full-stack AI content generation platform in Laravel and Python FastAPI with a multi-stage pipeline that extracts search terms, retrieves reference articles, structures content and generates final output using OpenAI, Gemini and Perplexity.",
      "Implemented RAG with PostgreSQL pgvector and sentence-transformer embeddings, async job processing with webhook callbacks, and Copyleaks plus GPTZero checks to enforce content quality before publish.",
      "Built the Laravel portal with Google OAuth, Razorpay billing, Google Drive sync and DOCX/PDF/Excel export. Shipped the Next.js 14 marketing site with XML sitemaps, IndexNow and Core Web Vitals tuning, deployed on Netlify and Vercel.",
    ],
    stack: ["Laravel", "FastAPI", "PostgreSQL", "pgvector", "OpenAI", "Gemini", "Next.js"],
  },
  {
    role: "Frontend Engineer",
    company: "Protecte Technologies",
    location: "Remote",
    period: "Nov 2025 — Mar 2026",
    points: [
      "Built high-performance React.js and Next.js applications using code splitting and memoization, improving load speed and engagement by 40%.",
      "Developed the MailArmor portal with real-time APIs and WebSockets, led WCAG 2.1 accessibility audits, and kept production uptime at 99.9% with AWS, GitHub Actions CI/CD and Prometheus monitoring.",
    ],
    stack: ["React", "Next.js", "WebSockets", "AWS", "GitHub Actions", "Prometheus"],
  },
  {
    role: "Project Manager",
    company: "Ynaps",
    location: "Remote",
    period: "Dec 2024 — Nov 2025",
    points: [
      "Led engineering and design teams using Agile and Scrum, cutting revision cycles by 25% and speeding up delivery by 35%.",
      "Set up Jira sprint tracking and product roadmaps that raised customer satisfaction by 50% and user engagement by 25%.",
    ],
    stack: ["Agile", "Scrum", "Jira", "Roadmapping"],
  },
  {
    role: "Frontend Engineer",
    company: "Hybrid Utopia",
    location: "Remote",
    period: "Jul 2023 — Dec 2024",
    points: [
      "Built React.js and Next.js frontends with Redux Toolkit and customized Shopify, Webflow and WordPress storefronts with Razorpay payments, increasing conversions by 40% and client satisfaction by 31%.",
      "Automated REST API workflows that improved team efficiency by 72%.",
    ],
    stack: ["React", "Next.js", "Redux Toolkit", "Shopify", "Webflow", "Razorpay"],
  },
  {
    role: "Mainframe Developer Intern",
    company: "Cognizant Technology Solutions",
    location: "Kolkata",
    period: "Feb 2023 — Jul 2023",
    points: [
      "Built and maintained enterprise banking applications in COBOL, JCL, VSAM and DB2, and optimized batch jobs to significantly reduce production pipeline failure rates.",
    ],
    stack: ["COBOL", "JCL", "VSAM", "DB2"],
  },
];

export const projects = [
  {
    name: "Maitri App",
    description:
      "A Tinder-style matchmaking PWA with Framer Motion swipe gestures, Socket.io real-time chat, 24-hour Cloudinary stories, Google and GitHub OAuth, and Razorpay premium membership. The Node.js REST API exposes 15+ endpoints secured with Helmet.js and rate limiting.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux Toolkit", "OAuth2", "Razorpay"],
    image: maitriImg,
    source: "https://github.com/Jeeveshmahato/Maitri_App",
    live: "https://maitri-app-frontend.onrender.com/",
  },
  {
    name: "Get Me AI Tools",
    description:
      "A full-stack directory for discovering AI tools, with JWT authentication, a CORS-secured REST API, real-time form validation and a mobile-first responsive UI. Frontend on Vercel, API on Render.",
    stack: ["React", "Node.js", "MongoDB", "Redux Toolkit", "JWT"],
    image: aiToolsImg,
    source: "https://github.com/Jeeveshmahato/AI-website",
    live: "https://ai-website-frontend.onrender.com/",
  },
  {
    name: "Netflix GPT",
    description:
      "A streaming UI with OpenAI-powered smart search, real-time movie and TV data from TMDB, Firebase authentication, and unit and integration tests on core modules.",
    stack: ["React", "Redux Toolkit", "Firebase Auth", "OpenAI API", "Tailwind CSS"],
    image: netflixImg,
    source: "https://github.com/Jeeveshmahato/NetflixGPT",
    live: "https://netflix-gpt-dqn7.vercel.app/",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Vue.js", "Tailwind CSS", "SASS", "Material UI", "Framer Motion", "PWAs", "WCAG 2.1"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "Python FastAPI", "REST APIs", "GraphQL", "WebSockets", "Socket.io", "Server-Sent Events", "Webhooks", "Kafka", "RabbitMQ"],
  },
  {
    group: "AI and LLM",
    items: ["OpenAI API", "Google Gemini", "Perplexity API", "RAG", "pgvector", "Embeddings", "Semantic Search", "crawl4ai", "trafilatura", "Copyleaks", "GPTZero"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firestore", "IndexedDB", "SQLAlchemy", "Alembic", "Indexing", "Sharding", "Replication"],
  },
  {
    group: "Cloud and DevOps",
    items: ["AWS EC2", "AWS Amplify", "Docker", "GitHub Actions", "CI/CD", "Nginx", "Vercel", "Netlify", "Render", "Cloudflare", "Linux", "Prometheus", "Grafana"],
  },
  {
    group: "Security and Testing",
    items: ["JWT", "OAuth2", "OIDC", "Firebase Auth", "RBAC", "Rate Limiting", "Helmet.js", "Unit Testing", "Integration Testing", "E2E Testing", "TDD", "k6", "JMeter"],
  },
  {
    group: "SEO and Tools",
    items: ["Technical SEO", "Core Web Vitals", "XML Sitemaps", "IndexNow", "Shopify", "Webflow", "Razorpay", "Figma", "Adobe XD", "Git", "Jira", "Agile / Scrum"],
  },
];

export const education = {
  degree: "Bachelor of Technology",
  school: "Haldia Institute of Technology",
  location: "West Bengal",
  period: "Aug 2019 — Jul 2023",
  grade: "CGPA 8.6 / 10",
};
