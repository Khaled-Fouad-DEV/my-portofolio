import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { personalInfo } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

const title = `${personalInfo.name} — ${personalInfo.title}`;
const description =
  'Senior Frontend Engineer in Port Said, Egypt. Leads frontend at Insuretekk and East Port Said National University: design systems, component architecture and bilingual English/Arabic web and mobile apps in React, Angular and Ionic.';

export const metadata: Metadata = {
  metadataBase: new URL('https://khaled-fouad.vercel.app'),
  title,
  description,
  keywords: [
    'senior frontend engineer',
    'react',
    'angular',
    'ionic',
    'next.js',
    'design systems',
    'RTL',
    'Arabic',
    'Egypt',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title,
    description,
    siteName: personalInfo.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1110' },
  ],
};

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
