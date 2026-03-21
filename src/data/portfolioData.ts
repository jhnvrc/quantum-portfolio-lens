// Portfolio Data - Edit this file to customize your portfolio

export const personalInfo = {
  name: "Johana Veronica Setiawan",
  headline: "AI/ML Enthusiast | Full-Stack Developer | Computer Science Student",
  tagline: "Passionate about AI-driven solutions, from computer vision to NLP — while also building polished full-stack web and mobile applications.",
  email: "johanahanaveronicasetiawan@gmail.com",
  phone: "+62 813-8733-7709",
  location: "Cikarang, Indonesia",
  availability: true,
  availabilityText: "Open for Internship",
  profileImage: "/profile.png",
  cvUrl: "/cv.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/johanavsetiawan",
    github: "https://github.com/Jjvers",
    instagram: "https://instagram.com/jhnvrc_",
    whatsapp: "https://wa.me/6281387337709",
  },
};

export const aboutMe = {
  introduction: `Informatics student at President University with a strong interest in AI/ML and hands-on experience across the full development stack. I enjoy exploring deep learning, computer vision, and NLP while also building frontend interfaces and backend systems.

I'm always eager to learn, take on new challenges, and collaborate on projects that make a real difference — whether it's an AI model, a web app, or a mobile application.`,

  education: [
    {
      degree: "Bachelor of Informatics",
      institution: "President University — Faculty of Computer Science",
      year: "2024 - Present (Expected 2027)",
      gpa: "3.88/4.00",
      highlights: ["Concentration in Artificial Intelligence"],
    },
    {
      degree: "High School Diploma (Science Track)",
      institution: "SMA PANGUDI LUHUR BERNARDUS DELTAMAS",
      year: "2021 - 2024",
      highlights: ["Top 10% of graduating class"],
    },
  ],

  goals: [
    "Gain real-world experience through an AI/ML or software engineering internship",
    "Deepen my understanding of NLP and computer vision through research",
    "Grow as a full-stack developer by building end-to-end projects",
    "Contribute to open-source projects and the developer community",
  ],
};

export const skills = {
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "SQL", "Kotlin"],
    },
    {
      name: "AI & Machine Learning",
      skills: ["Deep Learning", "Computer Vision", "NLP", "Image Processing", "Robotics Intelligence"],
    },
    {
      name: "AI Frameworks & Libraries",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "YOLOv8/v11"],
    },
    {
      name: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
    },
    {
      name: "Backend Development",
      skills: ["Node.js", "Flask", "FastAPI", "REST API", "Firebase"],
    },
    {
      name: "Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Google Colab", "VS Code", "Blender"],
    },
  ],
};

