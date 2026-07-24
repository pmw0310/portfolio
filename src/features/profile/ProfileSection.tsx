import React from 'react';
import type { PersonalInfo, SkillGroup } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import { SpotlightCard } from '@/components/SpotlightCard';

export type ProfileSectionProps = {
  profile: PersonalInfo;
  skills: SkillGroup[];
};

/**
 * 프로필 소개 & 스킬 카테고리 섹션 컴포넌트 (다크/라이트 지원 & SpotlightCard 적용)
 * @param props ProfileSectionProps
 * @returns 프로필 섹션 엘리먼트
 */
export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile, skills }) => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          category="About Me & Skills"
          title="사용자의 문제를 발견하고, 기술로 해결하는 개발자"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 좌측 프로필 본문 및 하이라이트 */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              {profile.summary}
            </p>

            <div className="space-y-4 pt-2">
              {profile.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-l-4 border-emerald-500 dark:border-cyan-brand text-slate-800 dark:text-slate-200 text-sm md:text-base leading-snug shadow-xs border-y border-r border-slate-200 dark:border-y-transparent dark:border-r-transparent"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* 우측 기술 스택 그룹 그리드 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(6, 182, 212, 0.18)"
                className="shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-emerald-600 dark:text-cyan-brand uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <TechTag key={sIdx} name={skill.name} isPrimary={skill.isPrimary} />
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
