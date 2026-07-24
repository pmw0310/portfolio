import React from 'react';
import type { LeadershipCard } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { SmartCountUp } from '@/components/CountUp';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Users, BookOpen, LayoutGrid } from 'lucide-react';

export type LeadershipSectionProps = {
  leadership: LeadershipCard[];
};

const iconMap = [
  <Users key="users" className="w-5 h-5 text-emerald-600 dark:text-cyan-brand" />,
  <BookOpen key="book" className="w-5 h-5 text-amber-500 dark:text-amber-brand" />,
  <LayoutGrid key="grid" className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
];

/**
 * 소프트 스킬(Soft Skills) 및 프로세스 개선 섹션 컴포넌트
 * @param props LeadershipSectionProps
 * @returns Soft Skills 섹션 엘리먼트
 */
export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ leadership }) => {
  return (
    <section
      id="leadership"
      className="py-24 bg-white dark:bg-slate-900 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader category="Soft Skills" title="기술을 넘어, 팀과 프로세스" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((item, idx) => (
            <SpotlightCard
              key={item.id}
              spotlightColor="rgba(16, 185, 129, 0.15)"
              delay={idx * 0.1}
              className="rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1 shadow-md dark:shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-950 border border-emerald-100 dark:border-slate-800 flex items-center justify-center shadow-xs">
                  {iconMap[idx % iconMap.length]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-baseline justify-between">
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
