import type { CaseStudy, Experience, Link, SkillGroup, Tech } from '@/types';

// Content mirrors the résumé of 2026-11-18 (public/khaled-fouad-resume.pdf).
// Numbers here are the résumé's own; don't add figures that aren't in it.

export const personalInfo = {
  name: 'Khaled Fouad',
  title: 'Senior Frontend Engineer',
  location: 'Port Said, Egypt',
  email: 'khaled.fouadv9@gmail.com',
  phone: { display: '+20 109 929 2491', href: 'tel:+201099292491' },
  resume: '/khaled-fouad-resume.pdf',
  linkedin: 'https://www.linkedin.com/in/khaled-fouad-96a981285/',
  github: 'https://github.com/Khaled-Fouad-DEV',
  headline: 'Frontend for products people rely on, on the web and in their pocket.',
  lead: 'I lead frontend work at Insuretekk and East Port Said National University: design systems, component architecture and bilingual English / Arabic apps in React, Angular and Ionic.',
  education: 'B.Sc. Computer Science, Port Said University · 2019–2023 · Very Good with Honors',
  certificate: 'ITI Scholarship: first place in group',
};

export const heroFacts = [
  { value: '2 teams', label: 'frontend lead, today' },
  { value: 'Web + mobile', label: 'React, Angular, iOS, Android' },
  { value: 'EN / AR', label: 'RTL-first products' },
];

export const dailyStack: Required<Tech>[] = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Angular', icon: 'angular' },
  { name: 'Ionic', icon: 'ionic' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Spring Boot', icon: 'spring' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'epnu-attendance',
    title: 'Attendance & HR Platform',
    org: 'EPNU',
    role: '2026 · Built from scratch',
    art: 'epnu-attendance',
    featured: true,
    summary:
      "The university's staff attendance and HR system: schedules, leave approvals, contracts, an attendance calendar and a live dashboard, with Excel and fingerprint imports and push notifications.",
    points: [],
    metrics: [
      { value: '93', label: 'test files (Vitest)' },
      { value: 'RBAC', label: 'token-driven access' },
      { value: 'Live', label: 'in production for staff' },
    ],
    stack: [
      { name: 'React 19', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS 4', icon: 'tailwind' },
    ],
  },
  {
    id: 'unihub-harbour',
    title: 'UNIHUB refactor & the Harbour design system',
    org: 'EPNU',
    role: 'Refactor lead',
    art: 'unihub-harbour',
    metrics: [
      { value: '268', label: 'views migrated' },
      { value: '~21k', label: 'lines of inline JS removed' },
      { value: '10k', label: 'line stylesheet retired' },
    ],
    points: [
      'Component-based architecture for the university management system.',
      'Harbour: light / dark tokens, plus a role-aware Ctrl+K search with Arabic, English and Franco synonyms.',
    ],
    stack: [
      { name: 'CodeIgniter 4', icon: 'codeigniter' },
      { name: 'Bootstrap 5 RTL', icon: 'bootstrap' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    id: 'tameennow',
    title: 'TameenNow Portal',
    org: 'Insuretekk',
    role: 'Lead developer',
    art: 'tameennow',
    summary: 'Insurance agent app in production on Android and iOS.',
    points: [
      'Full lead lifecycle: documents, quotations, payment proof, policy issuance.',
      'Real-time chat on Firebase, FCM push and Crashlytics.',
      'Odoo CRM through a layered interceptor chain (auth, retry, error normalisation); EN / AR via Transloco.',
    ],
    stack: [
      { name: 'Angular 20', icon: 'angular' },
      { name: 'Ionic 8', icon: 'ionic' },
      { name: 'Capacitor 8', icon: 'capacitor' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    id: 'epnu-admission',
    title: 'Admission Platform',
    org: 'EPNU',
    role: 'Frontend lead, team of 5',
    art: 'epnu-admission',
    points: [
      'Registration, document review, nominations and payments, Arabic RTL.',
      'Raised Lighthouse scores with a lean esbuild bundle, self-hosted fonts and content-hashed assets.',
    ],
    stack: [
      { name: 'Django templates', icon: 'django' },
      { name: 'Tailwind CSS 4', icon: 'tailwind' },
      { name: 'Alpine.js', icon: 'alpine' },
    ],
  },
  {
    id: 'locally',
    title: 'Locally',
    org: 'Teleoceans',
    role: 'Frontend',
    art: 'locally',
    summary: 'Live storefront for local Egyptian fashion brands.',
    points: [
      'RTL layouts, Arabic typography and next-i18next localisation.',
      'Core Web Vitals work: SSR, lazy loading, CDN image delivery; team styling moved to Tailwind v4.',
    ],
    stack: [],
    link: { label: 'Visit locallyeg.com', href: 'https://locallyeg.com' },
  },
];

export const experiences: Experience[] = [
  {
    id: 'epnu',
    role: 'Senior Frontend Developer',
    company: 'EPNU',
    period: 'Jul 2026 — now',
    summary:
      "Own the frontend of East Port Said National University's management platforms: Attendance & HR, UNIHUB and Admission.",
  },
  {
    id: 'insuretekk',
    role: 'Senior Frontend Developer',
    company: 'Insuretekk',
    period: 'Oct 2025 — now',
    summary:
      "Promoted to senior; lead a small frontend team: plan and assign work, review code, mentor juniors, coordinate with backend and product. Leading TameenNow Fidelity's PayTabs → N-Genius payment migration and security hardening.",
  },
  {
    id: 'self-employed',
    role: 'Full-Stack Developer',
    company: 'Self-employed',
    period: 'Jan 2025 — now',
    summary:
      'End-to-end apps with Next.js and Node.js, TanStack Query, React Hook Form and Zod; AWS Cognito, S3 presigned uploads, CI/CD with Bitbucket Pipelines and Docker.',
  },
  {
    id: 'teleoceans',
    role: 'Front-End Developer',
    company: 'Teleoceans',
    period: 'Jan 2025 — Feb 2026',
    summary:
      'Responsive client apps from UI/UX designs, including Locally; RTL and localisation; moved team styling to Tailwind CSS v4.',
  },
];

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', items: 'React, Next.js, Angular, TypeScript, JavaScript, HTML, CSS' },
  { label: 'Mobile', items: 'Ionic, Capacitor (Android & iOS), Firebase, store releases' },
  { label: 'UI & styling', items: 'Tailwind CSS, design systems, Bootstrap 5, RTL / Arabic layouts' },
  { label: 'State, data, forms', items: 'TanStack Query, RxJS, React Hook Form, Zod, Transloco, next-i18next' },
  { label: 'Backend', items: 'Node.js (Express, NestJS, Fastify), Spring Boot, REST, WebSockets, AWS' },
  { label: 'Data & infra', items: 'PostgreSQL, MySQL, Redis, Kafka, Docker, Vite, CI/CD' },
  { label: 'Practice', items: 'RBAC, CQRS, design patterns, Vitest, code review, mentoring' },
];

export const navLinks: Link[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
