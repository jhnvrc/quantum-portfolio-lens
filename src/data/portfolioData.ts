// Portfolio Data - Edit this file to customize your portfolio

export const personalInfo = {
  name: "Your Name",
  headline: "AI/ML Enthusiast & Computer Science Student",
  tagline: "Aspiring AI Engineer passionate about building intelligent solutions",
  email: "yourname@university.edu",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  availability: true,
  availabilityText: "Open for Internship",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  cvUrl: "/cv.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/yourname",
    github: "https://github.com/yourname",
    instagram: "https://instagram.com/yourname",
    twitter: "https://twitter.com/yourname",
    whatsapp: "https://wa.me/6281234567890",
  },
};

export const aboutMe = {
  introduction: `I'm a third-year Computer Science student with a strong passion for Artificial Intelligence and Machine Learning. Currently exploring how AI can solve real-world problems, from natural language processing to computer vision applications.

I love building projects that combine my theoretical knowledge with practical implementation. When I'm not studying or coding, you'll find me participating in hackathons, contributing to open-source, or exploring the latest AI research papers.`,
  
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Indonesia",
      year: "2022 - Present (Expected 2026)",
      gpa: "3.75/4.00",
      highlights: ["Concentration in Artificial Intelligence", "Dean's List 2023"],
    },
    {
      degree: "High School Diploma (Science Track)",
      institution: "SMA Negeri 1 Jakarta",
      year: "2019 - 2022",
      gpa: "92.5/100",
      highlights: ["Science Olympiad Finalist", "Top 10% of graduating class"],
    },
  ],
  
  goals: [
    "Secure an AI/ML internship at a leading tech company",
    "Complete my undergraduate thesis on NLP applications",
    "Contribute to meaningful open-source AI projects",
    "Build a startup that leverages AI for social impact",
  ],
};

export const skills = {
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "SQL"],
    },
    {
      name: "Artificial Intelligence",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
    },
    {
      name: "Machine Learning",
      skills: ["Deep Learning", "NLP Basics", "Computer Vision", "Neural Networks"],
    },
    {
      name: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    },
    {
      name: "Web Development",
      skills: ["React", "Node.js", "Flask", "Tailwind CSS"],
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Google Colab", "VS Code"],
    },
  ],
};

export const projects = [
  {
    id: "1",
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
    githubUrl: "https://github.com/yourname/study-buddy",
    liveUrl: "",
    featured: true,
  },
  {
    id: "2",
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
    githubUrl: "https://github.com/yourname/bisindo-recognition",
    liveUrl: "",
    featured: true,
  },
  {
    id: "3",
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
    githubUrl: "https://github.com/yourname/coffee-shop-app",
    liveUrl: "",
    featured: true,
  },
  {
    id: "4",
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
    githubUrl: "https://github.com/yourname/pallpaws",
    liveUrl: "",
    featured: false,
  },
  {
    id: "5",
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
    githubUrl: "https://github.com/yourname/ai-image-processing",
    liveUrl: "",
    featured: false,
  },
  {
    id: "6",
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
    githubUrl: "https://github.com/yourname/sentra",
    liveUrl: "",
    featured: false,
  },
  {
    id: "7",
    title: "Hypothermia – 3D Survival Game",
    description: "A 3D survival game built as the final project for 3D Computer Graphics & Animation course. Players must survive hypothermia conditions in a snowy environment with crafting and resource management mechanics.",
    features: [
      "3D environment with snow & weather effects",
      "Survival mechanics (temperature, resources)",
      "Character animation & physics",
      "Multiplayer-ready architecture",
    ],
    techStack: ["Unity", "C#", "3D Modeling", "Blender", "Animation"],
    image: "hypothermia",
    githubUrl: "https://github.com/yourname/hypothermia-game",
    liveUrl: "",
    featured: false,
  },
];

export const certificates = [
  {
    id: "1",
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford/DeepLearning.AI)",
    year: "2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    credentialUrl: "https://coursera.org/verify/specialization",
  },
  {
    id: "2",
    title: "Deep Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    year: "2023",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    credentialUrl: "https://coursera.org/verify/specialization",
  },
  {
    id: "3",
    title: "Python for Data Science",
    issuer: "IBM (Cognitive Class)",
    year: "2023",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    credentialUrl: "https://cognitiveclass.ai/verify",
  },
  {
    id: "4",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    credentialUrl: "https://google.com/verify",
  },
];

export const experience = {
  professional: [
    {
      id: "1",
      role: "AI/ML Intern",
      company: "Tech Startup Indonesia",
      location: "Jakarta, Indonesia",
      period: "Jun 2024 - Aug 2024",
      description: "Summer internship focusing on NLP model development",
      responsibilities: [
        "Developed text classification models for customer feedback",
        "Created data preprocessing pipelines for training data",
        "Assisted in deploying ML models to production",
        "Wrote technical documentation for ML workflows",
      ],
      achievements: [
        "Improved model accuracy by 15% through data augmentation",
        "Received positive feedback for proactive learning",
      ],
    },
    {
      id: "2",
      role: "Teaching Assistant - Data Structures",
      company: "Universitas Indonesia",
      location: "Depok, Indonesia",
      period: "Feb 2024 - Jun 2024",
      description: "Assisted professor in teaching undergraduate data structures course",
      responsibilities: [
        "Conducted weekly lab sessions for 30+ students",
        "Graded assignments and provided constructive feedback",
        "Held office hours to help struggling students",
        "Created supplementary learning materials",
      ],
      achievements: [
        "Helped improve class average by 10%",
        "Received 4.8/5 rating from student feedback",
      ],
    },
  ],
  organizational: [
    {
      id: "1",
      role: "Vice of Division Relations & Communication",
      organization: "PUMA Informatics",
      period: "2025 - Present",
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
      description: "Supervised welcoming event for new batch and alumni workshop on AI & Computer Vision",
      achievements: [
        "Mentored new organization members",
        "Supervised alumni workshop on AI & Computer Vision",
      ],
    },
    {
      id: "6",
      role: "Public Relations & Documentation",
      organization: "Various Events (Compsphere, CODDOC, Company Visit)",
      period: "2025",
      description: "Served as Public Relations Internal, MC, and documentation across multiple events",
      achievements: [
        "MC for Company Visit – Guest Lecture by GRP",
        "PR Internal & documentation for Compsphere and CODDOC Social Project",
      ],
    },
    {
      id: "7",
      role: "Committee & Participant",
      organization: "Various Events",
      period: "2025 - 2026",
      description: "Active involvement across diverse organizational events in different capacities",
      achievements: [
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

export const achievements = [
  {
    id: "1",
    title: "Top 10 - National AI Hackathon 2024",
    category: "Competition",
    description: "Reached finals among 150+ teams with an AI-powered health diagnosis app",
    year: "2024",
    icon: "Trophy",
  },
  {
    id: "2",
    title: "Best Project Award - AI/ML Course",
    category: "Academic",
    description: "Received highest marks for sentiment analysis capstone project",
    year: "2024",
    icon: "Award",
  },
  {
    id: "3",
    title: "Dean's List",
    category: "Academic",
    description: "Recognized for maintaining GPA above 3.5 for three consecutive semesters",
    year: "2023-2024",
    icon: "Star",
  },
  {
    id: "4",
    title: "Scholarship Recipient",
    category: "Academic",
    description: "Awarded merit-based scholarship for academic excellence",
    year: "2022-Present",
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
