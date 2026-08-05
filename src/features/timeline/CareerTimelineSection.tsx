import React from 'react';
import type { TimelineNode } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

export type CareerTimelineSectionProps = {
  timeline: TimelineNode[];
};

/**
 * 경력 타임라인 가로 1페이지 로드맵 섹션 컴포넌트 (정적 뷰 - 선택 기능 제거)
 * @param props CareerTimelineSectionProps
 * @returns 타임라인 섹션 UI 엘리먼트
 */
export const CareerTimelineSection: React.FC<CareerTimelineSectionProps> = ({
  timeline,
}) => {
  /**
   * colorType별 뱃지 variant 반환
   */
  const getBadgeVariant = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return 'cyan';
      case 'amber':
        return 'amber';
      case 'green':
        return 'emerald';
      default:
        return 'secondary';
    }
  };

  /**
   * colorType별 도트 메인 색상 반환
   */
  const getDotColors = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return 'bg-emerald-500 dark:bg-cyan-brand shadow-[0_0_12px_rgba(0,212,170,0.8)]';
      case 'amber':
        return 'bg-amber-500 dark:bg-amber-brand shadow-[0_0_12px_rgba(255,184,0,0.8)]';
      case 'green':
        return 'bg-green-500 dark:bg-green-brand shadow-[0_0_12px_rgba(34,197,94,0.8)]';
      default:
        return 'bg-slate-400 dark:bg-slate-500 shadow-[0_0_8px_rgba(148,163,184,0.5)]';
    }
  };

  return (
    <section
      id="timeline"
      className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-x-clip relative"
    >
      {/* 은은한 배경 빔 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader category="Career Path" title="게임에서 웹, 그리고 모바일까지" />

        {/* 1페이지 가로 타임라인 컨테이너 */}
        <div className="mt-6 mb-4">
          {/* 데스크탑 가로 로드맵 (스크롤 진입 애니메이션) */}
          <div className="relative pt-10 pb-10 hidden md:block">
            {/* 중앙 가로 연결선 */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-slate-300 via-emerald-400 to-amber-400 dark:from-slate-800 dark:via-cyan-brand dark:to-amber-brand rounded-full shadow-[0_0_12px_rgba(0,212,170,0.3)] z-0" />

            <div 
              className="grid gap-3 relative z-10"
              style={{ gridTemplateColumns: `repeat(${timeline.length}, minmax(0, 1fr))` }}
            >
              {timeline.map((item, idx) => {
                const isTop = idx % 2 === 1; // 상하 지그재그 배치
                const dotColor = getDotColors(item.colorType);

                // 카드 렌더링 함수
                const renderCard = () => (
                  <div className="w-full p-3 rounded-2xl border text-center transition-all duration-200 bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-400 dark:hover:border-slate-700 hover:-translate-y-0.5 flex flex-col items-center">
                    <Badge
                      variant={getBadgeVariant(item.colorType)}
                      className="text-[10px] px-2 py-0.5 mb-1"
                    >
                      {item.year}
                    </Badge>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate w-full">
                      {item.role}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5 w-full">
                      {item.description}
                    </p>
                  </div>
                );

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: isTop ? -15 : 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                      ease: 'easeOut',
                    }}
                    className="flex flex-col items-center justify-between min-h-[250px] relative group"
                  >
                    {/* 상단 카드 영역 (홀수 index) */}
                    <div className="w-full h-[105px] flex items-end justify-center">
                      {isTop && renderCard()}
                    </div>

                    {/* 중앙 연결선 위 노드 버튼 */}
                    <div className="my-auto relative z-20 w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-white dark:bg-slate-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                      <div className={`w-3.5 h-3.5 rounded-full ${dotColor}`} />
                    </div>

                    {/* 하단 카드 영역 (짝수 index) */}
                    <div className="w-full h-[105px] flex items-start justify-center">
                      {!isTop && renderCard()}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 모바일 뷰 카드 스트립 */}
          <div className="block md:hidden overflow-x-auto pb-4 pt-2 no-scrollbar">
            <div className="flex gap-3 min-w-max px-2">
              {timeline.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl border text-left w-48 transition-all bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <Badge
                    variant={getBadgeVariant(item.colorType)}
                    className="text-[10px] px-2 py-0.5 mb-1.5"
                  >
                    {item.year}
                  </Badge>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {item.role}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

