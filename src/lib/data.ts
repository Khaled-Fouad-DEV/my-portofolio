import { Project, Experience, Skill, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: 'locally-dashboard',
    title: 'Locally Dashboard',
    description: 'Admin web application for managing products, refunds, and appointments',
    longDescription: 'A comprehensive admin dashboard built with Vue.js that allows businesses to manage their products, handle refunds, and schedule appointments. Features data visualization with Chart.js and Excel export functionality.',
    image: '/landing.png',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Chart.js', 'Axios'],
    githubUrl: 'https://github.com/Khaled-Fouad',
    liveUrl: '#',
    features: [
      'Product management system',
      'Refund processing',
      'Appointment scheduling',
      'Data visualization with Chart.js',
      'Excel export functionality',
      'Responsive design'
    ]
  },
  {
    id: 'go4retails',
    title: 'Go4Retails',
    description: 'Real estate web and mobile application with real-time features',
    longDescription: 'A comprehensive real estate platform built with Vue.js and Ionic that enables users to create posts, comment, chat in real-time, and supports multiple languages. Features dark/light mode and responsive design.',
    image: '/responsive.png',
    technologies: ['Vue.js', 'Ionic', 'TailwindCSS', 'WebSockets', 'JavaScript'],
    githubUrl: 'https://github.com/Khaled-Fouad',
    liveUrl: '#',
    features: [
      'Post creation and management',
      'Real-time commenting system',
      'Live chat functionality',
      'Multilingual support',
      'Dark/light mode toggle',
      'Mobile responsive design'
    ]
  },
  {
    id: 'hala-agency',
    title: 'Hala Agency',
    description: 'Web application with dynamic features and interactive dashboard',
    longDescription: 'A feature-rich web application built with React that includes an articles section, tour package management, and comprehensive data tables. Features an interactive dashboard with charts for key metrics visualization and role-based access control.',
    image: '/javascript.png',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'Axios'],
    githubUrl: 'https://github.com/Khaled-Fouad',
    liveUrl: '#',
    features: [
      'Articles management system',
      'Tour package management',
      'Interactive dashboard with charts',
      'User and branch management',
      'Role-based access control',
      'Responsive UI with Tailwind CSS'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 'teleoceans',
    company: 'Teleoceans',
    position: 'Front-End Developer',
    duration: 'Jan 2025 - Sep 2025',
    description: [
      'Collaborated with cross-functional teams to develop and maintain frontend features for web applications',
      'Leveraged Vue.js and VueJS to implement efficient, reusable UI components',
      'Ensured best practices in code quality and design systems',
      'Contributed to improving frontend workflows using TailwindCSS'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'TailwindCSS'],
    current: true
  },
  {
    id: 'freelancer',
    company: 'Freelancer',
    position: 'Front-End Developer',
    duration: 'Jan 2024 - Present',
    description: [
      'Built responsive web applications using Vue, HTML, CSS, JavaScript, and TailwindCSS',
      'Focused on component-based architecture and repository design pattern',
      'Delivered clean, modular code with an emphasis on performance',
      'Independently gathered requirements and deployed web solutions'
    ],
    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
    current: true
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 90, category: 'languages', icon: 'javascript' },
  { name: 'TypeScript', level: 85, category: 'languages', icon: 'typescript' },
  { name: 'HTML5', level: 95, category: 'languages', icon: 'html' },
  { name: 'CSS3', level: 90, category: 'languages', icon: 'css' },
  
  // Frontend Frameworks
  { name: 'React', level: 85, category: 'frontend', icon: 'react' },
  { name: 'Vue.js', level: 90, category: 'frontend', icon: 'vue' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: 'nextjs' },
  { name: 'Nuxt.js', level: 85, category: 'frontend', icon: 'nuxt' },
  { name: 'Ionic', level: 75, category: 'frontend', icon: 'ionic' },
  
  // Styling
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: 'tailwind' },
  { name: 'Bootstrap', level: 80, category: 'frontend', icon: 'bootstrap' },
  { name: 'SASS', level: 75, category: 'frontend', icon: 'sass' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', icon: 'git' },
  { name: 'GitHub', level: 90, category: 'tools', icon: 'github' },
  { name: 'WebStorm', level: 80, category: 'tools', icon: 'webstorm' },
  { name: 'Figma', level: 70, category: 'tools', icon: 'figma' }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Khaled-Fouad',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/khaled-fouad/',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:khaled.fouadv9@gmail.com',
    icon: 'email'
  }
];

export const personalInfo = {
  name: 'Khaled Fouad',
  title: 'Frontend Developer',
  subtitle: '2+ Years Experience',
  email: 'khaled.fouadv9@gmail.com',
  phone: '+20 01099292491',
  location: 'Egypt',
  bio: 'Passionate frontend developer with 2+ years of experience building modern web applications. Specialized in Vue.js, React, and modern JavaScript frameworks. Committed to creating clean, efficient, and user-friendly interfaces.',
  education: {
    degree: 'B.Sc. in Computer Science',
    university: 'Port Said University',
    duration: 'Sep 2019 – May 2023',
    grade: 'Very Good with Honors'
  },
  certification: {
    title: 'ITI Scholarship',
    description: 'Achieved first place in group for outstanding technical and collaborative skills. Built multiple interactive web applications using modern front-end tools and libraries.',
    skills: ['Git', 'Responsive Design', 'UI/UX Principles', 'Version Control']
  }
};
