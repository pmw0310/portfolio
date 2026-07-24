import React from 'react';
import type { PersonalInfo } from '@/types/portfolio';

export type ContactSectionProps = {
  profile: PersonalInfo;
};

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-100 dark:bg-slate-950 px-4 md:px-8 overflow-hidden text-center transition-colors"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,170,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-white">
          THANK YOU
        </h2>

        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
          {profile.name} &mdash; {profile.role}
        </p>

        <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
          {profile.contact.email}
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {profile.contact.github && (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-emerald-500 dark:hover:border-cyan-brand hover:text-emerald-600 dark:hover:text-cyan-brand transition-all font-semibold text-sm shadow-md"
            >
              GitHub ↗
            </a>
          )}
          {profile.contact.blog && (
            <a
              href={profile.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-amber-500 dark:hover:border-amber-brand hover:text-amber-600 dark:hover:text-amber-brand transition-all font-semibold text-sm shadow-md"
            >
              Notion Portfolio ↗
            </a>
          )}
        </div>

        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-800 mx-auto pt-4" />

        <p className="text-slate-500 text-xs md:text-sm font-light">
          사용자의 문제를 발견하고, 코드로 해결합니다.
        </p>
        <p className="text-slate-500 dark:text-slate-600 text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};
