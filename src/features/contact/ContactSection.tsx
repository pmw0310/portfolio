import React from 'react';
import type { PersonalInfo } from '@/types/portfolio';

export type ContactSectionProps = {
  profile: PersonalInfo;
};

/**
 * 연락처 & 푸터 맺음말 섹션 컴포넌트
 * @param props ContactSectionProps
 * @returns 연락처 섹션 엘리먼트
 */
export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-950 px-4 md:px-8 overflow-hidden text-center"
    >
      {/* 그래픽 배경 라인 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,170,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white">
          THANK YOU
        </h2>

        <p className="text-xl md:text-2xl text-slate-300 font-medium">
          {profile.name} &mdash; {profile.role}
        </p>

        <p className="text-slate-400 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
          {profile.contact.email}
        </p>

        {/* 링크 버튼 */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {profile.contact.github && (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:border-cyan-brand hover:text-cyan-brand transition-all font-semibold text-sm shadow-lg"
            >
              GitHub ↗
            </a>
          )}
          {profile.contact.blog && (
            <a
              href={profile.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:border-amber-brand hover:text-amber-brand transition-all font-semibold text-sm shadow-lg"
            >
              Notion Portfolio ↗
            </a>
          )}
        </div>

        <div className="w-24 h-0.5 bg-slate-800 mx-auto pt-4" />

        <p className="text-slate-500 text-xs md:text-sm font-light">
          사용자의 문제를 발견하고, 코드로 해결합니다.
        </p>
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};