export const projects = [
  {
    id: "1",
    title: "Sentra – Media Bias Analysis",
    description: "An AI-powered platform for media bias analysis and hallucination detection. Uses RAG + LLM to analyze news articles, detect framing keywords, and provide factual summaries with source alignment scoring.",
    features: [
      "RAG + LLM powered analysis engine",
      "Media framing keyword detection",
      "Source alignment scoring system",
      "Hallucination reduction toggle",
    ],
    techStack: ["Python", "FastAPI", "React", "LLM", "RAG", "NLP"],
    image: "sentra",
    githubUrl: "https://github.com/jhnvrc/sentra",
    liveUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "HeartGuard Pro – AI Cardiac Risk Predictor",
    description: "An AI-powered cardiovascular risk assessment platform built during a hackathon. Predicts patient risk for cardiovascular disease using clinical data including vital signs, lab results, and medical history with real-time risk scoring.",
    features: [
      "Patient demographic & clinical data input",
      "Vital signs & lab results analysis (BP, cholesterol, glucose, BMI)",
      "Medical history & risk factor assessment",
      "AI-powered cardiovascular risk prediction & scoring",
    ],
    techStack: ["React", "TypeScript", "Python", "Machine Learning", "FastAPI", "Tailwind CSS"],
    image: "heartguard",
    githubUrl: "https://github.com/jhnvrc/heartguard-pro",
    liveUrl: "",
    featured: true,
  },
  {
    id: "3",
    title: "BISINDO Sign Language Recognition",
    description: "Comparative performance analysis of YOLOv8 and YOLOv11 for BISINDO (Indonesian Sign Language) alphabet recognition with web-based learning integration. Published in IT for Society journal.",
    features: [
      "Real-time BISINDO alphabet detection using YOLO models",
      "YOLOv8 vs YOLOv11 performance comparison",
      "Web-based interactive learning platform",
      "Custom dataset of BISINDO hand gestures",
    ],
    techStack: ["Python", "YOLOv8", "YOLOv11", "Deep Learning", "React", "Computer Vision"],
    image: "bisindo",
    githubUrl: "https://github.com/jhnvrc/bisindo-recognition",
    liveUrl: "",
    featured: true,
  },
  {
    id: "4",
    title: "Study Buddy – AI-Powered Learning Monitor",
    description: "A web-based platform that uses gaze tracking and rule-based expert logic to monitor student focus during self-directed learning. Features biometric Face Login using a custom MiniFaceNet model trained with Triplet Loss, and real-time distraction detection via head pose and gaze estimation.",
    features: [
      "Face Recognition login (MiniFaceNet + Triplet Loss)",
      "Real-time gaze & head pose tracking for focus detection",
      "Rule-based expert system for personalized study feedback",
      "Analytics dashboard with session stats & streaks",
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "Deep Learning", "OpenCV"],
    image: "study-buddy",
    githubUrl: "https://github.com/jhnvrc/study-buddy",
    liveUrl: "",
    featured: true,
  },
  {
    id: "5",
    title: "Gold Analytics – AI Trading Prediction",
    description: "A software engineering project featuring AI-powered gold price prediction and analytics. Provides probability analysis, scenario comparisons, gap analysis, and multi-overlay technical indicators for XAU/USD trading decisions.",
    features: [
      "AI prediction with probability analysis (bullish/bearish)",
      "Scenario analysis with risk assessment (Option A vs B)",
      "Gap analysis for market open/close patterns",
      "Multi-overlay technical indicators & trend detection",
    ],
    techStack: ["React", "TypeScript", "Python", "AI/ML", "REST API", "Data Visualization"],
    image: "gold-analytics",
    githubUrl: "https://github.com/jhnvrc/gold-analytics",
    liveUrl: "",
    featured: true,
  },
  {
    id: "6",
    title: "AI Image Processing Platform",
    description: "A futuristic AI-driven image editing platform featuring background removal, object removal, super-resolution, color correction, style transfer, and real-time processing capabilities.",
    features: [
      "Background & object removal",
      "AI-powered super-resolution & color correction",
      "Style transfer & beautification",
      "Text-to-image generation",
    ],
    techStack: ["React", "Python", "TensorFlow", "Computer Vision", "REST API"],
    image: "image-processing",
    githubUrl: "https://github.com/jhnvrc/ai-image-processing",
    liveUrl: "",
    featured: false,
  },
  {
    id: "7",
    title: "PallPaws – Pet Care Platform",
    description: "A full-stack web application for pet care services including daycare, one-on-one walks, training sessions, and spa treatments. Built with a warm, user-friendly interface.",
    features: [
      "Service booking & scheduling system",
      "Pet health tracking dashboard",
      "User authentication & profile management",
      "Responsive design for all devices",
    ],
    techStack: ["React", "Node.js", "Tailwind CSS", "REST API"],
    image: "pallpaws",
    githubUrl: "https://github.com/jhnvrc/pallpaws",
    liveUrl: "",
    featured: false,
  },
  {
    id: "8",
    title: "Coffee Shop Mobile App",
    description: "A native Android e-commerce application for a coffee shop built with Kotlin and Firebase. Features user authentication, real-time menu browsing, shopping cart, and checkout system with a clean modern UI.",
    features: [
      "Firebase Authentication & real-time database",
      "Product catalog with categories & search",
      "Shopping cart with quantity management",
      "User profile & order management",
    ],
    techStack: ["Kotlin", "Android", "Firebase", "XML", "MVVM Architecture"],
    image: "coffee-app",
    githubUrl: "https://github.com/jhnvrc/coffee-shop-app",
    liveUrl: "",
    featured: false,
  },
  {
    id: "9",
    title: "Hypothermia – 3D Survival Game",
    description: "A 3D survival game built as the final project for 3D Computer Graphics & Animation course. Players must survive hypothermia conditions in a snowy environment with crafting and resource management mechanics.",
    features: [
      "3D environment with snow & weather effects",
      "Survival mechanics (temperature, resources)",
      "Character animation & physics",
      "Multiplayer-ready architecture",
    ],
    techStack: ["C#", "3D Modeling", "Blender", "Animation"],
    image: "hypothermia",
    githubUrl: "https://github.com/jhnvrc/hypothermia-game",
    liveUrl: "",
    featured: false,
  },
];

