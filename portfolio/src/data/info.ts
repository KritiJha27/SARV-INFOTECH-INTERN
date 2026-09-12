export const personalInfo = {
  name: "Kriti Jha",
  title: "B.Tech CSE Student • AI/ML Enthusiast • Developer",
  tagline: "I build intelligent, practical and user-focused technology solutions.",
  email: "kritijha@example.com",
  linkedin: "https://linkedin.com/in/kritijha",
  github: "https://github.com/kritijha",
  resumePath: "/resume.pdf",
  animatedWords: ["AI/ML", "Python", "Web Development", "Computer Vision", "Problem Solving"],
};

export const aboutContent = {
  paragraphs: [
    "I'm a B.Tech Computer Science & Engineering student with a deep interest in building technology that makes a real difference. My passion lies at the intersection of Artificial Intelligence, Machine Learning, and practical software development.",
    "From developing AI-powered yoga coaching platforms using computer vision to creating intelligent vehicle monitoring systems, I thrive on solving complex problems with innovative approaches. I believe in writing clean, efficient code and building products that users genuinely love.",
    "When I'm not coding, you'll find me exploring new ML research papers, participating in hackathons, or sharpening my problem-solving skills on competitive programming platforms.",
  ],
  currentlyLearning: ["Deep Learning & Neural Networks", "Cloud Deployment", "System Design"],
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Computer Vision",
    "Software Development",
  ],
};

export const skills = [
  {
    category: "Programming",
    items: ["C", "C++", "Python", "JavaScript"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "JavaScript", "React", "Flask"],
  },
  {
    category: "AI/ML",
    items: ["Scikit-learn", "OpenCV", "Pandas", "NumPy", "Machine Learning"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "yogsaathi",
    title: "YogSaathi",
    subtitle: "AI Yoga Coach",
    description:
      "AI-powered yoga platform using computer vision for real-time pose detection, posture feedback, personalized yoga recommendations and AI-based guidance.",
    technologies: ["Python", "OpenCV", "AI/ML", "Flask", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Real-time pose detection using computer vision",
      "Automated posture correction feedback",
      "Personalized yoga routine recommendations",
      "AI-based conversational guidance system",
    ],
  },
  {
    id: "rideguardian",
    title: "RideGuardian 360 AI",
    subtitle: "Smart Cockpit for Two-Wheelers",
    description:
      "AI + IoT smart cockpit for two-wheelers designed for accident detection, emergency response, navigation assistance and intelligent vehicle monitoring.",
    technologies: ["Arduino Uno Q", "AI/ML", "IoT", "Sensors", "GPS"],
    githubUrl: "#",
    caseStudyUrl: "#",
    highlights: [
      "Real-time accident detection using sensor fusion",
      "Automated emergency response system",
      "GPS-based navigation assistance",
      "Intelligent vehicle health monitoring",
    ],
  },
  {
    id: "factnova",
    title: "FactNova",
    subtitle: "Fake News Detection",
    description:
      "Multilingual fake-news detection web application that analyzes news content using machine-learning-based text classification.",
    technologies: ["Python", "Flask", "Scikit-learn", "TF-IDF", "Logistic Regression"],
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Multilingual content analysis support",
      "TF-IDF feature extraction pipeline",
      "Logistic Regression classification model",
      "Real-time news verification interface",
    ],
  },
];

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "internship" | "hackathon" | "competition" | "activity" | "club";
}

export const experience: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Update this with your role",
    organization: "Company / Organization Name",
    date: "2024 — Present",
    description:
      "Replace this with a brief description of your responsibilities and achievements.",
    type: "internship",
  },
  {
    id: "exp-2",
    title: "Hackathon Participant",
    organization: "Hackathon Name",
    date: "2024",
    description:
      "Add details about the hackathon — the problem you tackled, your solution, and the outcome.",
    type: "hackathon",
  },
  {
    id: "exp-3",
    title: "Technical Competition",
    organization: "Competition Name",
    date: "2024",
    description:
      "Add details about the competition and your participation/result.",
    type: "competition",
  },
  {
    id: "exp-4",
    title: "Robotics Activity",
    organization: "Club / Organization",
    date: "2023 — 2024",
    description:
      "Add details about your robotics involvement and contributions.",
    type: "activity",
  },
  {
    id: "exp-5",
    title: "College Technical Activity",
    organization: "College Name",
    date: "2023",
    description:
      "Add details about your involvement in college technical events or committees.",
    type: "activity",
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "LeetCode 50-Day Streak",
    description: "Maintained a consistent 50-day problem-solving streak on LeetCode.",
    icon: "flame",
    metric: "50",
  },
  {
    id: "ach-2",
    title: "India Skills Competition",
    description: "Participated in the India Skills Competition representing technical proficiency.",
    icon: "trophy",
  },
  {
    id: "ach-3",
    title: "Hackathon Participation",
    description: "Active participant in multiple hackathons, building innovative solutions under time constraints.",
    icon: "code",
  },
  {
    id: "ach-4",
    title: "Technical Competitions",
    description: "Achieved recognition in various college and inter-college technical competitions.",
    icon: "award",
  },
  {
    id: "ach-5",
    title: "Certifications",
    description: "Completed relevant certifications in AI/ML and software development domains.",
    icon: "certificate",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
