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
    id: 'locally-dashboard',
    title: 'Locally Dashboard',
    description: 'Admin web application for managing products, refunds, and appointments',
    longDescription: 'A comprehensive admin dashboard built with Vue.js that allows businesses to manage their products, handle refunds, and schedule appointments. Features data visualization with Chart.js and Excel export functionality.',
    image: '/locally.png',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Chart.js', 'Axios'],
    githubUrl: 'https://github.com/Khaled-Fouad-DEV/locally-dashboard',
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
    image: '/go4retails.jpg',
    technologies: ['Vue.js', 'Ionic', 'TailwindCSS', 'WebSockets', 'JavaScript'],
    githubUrl: 'https://github.com/Khaled-Fouad-DEV/go4retails-website',
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
    id: 'travel-agency',
    title: 'Travel Agency',
    description: 'Web application for travel booking and tour management',
    longDescription: 'A comprehensive travel agency platform built with React that includes tour package management, booking system, and interactive features. Features an intuitive dashboard for managing travel services and customer bookings.',
    image: '/travel-agency.jpg',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'Axios'],
    githubUrl: 'https://github.com/Khaled-Fouad-DEV/Travel-Agency',
    liveUrl: '#',
    features: [
      'Tour package management',
      'Booking system',
      'Interactive dashboard',
      'User management',
      'Responsive design',
      'Modern UI with Tailwind CSS'
    ]
  }
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
