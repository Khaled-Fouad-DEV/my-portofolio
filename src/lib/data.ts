import { Project, Experience, Skill, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: 'locally-ecommerce',
    title: 'Locally E-Commerce',
    description: 'Modern e-commerce platform with multilingual support and optimized performance',
    longDescription: 'A full-featured e-commerce platform built with Vue.js and Nuxt.js, delivering a seamless shopping experience. Features include bilingual support (Arabic/English), lazy loading for optimal performance, Pinia state management, and a modern UI built with Tailwind CSS. The platform offers product browsing, category management, brand showcases, and responsive design for all devices.',
    image: '/locally.png',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Lazy Loading'],
    githubUrl: '#',
    liveUrl: 'https://locallyeg.com/',
    features: [
      'Full e-commerce functionality with product catalog',
      'Bilingual support (Arabic/English)',
      'Optimized performance with lazy loading',
      'Pinia state management for efficient data handling',
      'Modern UI with Tailwind CSS',
      'Responsive design for all devices',
      'Brand showcases and category management',
      'TypeScript for type-safe development'
    ]
  },
  {
    id: 'course-finisher',
    title: 'Course Finisher',
    description: 'Full-stack mobile app that lets you study YouTube courses in-app with smart reminders to stay consistent',
    longDescription: 'A full-stack mobile application built with Ionic, Angular, and Node.js that integrates the YouTube API to bring video courses directly into the app for a focused study experience. Features built-in YouTube search so users can find and add courses without leaving the app. Uses Firebase Cloud Messaging to send push notifications reminding users if they skip a day without studying, helping them stay on track and build consistent learning habits.',
    image: '/course-finisher.png',
    technologies: ['Ionic', 'Angular', 'Node.js', 'YouTube API', 'Firebase', 'TypeScript'],
    liveUrl: 'https://course-finisher.vercel.app/',
    features: [
      'YouTube video playback directly inside the app',
      'YouTube search integration for finding courses',
      'Firebase push notifications for daily study reminders',
      'Skip-day detection to keep users accountable',
      'Full-stack architecture with Node.js backend',
      'Mobile-first responsive design with Ionic',
      'Course progress tracking',
      'Clean study-focused interface'
    ]
  },
  {
    id: 'meeting-room-booking',
    title: 'Enterprise Meeting Scheduler',
    description: 'Full-stack room booking system for managing meeting rooms across large buildings with a reactive calendar',
    longDescription: 'A full-stack enterprise meeting room booking application built with React, Node.js, and MySQL. Designed for organizations with large buildings containing multiple meeting rooms. Admins can control room availability (active/inactive), while users book meetings through an interactive reactive calendar with a visual timeline. Built with clean architecture principles, featuring Redux Toolkit for state management, Material-UI components, and FullCalendar for the scheduling interface.',
    image: '/book-meeting.png',
    technologies: ['React', 'Node.js', 'MySQL', 'TypeScript', 'Redux Toolkit', 'Material-UI'],
    githubUrl: 'https://github.com/youssefhemdan217/FMRB_Dev',
    features: [
      'Reactive calendar with timeline for booking meetings',
      'Room control panel to activate/deactivate rooms',
      'Room browsing and filtering',
      'Full CRUD booking management',
      'Real-time room availability tracking',
      'Analytics dashboard',
      'Responsive design for all devices',
      'Clean architecture with monorepo structure'
    ]
  },
  {
    id: 'docs-reader',
    title: 'Docs Reader',
    description: 'Open-source documentation platform that turns Markdown files into a beautiful, searchable website',
    longDescription: 'A comprehensive documentation platform built with React and Docusaurus that transforms Markdown files into organized, browsable documentation pages — similar to Docker or React docs. Features a clean sidebar navigation, full-text search, syntax-highlighted code blocks, and multiple doc sections including Getting Started guides, API References, and project-specific documentation. Supports 6+ projects with 50+ pages of structured content.',
    image: '/document app.png',
    technologies: ['React', 'Docusaurus', 'Markdown', 'JavaScript', 'CSS'],
    liveUrl: 'https://docs-reader.vercel.app/',
    features: [
      'Markdown to website conversion with live rendering',
      'Sidebar navigation with organized doc sections',
      'Full-text search across all documentation',
      'Syntax-highlighted code blocks',
      'Multiple project documentation support',
      'Responsive design with dark theme',
      'Getting Started, Guides, and API Reference sections',
      'Deployed on Vercel for fast global access'
    ]
  },
];

