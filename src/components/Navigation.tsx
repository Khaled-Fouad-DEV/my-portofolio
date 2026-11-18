'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navLinks, personalInfo } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="font-serif text-[26px] leading-none text-ink">
          {personalInfo.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex gap-7 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={personalInfo.resume} download className="btn btn-primary hidden sm:inline-flex">
            Resume
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Always mounted so it can fade out; `invisible` takes it out of the tab order
          and the accessibility tree once closed. */}
      <nav
        id="mobile-menu"
        aria-label="Sections"
        className={cn(
          'absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-paper transition-[opacity,transform,visibility] duration-200 ease-out md:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <ul className="wrap flex flex-col py-3">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a
                ref={i === 0 ? firstLink : undefined}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center border-b border-line font-serif text-2xl text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a href={personalInfo.resume} download className="btn btn-primary w-full" onClick={() => setOpen(false)}>
              Download resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
