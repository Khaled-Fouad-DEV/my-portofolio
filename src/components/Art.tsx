import Image from 'next/image';
import type { ArtName } from '@/types';
import { cn } from '@/lib/cn';

/**
 * An illustration from public/art. An <img> can't read the page's CSS variables, so each
 * one exists twice (recoloured by `npm run art`) and the theme picks which is shown.
 * Lazy loading means the hidden copy is never downloaded.
 */
export default function Art({ name, className }: { name: ArtName; className?: string }) {
  const common = 'aspect-[3/2] w-full object-contain';
  return (
    <>
      <Image
        src={`/art/${name}.svg`}
        alt=""
        width={1200}
        height={800}
        unoptimized
        loading="lazy"
        className={cn(common, 'dark:hidden', className)}
      />
      <Image
        src={`/art/${name}-dark.svg`}
        alt=""
        width={1200}
        height={800}
        unoptimized
        loading="lazy"
        className={cn(common, 'hidden dark:block', className)}
      />
    </>
  );
}
