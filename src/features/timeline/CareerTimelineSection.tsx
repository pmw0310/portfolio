import React from 'react';
import type { TimelineNode } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

export type CareerTimelineSectionProps = {
  timeline: TimelineNode[];
};

/**
 * 경력 타임라인 섹션 컴포넌트
 * @param props CareerTimelineSectionProps
 * @returns 타임라인 섹션 엘리먼트
 */
export const CareerTimelineSection: React.FC<CareerTimelineSectionProps> = ({
  timeline,
}) => {
  const getColorClass = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return 'text-cyan-brand bg-cyan-brand/10 border-cyan-brand/40';
      case 'amber':
        return 'text-amber-brand bg-amber-brand/10 border-amber-brand/40';
      case 'green':
        return 'text-green-brand bg-green-brand/10 border-green-brand/40';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  const getDotColorClass = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return 'bg-cyan-brand shadow-[0_0_12px_rgba(0,212,170,0.6)]';
      case 'amber':
        return 'bg-amber-brand shadow-[0_0_12px_rgba(255,184,0,0.6)]';
      case 'green':
        return 'bg-green-brand shadow-[0_0_12px_rgba(34,197,94,0.6)]';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <section
      id="timeline"
      className="py-24 bg-slate-950 px-4 md:px-8 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          category="Career Path"
          title="게임에서 웹, 그리고 모바일까지의 스펙트럼"
          description="2011년부터 축적해 온 기술적 확장과 프론트엔드 전문성 성장 과정입니다."
        />

        {/* 모바일 & 데스크탑 공용 반응형 타임라인 */}
        <div className="relative pt-8 pb-4">
          {/* 타임라인 연결 중앙 선 (데스크탑) & 좌측 선 (모바일) */}
          <div className="absolute left-4 md:left-1/2 top-12 bottom-12 w-0.5 bg-slate-800 md:-translate-x-1/2" />

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
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-900 z-10">
                    <div
                      className={`w-full h-full rounded-full ${getDotColorClass(item.colorType)}`}
                    />
                  </div>

                  {/* 콘텐츠 카드 */}
                  <div className="ml-10 md:ml-0 md:w-1/2 px-2">
                    <div
                      className={`p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg hover:border-slate-700 transition-all ${
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
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
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
