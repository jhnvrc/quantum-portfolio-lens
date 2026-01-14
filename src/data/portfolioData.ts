// Portfolio Data - Edit this file to customize your portfolio

export const personalInfo = {
  name: "Alex Starfield",
  headline: "Full-Stack Developer & UI/UX Designer",
  tagline: "Crafting cosmic digital experiences with code and creativity",
  email: "alex@starfield.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  availability: true,
  availabilityText: "Available for Work",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  cvUrl: "/cv.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/alexstarfield",
    github: "https://github.com/alexstarfield",
    instagram: "https://instagram.com/alexstarfield",
    twitter: "https://twitter.com/alexstarfield",
    whatsapp: "https://wa.me/15551234567",
  },
};

export const aboutMe = {
  introduction: `I'm a passionate full-stack developer with 5+ years of experience building scalable web applications and stunning user interfaces. My journey began with a fascination for how technology can transform ideas into reality, and that curiosity has driven me to master modern web technologies.

I specialize in creating seamless digital experiences that combine beautiful design with robust functionality. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or stargazing.`,
  
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2020 - 2022",
      gpa: "3.9/4.0",
      highlights: ["Specialized in Human-Computer Interaction", "Research in AI/ML applications"],
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "MIT",
      year: "2016 - 2020",
      gpa: "3.85/4.0",
      highlights: ["Dean's List", "Senior Thesis on Distributed Systems"],
    },
  ],
  
  goals: [
    "Lead innovative tech projects at a forward-thinking company",
    "Contribute to open-source projects that impact millions",
    "Mentor the next generation of developers",
    "Build products that make technology accessible to everyone",
  ],
};

export const skills = {
  categories: [
    {
      name: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 85 },
        { name: "Go", level: 70 },
        { name: "Rust", level: 60 },
      ],
    },
    {
      name: "Frontend Frameworks",
      icon: "Layout",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      name: "Backend & Databases",
      icon: "Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: "Settings",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 70 },
      ],
    },
  ],
};

export const projects = [
  {
    id: "1",
    title: "Nebula Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, dark mode support, and customizable widgets.",
    features: [
      "Real-time data streaming",
      "Interactive charts and graphs",
      "Customizable dashboard layouts",
      "Role-based access control",
      "Export to PDF/CSV",
    ],
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/alexstarfield/nebula-dashboard",
    liveUrl: "https://nebula-dashboard.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Cosmic E-Commerce",
    description: "A full-featured e-commerce platform with AI-powered recommendations, seamless checkout, and inventory management.",
    features: [
      "AI product recommendations",
      "Stripe payment integration",
      "Real-time inventory tracking",
      "Admin dashboard",
      "Multi-currency support",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "OpenAI", "Tailwind"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/alexstarfield/cosmic-commerce",
    liveUrl: "https://cosmic-commerce.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "Stellar Chat",
    description: "A real-time messaging application with end-to-end encryption, file sharing, and video calling capabilities.",
    features: [
      "End-to-end encryption",
      "Real-time messaging",
      "Video/voice calls",
      "File sharing up to 100MB",
      "Group channels",
    ],
    techStack: ["React", "Socket.io", "WebRTC", "Express", "MongoDB", "Redis"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/alexstarfield/stellar-chat",
    liveUrl: "https://stellar-chat.vercel.app",
    featured: false,
  },
  {
    id: "4",
    title: "Galaxy CMS",
    description: "A headless content management system with a beautiful editor, media library, and API-first architecture.",
    features: [
      "Rich text editor",
      "Media library with CDN",
      "RESTful & GraphQL APIs",
      "Webhook integrations",
      "Version control for content",
    ],
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "GraphQL", "AWS S3", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/alexstarfield/galaxy-cms",
    liveUrl: "https://galaxy-cms.vercel.app",
    featured: false,
  },
];

export const certificates = [
  {
    id: "1",
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "2",
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2023",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    credentialUrl: "https://google.com/verification",
  },
  {
    id: "3",
    title: "Meta Frontend Developer Certificate",
    issuer: "Meta",
    year: "2022",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    credentialUrl: "https://coursera.org/verification",
  },
  {
    id: "4",
    title: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    year: "2022",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
    credentialUrl: "https://cncf.io/verification",
  },
];

export const experience = {
  professional: [
    {
      id: "1",
      role: "Senior Full-Stack Developer",
      company: "TechNova Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of enterprise SaaS products serving 50K+ users",
      responsibilities: [
        "Architected and built microservices handling 1M+ daily requests",
        "Led a team of 5 developers in agile development processes",
        "Reduced application load time by 60% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
      ],
      achievements: [
        "Promoted to Senior Developer within 8 months",
        "Employee of the Quarter Q3 2023",
      ],
    },
    {
      id: "2",
      role: "Full-Stack Developer",
      company: "StartupX",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Core team member building a fintech platform from scratch",
      responsibilities: [
        "Developed real-time trading dashboard with React and WebSocket",
        "Built RESTful APIs serving 100K+ users",
        "Implemented secure authentication with OAuth 2.0",
        "Optimized database queries improving performance by 40%",
      ],
      achievements: [
        "Helped raise Series A funding with product demo",
        "Open-sourced internal tools with 500+ GitHub stars",
      ],
    },
  ],
  organizational: [
    {
      id: "1",
      role: "Technical Lead",
      organization: "Google Developer Student Clubs",
      period: "2019 - 2020",
      description: "Led workshops and hackathons for 200+ students",
      achievements: [
        "Organized 10+ technical workshops",
        "Mentored 50+ student developers",
        "Hosted regional hackathon with 500+ participants",
      ],
    },
    {
      id: "2",
      role: "Open Source Contributor",
      organization: "React Community",
      period: "2018 - Present",
      description: "Active contributor to popular open-source projects",
      achievements: [
        "100+ merged pull requests",
        "Maintainer of 3 npm packages with 10K+ weekly downloads",
        "Speaker at 5 tech conferences",
      ],
    },
  ],
};

export const achievements = [
  {
    id: "1",
    title: "1st Place - Global Hackathon 2023",
    category: "Competition",
    description: "Won first place among 500+ teams worldwide building an AI-powered accessibility tool",
    year: "2023",
    icon: "Trophy",
  },
  {
    id: "2",
    title: "Best Paper Award - ACM Conference",
    category: "Academic",
    description: "Research paper on distributed systems optimization selected as best paper",
    year: "2022",
    icon: "Award",
  },
  {
    id: "3",
    title: "GitHub Arctic Code Vault Contributor",
    category: "Open Source",
    description: "Code preserved in GitHub's Arctic Code Vault for future generations",
    year: "2020",
    icon: "Star",
  },
  {
    id: "4",
    title: "Dean's List - All Semesters",
    category: "Academic",
    description: "Maintained academic excellence throughout undergraduate studies",
    year: "2016-2020",
    icon: "GraduationCap",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
