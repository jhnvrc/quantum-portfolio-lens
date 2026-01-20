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
    title: "Sentiment Analysis Dashboard",
    description: "A web application that analyzes sentiment from social media posts using NLP techniques and displays insights in real-time.",
    features: [
      "Twitter API integration",
      "BERT-based sentiment classification",
      "Interactive data visualization",
      "Export analysis reports",
    ],
    techStack: ["Python", "Flask", "React", "TensorFlow", "Twitter API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/yourname/sentiment-dashboard",
    liveUrl: "",
    featured: true,
  },
  {
    id: "2",
    title: "Image Classification App",
    description: "A mobile-friendly web app that classifies images into categories using a custom-trained CNN model.",
    features: [
      "Real-time image upload",
      "Custom CNN model with 92% accuracy",
      "Support for 10+ object categories",
      "Model trained on custom dataset",
    ],
    techStack: ["Python", "PyTorch", "Flask", "React", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/yourname/image-classifier",
    liveUrl: "",
    featured: true,
  },
  {
    id: "3",
    title: "Chatbot with GPT Integration",
    description: "An intelligent chatbot that answers university-related FAQs using OpenAI's GPT API with custom knowledge base.",
    features: [
      "Natural language understanding",
      "Custom knowledge base",
      "Conversation history",
      "Admin dashboard for FAQ management",
    ],
    techStack: ["Python", "FastAPI", "React", "OpenAI API", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/yourname/university-chatbot",
    liveUrl: "",
    featured: false,
  },
  {
    id: "4",
    title: "Student Grade Predictor",
    description: "A machine learning model that predicts student academic performance based on various factors.",
    features: [
      "Multiple ML algorithms comparison",
      "Feature importance analysis",
      "Interactive prediction form",
      "Accuracy metrics visualization",
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/yourname/grade-predictor",
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
      role: "Head of Technical Division",
      organization: "Computer Science Student Association",
      period: "2023 - 2024",
      description: "Led technical initiatives and workshops for CS students",
      achievements: [
        "Organized 5 technical workshops with 100+ participants",
        "Mentored 20+ juniors in programming fundamentals",
        "Coordinated annual hackathon with 200+ participants",
      ],
    },
    {
      id: "2",
      role: "Core Team Member",
      organization: "Google Developer Student Club",
      period: "2022 - Present",
      description: "Active member organizing tech events and study groups",
      achievements: [
        "Led AI/ML study group with 30 members",
        "Presented workshop on Introduction to TensorFlow",
        "Helped organize Solution Challenge preparation bootcamp",
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
