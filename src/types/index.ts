import type { TechId } from '@/lib/techIcons';

/** Name of an illustration in public/art (light) with a matching `-dark` file. */
export type ArtName = 'hero' | 'epnu-attendance' | 'unihub-harbour' | 'epnu-admission' | 'tameennow' | 'locally';

export interface Tech {
  name: string;
  icon?: TechId;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  org: string;
  role: string;
  art: ArtName;
  summary?: string;
  points: string[];
  metrics?: Metric[];
  stack: Tech[];
  link?: { label: string; href: string };
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface Link {
  label: string;
  href: string;
}
