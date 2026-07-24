import React from 'react';
import type { TimelineNode } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

export type CareerTimelineSectionProps = {
  timeline: TimelineNode[];
};

/**
 * 경력 타임라인 섹션 컴포넌트 (다크/라이트 지원)
 * @param props CareerTimelineSectionProps
 * @returns 타임라인 섹션 엘리먼트
 */
export const CareerTimelineSection: React.FC<CareerTimelineSectionProps> = ({
  timeline,
}) => {
  const getColorClass = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return 'text-emerald-700 bg-emerald-50 border-emerald-300 dark:text-cyan-brand dark:bg-cyan-brand/10 dark:border-cyan-brand/40';
      case 'amber':
        return 'text-amber-700 bg-amber-50 border-amber-300 dark:text-amber-brand dark:bg-amber-brand/10 dark:border-amber-brand/40';
      case 'green':
        return 'text-green-700 bg-green-50 border-green-300 dark:text-green-brand dark:bg-green-brand/10 dark:border-green-brand/40';
      default:
        return 'text-slate-600 bg-slate-100 border-slate-300 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700';
    }
  };

  const getDotColorClass = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return 'bg-emerald-500 dark:bg-cyan-brand dark:shadow-[0_0_12px_rgba(0,212,170,0.6)]';
      case 'amber':
        return 'bg-amber-500 dark:bg-amber-brand dark:shadow-[0_0_12px_rgba(255,184,0,0.6)]';
      case 'green':
        return 'bg-green-500 dark:bg-green-brand dark:shadow-[0_0_12px_rgba(34,197,94,0.6)]';
      default:
        return 'bg-slate-400 dark:bg-slate-500';
    }
  };

  return (
    <section
      id="timeline"
      className="py-24 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          category="Career Path"
          title="게임에서 웹, 그리고 모바일까지의 스펙트럼"
          description="2011년부터 축적해 온 기술적 확장과 프론트엔드 전문성 성장 과정입니다."
        />

        <div className="relative pt-8 pb-4">
          {/* 타임라인 연결선 */}
          <div className="absolute left-4 md:left-1/2 top-12 bottom-12 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2" />

          <div className="space-y-12 relative">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* 도트 포인트 */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 z-10">
                    <div
                      className={`w-full h-full rounded-full ${getDotColorClass(item.colorType)}`}
                    />
                  </div>

                  {/* 콘텐츠 카드 */}
                  <div className="ml-10 md:ml-0 md:w-1/2 px-2">
                    <div
                      className={`p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-display border mb-3 ${getColorClass(
                          item.colorType
                        )}`}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {item.role}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
