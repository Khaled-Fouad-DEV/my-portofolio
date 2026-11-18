import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { TechSprite } from '@/components/TechIcon';

export default function Home() {
  return (
    <>
      <TechSprite />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="top">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
      </main>
      <Contact />
    </>
  );
}