export const certificates = [
  {
    id: "1",
    title: "Elements of AI",
    issuer: "University of Helsinki & MinnaLearn",
    year: "2026",
    image: "/certificates/elements-of-ai.webp",
    credentialUrl: "https://certificates.mooc.fi/validate/ht5l4lp2up",
  },
  {
    id: "2",
    title: "Python",
    issuer: "Kaggle",
    year: "2026",
    image: "/certificates/kaggle-python.webp",
    credentialUrl: "",
  },
  {
    id: "3",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/certificates/dicoding-financial-literacy.webp",
    credentialUrl: "https://dicoding.com/certificates/4EXG1E4QQPRL",
  },
  {
    id: "4",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/certificates/dicoding-web-programming.webp",
    credentialUrl: "https://dicoding.com/certificates/GRX5W2K7KZ0M",
  },
  {
    id: "5",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2026",
    image: "/certificates/dicoding-basic-ai.webp",
    credentialUrl: "https://dicoding.com/certificates/QLZ99R1LMZ5D",
  },
];

export const experience = {
  organizational: [
    {
      id: "1",
      role: "Vice of Division Relations & Communication",
      organization: "PUMA Informatics",
      period: "2025 - Present",
      category: "leadership" as const,
      description: "Supervising events and actively contributing to organizational communication and relations",
      achievements: [
        "Supervisor for multiple organizational events",
        "Active contributor in event planning & execution",
      ],
    },
    {
      id: "2",
      role: "Member of Internal Relations",
      organization: "PUMA Informatics",
      period: "2024 - 2025",
      category: "committee" as const,
      description: "Active member involved in internal events and organizational activities",
      achievements: [
        "Led internal events including welcoming & farewell ceremonies",
        "Contributed to multiple organizational events",
      ],
    },
    {
      id: "3",
      role: "Project Manager – Unitics",
      organization: "PUMA Informatics",
      period: "Dec 2024",
      category: "leadership" as const,
      description: "Led the welcoming party event for internal members of PUMA Informatics",
      achievements: [
        "Successfully managed end-to-end event planning",
        "Coordinated team for internal welcoming celebration",
      ],
    },
    {
      id: "4",
      role: "Vice Project Manager – Inforum",
      organization: "PUMA Informatics",
      period: "Jul 2025",
      category: "leadership" as const,
      description: "Co-led the farewell party event for internal members of PUMA Informatics",
      achievements: [
        "Managed event logistics and team coordination",
        "Ensured smooth execution of farewell celebration",
      ],
    },
    {
      id: "5",
      role: "Supervisor – Unitics 2025 & Workshop Alumni 2026",
      organization: "PUMA Informatics",
      period: "2025 - 2026",
      category: "leadership" as const,
      description: "Supervised welcoming event for new batch and alumni workshop on AI & Computer Vision",
      achievements: [
        "Mentored new organization members",
        "Supervised alumni workshop on AI & Computer Vision",
      ],
    },
    {
      id: "6",
      role: "Public Relations & Documentation – CODDOC Social Project",
      organization: "President University",
      period: "2025",
      category: "social" as const,
      description: "Contributed to a short-semester social project focused on community impact, handling public relations and event documentation",
      achievements: [
        "Managed public relations for the social project",
        "Handled documentation throughout the project lifecycle",
      ],
    },
    {
      id: "7",
      role: "Committee & Participant",
      organization: "Various Events",
      period: "2025 - 2026",
      category: "committee" as const,
      description: "Active involvement across diverse organizational events in different capacities",
      achievements: [
        "PR Internal & Documentation – Compsphere 2025",
        "PR Internal & MC – Company Visit, Guest Lecture by GRP 2025",
        "Logistics – Temu Alumni 2025",
        "Design & Documentation – Cool Matriculation 2025",
        "Liaison Officer – AI Powered Collective Intelligence (Faculty Event)",
        "Badminton Division – CSGO 2026",
        "Music Competition – Compscigala 2025",
        "Exhibition – Pre Bootcamp 2025",
      ],
    },
  ],
};



export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
