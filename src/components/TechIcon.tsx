import { TECH_PATHS, type TechId } from '@/lib/techIcons';
import { cn } from '@/lib/cn';

/** Every tech logo once, as <symbol>s. Render a single copy per page. */
export function TechSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      {Object.entries(TECH_PATHS).map(([id, d]) => (
        <symbol key={id} id={`si-${id}`} viewBox="0 0 24 24">
          <path d={d} />
        </symbol>
      ))}
    </svg>
  );
}

/** A monochrome tech logo in the current text colour. Decorative: the name sits next to it. */
export function TechIcon({ id, className }: { id: TechId; className?: string }) {
  return (
    <svg className={cn('size-[13px] shrink-0 fill-current', className)} aria-hidden="true" focusable="false">
      <use href={`#si-${id}`} />
    </svg>
  );
}
