/**
 * Saptarshi Paul — Portfolio Data (Single Source of Truth)
 * Strictly derived from the official resume with zero fabricated details.
 */

// Configurable placeholders for links where exact URLs were not explicitly provided in resume
export const PLACEHOLDERS = {
  GITHUB_URL: "https://github.com/Sapta-Dev27",
  LINKEDIN_URL: "https://www.linkedin.com/in/saptarshi-paul-761124276/",
  PROJECT_HIREBUDDY_GITHUB: "https://github.com/Sapta-Dev27/HireBuddy_FullStack",
  PROJECT_HIREBUDDY_DEMO: "https://buddyhire.vercel.app/",
  PROJECT_UPAY_GITHUB: "https://github.com/Sapta-Dev27/uPay",
  PROJECT_INSPIROAI_GITHUB: "https://github.com/Sapta-Dev27/InspiroAI_FullStack",
  PROJECT_INSPIROAI_DEMO: "https://inspiroai-nine.vercel.app/",
};

export const personalInfo = {
  name: "Saptarshi Paul",
  preferredName: "Saptarshi",
  role: "Software Engineer",
  tagline: "Full-Stack Developer • AI Builder • Competitive Programmer",
  subTagline: "Building resilient full-stack systems, scalable backends, and AI-driven products that survive production.",
  location: "Kolkata, West Bengal, India",
  email: "saptarshi2027paul@gmail.com",
  phone: "+91-7980599896",
  resumePath: "https://drive.google.com/file/d/1FBqSizupqCIrmgMfe3yDbwmknaRrShnj/view?usp=sharing",
  status: {
    available: true,
    label: "Available for SDE Roles & Internships",
    currentFocus: "Full-Stack Systems & AI Architecture",
  },
  socials: {
    github: {
      username: "Sapta-Dev27",
      url: PLACEHOLDERS.GITHUB_URL,
      isConfigured: true,
      label: "GitHub",
    },
    leetcode: {
      username: "SaptaDev27",
      url: "https://leetcode.com/u/SaptaDev27/",
      isConfigured: true,
      label: "LeetCode",
    },
    linkedin: {
      username: "Saptarshi Paul",
      url: PLACEHOLDERS.LINKEDIN_URL,
      isConfigured: true,
      label: "LinkedIn",
    },
    email: {
      value: "saptarshi2027paul@gmail.com",
      url: "mailto:saptarshi2027paul@gmail.com",
      label: "Email",
    },
  },
};

export const education = {
  institution: "Techno Main Salt Lake",
  degree: "BTech - Computer Science and Engineering (Data Science)",
  duration: "Aug 2023 - June 2027",
  location: "Kolkata, India",
  cgpa: "7.7 / 10.00",
  highlights: [
    "Specialized in Data Science & CS Core Fundamentals",
    "Tech Lead of Web Dev Team @ GDG On Campus TMSL",
    "Active competitive programming & open source advocate",
  ],
};

export const experiences = [
  {
    id: "pinggy",
    company: "Pinggy",
    role: "Software Engineer Intern",
    period: "Sep 2026 – Present",
    duration: "Present",
    workMode: "Remote",
    isCurrent: true,
    badge: "Current Role",
    summary: "Developing and integrating frontend components, and backend services while debugging issues and improving application performance, reliability, and user experience.",
    responsibilities: [
      "Developed and integrated responsive frontend components and robust backend micro-services.",
      "Identified, reproduced, and resolved critical application bottlenecks to elevate uptime and reliability.",
      "Optimized query performance and REST API response times for seamless user experience across distributed endpoints.",
    ],
    skills: ["Full-Stack Development", "React.js", "Node.js", "REST APIs", "MongoDB/SQL"],
  },
  {
    id: "techno-billion-ai",
    company: "Techno Billion AI",
    role: "Full Stack Software Engineer Intern",
    period: "Aug 2025 – Oct 2025",
    duration: "3 mos",
    workMode: "Hybrid",
    isCurrent: false,
    badge: "Internship",
    summary: "Contributed to full-stack development and developed end-to-end features and backend services with focus on reliability and scale.",
    responsibilities: [
      "Architected and implemented RESTful APIs and optimized database interactions.",
      "Executed comprehensive debugging workflows and root-cause analyses for production stability.",
      "Enhanced system reliability and scalability across client-server communication channels.",
    ],
    skills: ["Full Stack Development", "Software Engineering", "REST APIs", "Database Interactions", "System Reliability"],
  },
];

