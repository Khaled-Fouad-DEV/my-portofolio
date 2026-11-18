import { personalInfo } from '@/lib/data';

const newTab = <span className="sr-only"> (opens in a new tab)</span>;

const pill =
  'inline-flex h-11 items-center justify-center rounded-full border border-inverse-line px-5 text-[15px] font-medium text-inverse-fg transition-colors hover:border-inverse-accent';

export default function Contact() {
  return (
    // The top border separates the band from the page in dark mode, where both are dark.
    <footer
      id="contact"
      className="mt-[72px] border-t border-inverse-line bg-inverse py-16 text-inverse-fg md:mt-28 md:py-24"
    >
      <div className="wrap">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-inverse-muted">Contact</p>
        <h2 className="mb-8 mt-3 max-w-[820px] font-serif text-[40px] leading-[1.05] md:text-[64px]">
          Building something that needs a frontend lead?
        </h2>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block break-all border-b border-inverse-accent py-1 font-serif text-[26px] text-inverse-fg sm:text-4xl"
        >
          {personalInfo.email}
        </a>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={personalInfo.phone.href} className={pill}>
            {personalInfo.phone.display}
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
            LinkedIn{newTab}
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={pill}>
            GitHub{newTab}
          </a>
          <a href={personalInfo.resume} download className={pill}>
            Resume (PDF)
          </a>
        </div>
        <div className="mt-[72px] flex flex-wrap justify-between gap-4 border-t border-inverse-line pt-7 text-[13px] text-inverse-muted">
          <span>
            © {new Date().getFullYear()} {personalInfo.name} · {personalInfo.location}
          </span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
