import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khaled Fouad - Frontend Developer',
  description: 'Professional frontend developer with 2+ years experience in Vue.js, React, Next.js, and modern web technologies. Building responsive and interactive web applications.',
  keywords: ['frontend developer', 'vue.js', 'react', 'next.js', 'typescript', 'tailwind css', 'web development'],
  authors: [{ name: 'Khaled Fouad' }],
  creator: 'Khaled Fouad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khaled-fouad.vercel.app',
    title: 'Khaled Fouad - Frontend Developer',
    description: 'Professional frontend developer with 2+ years experience in Vue.js, React, Next.js, and modern web technologies.',
    siteName: 'Khaled Fouad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaled Fouad - Frontend Developer',
    description: 'Professional frontend developer with 2+ years experience in Vue.js, React, Next.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
