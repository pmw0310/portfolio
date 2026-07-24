import React from 'react';
import type { LeadershipCard } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { SmartCountUp } from '@/components/CountUp';
import { SpotlightCard } from '@/components/SpotlightCard';

export type LeadershipSectionProps = {
  leadership: LeadershipCard[];
};

/**
 * 리더십 및 역량 섹션 컴포넌트 (SpotlightCard 스크롤 진입 및 내부 폰트 효과 제거)
 * @param props LeadershipSectionProps
 * @returns 리더십 섹션 엘리먼트
 */
export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ leadership }) => {
  return (
    <section
      id="leadership"
      className="py-24 bg-white dark:bg-slate-900 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          category="Soft Skills & Leadership"
          title="기술을 넘어, 팀과 프로세스를 이끕니다"
          description="프론트엔드 1인 독립 운영부터 주니어 멘토링, UI/UX 프로토타이핑 정착까지의 주도적인 리더십 성과입니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((item, idx) => (
            <SpotlightCard
              key={item.id}
              spotlightColor="rgba(16, 185, 129, 0.15)"
              delay={idx * 0.1}
              className="rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1 shadow-md dark:shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-cyan-brand font-bold text-lg shadow-xs">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-cyan-brand" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-baseline justify-between">
                <span className="text-3xl font-black font-display text-emerald-600 dark:text-cyan-brand">
                  <SmartCountUp value={item.metricNumber} />
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.metricLabel}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