export const projects = [
  {
    id: "hirebuddy",
    title: "HireBuddy",
    subtitle: "AI-Powered Career Copilot",
    tagline: "Intelligent career platform with automated resume analysis, job discovery, AI agents, and GitHub profiling.",
    category: "AI & Full-Stack Platform",
    featured: true,
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT", "AI Agents"],
    metrics: "5-in-1 Career Operating System",
    description: "Built a full-stack career platform with React, Node.js, Express, and MongoDB for resume analysis, job discovery, application tracking, interview preparation, and GitHub profile scoring.",
    problem: "Navigating today's job market is fragmented. Candidates face opaque ATS filters, manually track hundreds of applications, and lack contextual technical interview prep tailored to their actual GitHub repositories.",
    solution: "HireBuddy solves this by unifying resume ATS evaluation, multi-source job aggregation, full pipeline tracking, and autonomous AI interview agents that analyze code repositories to conduct realistic technical evaluations.",
    architecture: {
      client: "React SPA with dynamic job dashboards & real-time agent chat",
      server: "Node.js + Express REST API with JWT-based session security",
      database: "MongoDB schema optimized for user applications & structured resume parsed data",
      aiLayer: "AI agent orchestrator for contextual mock interviews & repository analysis",
    },
    keyFeatures: [
      "Automated Resume Parsing & ATS Compatibility Scoring",
      "Dynamic Job Discovery & Application Tracking Kanban Workflow",
      "Interactive AI Agents for Technical Mock Interviews",
      "GitHub Profile & Repository Code Quality Scoring",
      "Secure JWT Authentication with Protected REST API endpoints",
    ],
    links: {
      github: PLACEHOLDERS.PROJECT_HIREBUDDY_GITHUB,
      demo: PLACEHOLDERS.PROJECT_HIREBUDDY_DEMO,
    },
    color: "#00f0ff",
  },
  {
    id: "upay",
    title: "uPay",
    subtitle: "Digital Wallet & UPI Payment System",
    tagline: "Secure, high-concurrency payment engine with dynamic UPI routing and transactional safety.",
    category: "FinTech & Backend Systems",
    featured: true,
    techStack: ["Express", "MongoDB", "JWT", "REST APIs", "Node.js", "MPIN Auth"],
    metrics: "ACID-Safe Transaction Workflows",
    description: "Built a backend payment platform with Express and MongoDB supporting wallet management, P2P transfers, dynamic UPI IDs, recharges, bill payments, and refunds.",
    problem: "Financial applications require uncompromising security, strict double-entry ledger consistency, and low-latency atomic operations to prevent race conditions, balance double-spending, and spoofed transfers.",
    solution: "uPay implements a controller-middleware-model architecture enforcing two-factor MPIN authorization, protected route guards, idempotent transaction states, and dynamic virtual UPI resolution.",
    architecture: {
      server: "Express microservices structured via Controller-Middleware-Model pattern",
      auth: "Dual-tier security: Bearer JWT for sessions + Hashed MPIN validation for payment triggers",
      database: "MongoDB with transactional consistency and indexed ledger collections",
      api: "High-throughput RESTful endpoints handling P2P, recharges, and automated refunds",
    },
    keyFeatures: [
      "Real-time Peer-to-Peer (P2P) Wallet Transfers",
      "Dynamic Virtual UPI ID Generation & Routing",
      "Multi-stage MPIN Authorization Middleware",
      "Utility Bill Payments, Mobile Recharges & Instant Refunds",
      "Audit-Ready Transaction Ledger with Status Tracking",
    ],
    links: {
      github: PLACEHOLDERS.PROJECT_UPAY_GITHUB,
      demo: null, // Backend architecture focus
    },
    color: "#38bdf8",
  },
  {
    id: "inspiroai",
    title: "InspiroAI",
    subtitle: "AI-Powered SaaS Platform",
    tagline: "Multi-modal generative AI suite for blog creation, asset synthesis, and instant document evaluation.",
    category: "Generative AI SaaS",
    featured: true,
    techStack: ["React", "Express", "MongoDB", "JWT", "Gemini", "Stability AI", "Node.js"],
    metrics: "Multi-Modal AI Pipeline",
    description: "Built and deployed a full-stack SaaS platform for AI-generated blogs, articles, images, thumbnails, and resume analysis.",
    problem: "Creators and developers frequently toggle between disparate LLM chats, image generators, and text optimizers, wasting time and incurring high subscription overheads without unified asset management.",
    solution: "InspiroAI bundles generative text (Google Gemini) and generative diffusion imagery (Stability AI) into a unified workspace with real-time prompt streaming, persistent asset galleries, and social sharing flows.",
    architecture: {
      client: "React modern workspace with responsive generation previews & asset canvas",
      server: "Express API integrating multiple foundation AI providers asynchronously",
      database: "MongoDB for asset indexing, user history, and usage quotas",
      aiIntegrations: "Google Gemini 1.5 API + Stability AI Diffusion API pipelines",
    },
    keyFeatures: [
      "AI Blog & Long-form Article Generation with Custom Tone Control",
      "High-Resolution AI Image & Thumbnail Synthesis via Stability AI",
      "Integrated AI Resume Analysis & Structured Feedback",
      "Responsive Content-Sharing & Export Workflows",
      "JWT-Protected User Dashboards with Quota Tracking",
    ],
    links: {
      github: PLACEHOLDERS.PROJECT_INSPIROAI_GITHUB,
      demo: PLACEHOLDERS.PROJECT_INSPIROAI_DEMO,
    },
    color: "#818cf8",
  },
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    description: "Foundational syntaxes for algorithms, systems, and full-stack development.",
    skills: [
      { name: "Java", level: "Advanced", desc: "OOP, Concurrency, Enterprise Foundations" },
      { name: "C++", level: "Advanced", desc: "STL, Memory Management, DSA Problem Solving" },
      { name: "JavaScript", level: "Advanced", desc: "ES6+, Async Event Loop, Modern Web" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "ReactJS", level: "Advanced", desc: "Hooks, Context, State Architecture, Virtual DOM" },
      { name: "UI Libraries", level: "Proficient", desc: "Component design systems, Tailwind, Framer Motion" },
      { name: "HTML5 / CSS3", level: "Advanced", desc: "Semantic markup, Flexbox/Grid, Animations" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "Server",
    description: "Architecting resilient APIs, auth workflows, and microservices.",
    skills: [
      { name: "NodeJS", level: "Advanced", desc: "Event-driven runtime, streams, server performance" },
      { name: "Express", level: "Advanced", desc: "RESTful architecture, middleware pipelines, JWT auth" },
      { name: "REST APIs", level: "Advanced", desc: "Endpoint design, HTTP semantics, API security" },
    ],
  },
  {
    id: "database",
    title: "Database Systems",
    icon: "Database",
    description: "Data modeling, indexing, and high-integrity storage solutions.",
    skills: [
      { name: "MongoDB", level: "Advanced", desc: "Document modeling, aggregation pipelines, NoSQL" },
      { name: "SQL", level: "Proficient", desc: "Relational queries, joins, constraints, triggers" },
      { name: "PostgreSQL", level: "Proficient", desc: "ACID transactions, relational indexing, schema design" },
    ],
  },
  {
    id: "fundamentals",
    title: "Computer Science Fundamentals",
    icon: "Cpu",
    description: "Core theoretical and applied foundations of computer systems.",
    skills: [
      { name: "DSA", level: "Advanced", desc: "750+ LeetCode problems solved, algorithmic optimization" },
      { name: "System Design", level: "Proficient", desc: "Scalability, caching, load balancing, microservices" },
      { name: "OOPS", level: "Advanced", desc: "Polymorphism, inheritance, encapsulation, design patterns" },
      { name: "Computer Networks", level: "Proficient", desc: "TCP/IP, HTTP/HTTPS, DNS, WebSockets, OSI layers" },
      { name: "Operating Systems", level: "Proficient", desc: "Process scheduling, concurrency, memory paging, I/O" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Version Control",
    icon: "Terminal",
    description: "Automated pipelines, containerization, and source versioning.",
    skills: [
      { name: "Git", level: "Advanced", desc: "Branching strategies, interactive rebasing, merge workflows" },
      { name: "Docker", level: "Proficient", desc: "Containerization, Dockerfile optimization, multi-stage builds" },
      { name: "CI/CD", level: "Proficient", desc: "Continuous integration pipelines, automated deployments" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & AI",
    icon: "Wrench",
    description: "Modern productivity stack, API testing, and IDE tooling.",
    skills: [
      { name: "Postman", level: "Advanced", desc: "API testing suites, environment variables, mocking" },
      { name: "Docker Hub", level: "Proficient", desc: "Image registries, container version tagging" },
      { name: "VS Code", level: "Advanced", desc: "Advanced debugging, extensions, productivity workflows" },
      { name: "Copilot", level: "Proficient", desc: "AI-assisted pair programming & rapid prototyping" },
      { name: "Antigravity", level: "Proficient", desc: "AI-agent engineering workflows and autonomous tooling" },
    ],
  },
];

export const achievements = [
  {
    id: "leetcode",
    category: "Engineering & Problem Solving",
    title: "750+ Problems Solved on LeetCode",
    badge: "1577 Rating • 25+ Contests",
    metric: "750+",
    metricLabel: "Problems Solved",
    secondaryMetric: "1577",
    secondaryLabel: "Contest Rating",
    tertiaryMetric: "25+",
    tertiaryLabel: "Contests Attended",
    description: "Consistent competitive programming practice demonstrating deep mastery over Data Structures, Algorithms, Graph Theory, and Dynamic Programming.",
    icon: "CodeXml",
    highlight: true,
  },
  {
    id: "gdg-tech-lead",
    category: "Technical Leadership",
    title: "Tech Lead (Web Dev) @ GDG On Campus TMSL",
    badge: "Google Developer Groups",
    metric: "Tech Lead",
    metricLabel: "Web Dev Team",
    description: "Selected as the Tech Lead of Web Dev Team of GDG on Campus TMSL. Previously part of the Core Team of Web Dev Team and led the team throughout the academic session, driving workshops and technical initiatives.",
    icon: "Users",
    highlight: true,
  },
  {
    id: "open-source",
    category: "Open Source Contribution",
    title: "2X Top 10 Open Source Contributor",
    badge: "Apetre 2.0 (2025) & Apetre (2024)",
    metric: "2X Top 10",
    metricLabel: "Open Source Honors",
    description: "Secured Top 10 position twice among a large pool of competitive developers during Apetre 2.0 (Feb 2025) and Apetre (Feb 2024), delivering impactful code contributions to open source repositories.",
    icon: "GitPullRequest",
    highlight: false,
  },
  {
    id: "craftncode",
    category: "Hackathon Victory",
    title: "State Level Hackathon Winner",
    badge: "CraftNCode • IIIT Bhubaneswar (Nov 2024)",
    metric: "Top 2",
    metricLabel: "State Level Finish",
    description: "Emerged in the Top 2 teams from the state in the Internal State Level Hackathon and achieved finalist standing for CraftNCode hosted at IIIT Bhubaneswar.",
    icon: "Trophy",
    highlight: false,
  },
  {
    id: "doubleslash",
    category: "Hackathon Finalist",
    title: "2X Top 10 Finalist @ Double Slash",
    badge: "Jadavpur University • Double Slash 3.0 & 4.0",
    metric: "2X Finalist",
    metricLabel: "Top 10 Consecutive",
    description: "Secured Top 10 positions in consecutive editions of the flagship Double Slash 3.0 and Double Slash 4.0 hackathons organized by Jadavpur University.",
    icon: "Award",
    highlight: false,
  },
];

export const codingProfiles = {
  sectionTitle: "CODE. SOLVE. REPEAT.",
  sectionSubtitle: "Because apparently 750+ LeetCode problems wasn't enough.",
  headline: "Proof > buzzwords.",
  stats: [
    { value: "750+", label: "Problems Solved", detail: "DSA & System Algorithms", countTo: 750 },
    { value: "1577", label: "LeetCode Rating", detail: "Top contest performances", countTo: 1577 },
    { value: "25+", label: "Contests Attended", detail: "Biweekly & Weekly rounds", countTo: 25 },
  ],
  profiles: [
    {
      platform: "LeetCode",
      handle: "@SaptaDev27",
      url: "https://leetcode.com/u/SaptaDev27/",
      exactUrl: true,
      description: "750+ problems solved across arrays, trees, dynamic programming, and graphs with 1577 rating.",
      icon: "CodeXml",
      color: "#FFA116",
    },
    {
      platform: "GitHub",
      handle: "@Sapta-Dev27",
      url: PLACEHOLDERS.GITHUB_URL,
      exactUrl: false,
      placeholderKey: "GITHUB_URL",
      description: "Full-stack projects, open source contributions, microservices, and AI integrations.",
      icon: "Github",
      color: "#00F0FF",
    },
    {
      platform: "LinkedIn",
      handle: "Saptarshi Paul",
      url: PLACEHOLDERS.LINKEDIN_URL,
      exactUrl: false,
      placeholderKey: "LINKEDIN_URL",
      description: "Professional updates, engineering insights, hackathon milestones, and community leadership.",
      icon: "Linkedin",
      color: "#0A66C2",
    },
  ],
};

export const terminalCommands = {
  whoami: "Saptarshi Paul — Software Engineer, Full-Stack Developer & AI Builder based in Kolkata, India.",
  role: "Software Engineer Intern @ Pinggy | Tech Lead @ GDG TMSL",
  skills: "Languages: Java, C++, JS | Frontend: React | Backend: Node, Express | DB: MongoDB, SQL, Postgres | DevOps: Git, Docker, CI/CD",
  projects: "1. HireBuddy (AI Career OS) | 2. uPay (UPI & Wallet Backend) | 3. InspiroAI (Generative SaaS)",
  stats: "LeetCode: 750+ Problems Solved | 1577 Contest Rating | 25+ Contests | CGPA: 7.7/10",
  experience: "Pinggy (Sep 2026 - Present, Remote) | Techno Billion AI (Aug 2025 - Oct 2025)",
  education: "Techno Main Salt Lake — BTech CSE (Data Science), 2023 - 2027 (CGPA 7.7/10)",
  achievements: "750+ LeetCode | GDG Tech Lead | 2x Top 10 Open Source | CraftNCode State Winner | 2x Double Slash Finalist",
  contact: "Email: saptarshi2027paul@gmail.com | Phone: +91-7980599896 | GitHub: Sapta-Dev27 | LeetCode: SaptaDev27",
  sudo: "Permission granted: You are officially authorized to hire Saptarshi Paul. Reach out at saptarshi2027paul@gmail.com!",
};
