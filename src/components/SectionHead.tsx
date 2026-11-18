export default function SectionHead({
  eyebrow,
  title,
  aside,
  id,
}: {
  eyebrow: string;
  title: string;
  aside?: string;
  id: string;
}) {
  return (
    <div className="mb-10 flex flex-col items-start gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="mt-2 font-serif text-[38px] leading-[1.05] tracking-[-0.01em] md:text-[52px]">
          {title}
        </h2>
      </div>
      {aside && <p className="max-w-[420px] text-muted">{aside}</p>}
    </div>
  );
}
