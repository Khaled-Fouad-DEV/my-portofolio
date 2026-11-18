import { ArrowRight, Download } from 'lucide-react';
import { dailyStack, heroFacts, personalInfo } from '@/lib/data';
import Art from './Art';
import { TechIcon } from './TechIcon';

export default function Hero() {
  return (
    <section className="wrap grid items-center gap-8 pb-10 pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-20 lg:pt-24">
      <div className="rise">
        <p className="eyebrow">
          {personalInfo.title} · {personalInfo.location}
        </p>
        <h1 className="mb-6 mt-5 font-serif text-[46px] leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-[76px]">
          {personalInfo.headline}
        </h1>
        <p className="mb-9 max-w-[560px] text-[17px] leading-relaxed text-muted lg:text-[19px]">{personalInfo.lead}</p>

        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#work" className="btn btn-primary">
            View selected work <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
          </a>
          <a href={personalInfo.resume} download className="btn btn-ghost">
            Download resume <Download size={16} strokeWidth={1.75} aria-hidden />
          </a>
        </div>

        <dl className="grid border-y border-line sm:grid-cols-3">
          {heroFacts.map((f, i) => (
            <div
              key={f.value}
              className={i === 0 ? 'py-5' : 'border-t border-line py-5 sm:border-s sm:border-t-0 sm:ps-6'}
            >
              <dt className="font-serif text-[28px] leading-tight">{f.value}</dt>
              <dd className="text-sm text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7">
          <p className="eyebrow">Daily stack</p>
          <ul className="mt-3 flex flex-wrap gap-x-[22px] gap-y-2.5">
            {dailyStack.map((t) => (
              <li
                key={t.name}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <TechIcon id={t.icon} className="size-[18px]" />
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-art">
        <Art name="hero" />
      </div>
    </section>
  );
}