export const experiences: Experience[] = [
  {
    id: 'current-position',
    company: 'Insuretekk',
    position: 'Mid-Level Full Stack Developer',
    duration: 'Present',
    description: [
      'Developing and maintaining full-stack web applications using Angular, Node.js, and Ionic',
      'Building scalable and efficient solutions across frontend and backend architectures',
      'Mentoring a small team of junior developers, providing guidance on best practices and code reviews',
      'Collaborating with cross-functional teams to deliver high-quality software solutions'
    ],
    technologies: ['Angular', 'Node.js', 'Ionic', 'TypeScript', 'JavaScript'],
    current: true
  },
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
    technologies: ['Vue.js', 'Nuxt.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
    current: false
  },
  {
    id: 'freelancer',
    company: 'Freelancer',
    position: 'Front-End Developer',
    duration: 'Jan 2024 - Present',
    description: [
      'Built responsive full-stack web applications using Vue, React, Next.js, Node.js, HTML, CSS, JavaScript, and TailwindCSS',
      'Developed RESTful APIs and database solutions using MongoDB and MySQL',
      'Focused on component-based architecture and repository design pattern',
      'Delivered clean, modular code with an emphasis on performance and scalability',
      'Independently gathered requirements and deployed complete web solutions from frontend to backend'
    ],
    technologies: ['Vue.js', 'React', 'Next.js', 'Node.js', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
    current: false
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
  { name: 'Redux', level: 75, category: 'frontend', icon: 'redux' },
  
  // Styling
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: 'tailwind' },
  { name: 'Bootstrap', level: 80, category: 'frontend', icon: 'bootstrap' },
  { name: 'SASS', level: 75, category: 'frontend', icon: 'sass' },
  { name: 'shadcn/ui', level: 70, category: 'frontend', icon: 'shadcn' },
  
  // Backend Technologies
  { name: 'Node.js', level: 85, category: 'backend', icon: 'nodejs' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: 'mongodb' },
  { name: 'MySQL', level: 75, category: 'backend', icon: 'mysql' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', icon: 'git' },
  { name: 'GitHub', level: 90, category: 'tools', icon: 'github' },
  { name: 'WebStorm', level: 80, category: 'tools', icon: 'webstorm' },
  { name: 'Figma', level: 70, category: 'tools', icon: 'figma' }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Khaled-Fouad-DEV',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/khaled-fouad-96a981285/',
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
  title: 'Full Stack Developer',
  subtitle: '2+ Years Experience',
  email: 'khaled.fouadv9@gmail.com',
  phone: '+20 01099292491',
  location: 'Egypt',
  bio: 'Passionate full stack developer with 2+ years of experience building modern web applications from frontend to backend. Specialized in Vue.js, React, Next.js, Node.js, and modern JavaScript frameworks. Experienced with MongoDB and MySQL databases. Committed to creating clean, efficient, and scalable full-stack solutions.',
  education: {
    degree: 'B.Sc. in Computer Science',
    university: 'Port Said University',
    duration: 'Sep 2019 – May 2023',
    grade: 'Very Good with Honors'
  },
  certification: {
    title: 'ITI Scholarship',
    description: 'Achieved first place in group for outstanding technical and collaborative skills. Built multiple interactive web applications using modern front-end tools and libraries.',
    skills: ['Git', 'Responsive Design', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS', 'UI/UX Principles', 'Version Control']
  }
};
