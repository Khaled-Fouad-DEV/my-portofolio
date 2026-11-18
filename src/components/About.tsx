import Image from 'next/image';
import { Linkedin, Phone } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import photo from '../../public/photo.jpg';

export default function About() {
  return (
    <section className="wrap pt-[72px] md:pt-28" aria-labelledby="about">
      <div className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Image
          src={photo}
          alt={`Portrait of ${personalInfo.name}`}
          placeholder="blur"
          sizes="(min-width: 768px) 420px, 100vw"
          className="aspect-[4/5] w-full rounded-[20px] object-cover object-[50%_20%]"
        />
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about" className="mb-6 mt-2 font-serif text-[38px] leading-[1.05] md:text-[52px]">
            Calm interfaces over clever ones.
          </h2>
          <div className="space-y-4 text-[17px] text-muted">
            <p>
              I&apos;m a frontend engineer from Port Said. Most of what I build is used daily by people who just want it
              to work: university staff, insurance agents, shoppers. I care about the parts they never see: the token
              system behind the colours, the interceptor that retries a failed request, the RTL layout that doesn&apos;t
              break in Arabic.
            </p>
            <p>
              Full-stack work in Node.js and Spring Boot means I understand the backend behind the UI, and I write
              frontends that respect it.
            </p>
          </div>

          <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Education</dt>
              <dd className="mt-1.5">{personalInfo.education}</dd>
            </div>
            <div>
              <dt className="eyebrow">Certificate</dt>
              <dd className="mt-1.5">{personalInfo.certificate}</dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-line pt-6">
            <p className="eyebrow">Contact me</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={personalInfo.phone.href} className="btn btn-primary">
                <Phone size={16} strokeWidth={1.75} aria-hidden /> {personalInfo.phone.display}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Linkedin size={16} strokeWidth={1.75} aria-hidden /> LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
