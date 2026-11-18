import { experiences } from '@/lib/data';
import SectionHead from './SectionHead';

export default function Experience() {
  return (
    <section className="wrap pt-[72px] md:pt-28" aria-labelledby="experience">
      <SectionHead id="experience" eyebrow="Experience" title="Where I work" />
      <ol className="border-b border-line">
        {experiences.map((e) => (
          <li key={e.id} className="grid gap-2 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10">
            <p className="eyebrow pt-1">{e.period}</p>
            <div>
              <h3 className="font-serif text-[26px] leading-tight md:text-[30px]">
                {e.role} · {e.company}
              </h3>
              <p className="mt-2 text-muted">{e.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
