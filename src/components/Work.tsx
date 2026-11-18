import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import type { CaseStudy } from '@/types';
import Art from './Art';
import SectionHead from './SectionHead';
import { TechIcon } from './TechIcon';

function Meta({ c }: { c: CaseStudy }) {
  return (
    <p className="eyebrow">
      {c.org} · {c.role}
    </p>
  );
}

function Metrics({ c }: { c: CaseStudy }) {
  if (!c.metrics?.length) return null;
  return (
    <dl className="my-2 grid grid-cols-3 gap-4">
      {c.metrics.map((m) => (
        <div key={m.label}>
          <dt className="font-serif text-[30px] leading-none text-accent md:text-[40px]">{m.value}</dt>
          <dd className="mt-1 text-[13px] leading-snug text-muted">{m.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function Details({ c }: { c: CaseStudy }) {
  return (
    <>
      {c.summary && <p className="text-muted">{c.summary}</p>}
      <Metrics c={c} />
      {c.points.length > 0 && (
        <ul className="list-disc space-y-1 ps-5 text-[15px] text-muted marker:text-line">
          {c.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {c.stack.length > 0 && (
        <ul className="flex flex-wrap gap-2" aria-label="Stack">
          {c.stack.map((t) => (
            <li
              key={t.name}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-ink"
            >
              {t.icon && <TechIcon id={t.icon} />}
              {t.name}
            </li>
          ))}
        </ul>
      )}
      {c.link && (
        <a
          href={c.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover"
        >
          {c.link.label} <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
        </a>
      )}
    </>
  );
}

export default function Work() {
  const [featured, ...rest] = caseStudies;
  return (
    <section className="wrap pt-[72px] md:pt-28" aria-labelledby="work" id="work-section">
      <SectionHead
        id="work"
        eyebrow="Selected work"
        title="Case studies"
        aside="Production systems I built or led. Client code is private, so each one is told through what it does and what changed."
      />

      <article className="grid items-center gap-6 rounded-[20px] border border-line bg-surface p-5 md:grid-cols-2 md:gap-12 md:p-10">
        <Art name={featured.art} />
        <div className="flex flex-col gap-4">
          <Meta c={featured} />
          <h3 className="font-serif text-[28px] leading-[1.1] md:text-[44px]">{featured.title}</h3>
          <Details c={featured} />
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((c) => (
          <article key={c.id} className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface">
            <div className="border-b border-line px-6 pt-4">
              <Art name={c.art} />
            </div>
            <div className="flex flex-1 flex-col gap-3.5 p-5 md:px-8 md:pb-8 md:pt-7">
              <Meta c={c} />
              <h3 className="font-serif text-[28px] leading-[1.1] md:text-[34px]">{c.title}</h3>
              <Details c={c} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
