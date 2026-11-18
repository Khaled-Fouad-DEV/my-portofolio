import { skillGroups } from '@/lib/data';
import SectionHead from './SectionHead';

export default function Skills() {
  return (
    <section className="wrap pt-[72px] md:pt-28" aria-labelledby="skills">
      <SectionHead id="skills" eyebrow="Toolbox" title="Skills" />
      <dl className="grid md:grid-cols-2 md:gap-x-12">
        {skillGroups.map((g) => (
          <div key={g.label} className="grid gap-1 border-t border-line py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
            <dt className="eyebrow pt-0.5">{g.label}</dt>
            <dd>{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
