import React, { useState } from 'react';
import type { TimelineNode } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import BorderGlow from '@/components/BorderGlow';
import { TechTag } from '@/components/TechTag';
import SplitText from '@/components/SplitText';
import { motion, AnimatePresence } from 'motion/react';

export type CareerTimelineSectionProps = {
  timeline: TimelineNode[];
};

/**
 * 경력 타임라인 가로 1페이지 로드맵 섹션 컴포넌트
 * 이중 박스 잘림 없는 깔끔한 세련된 모던 미니 카드로 정돈된 가로 타임라인
 * @param props CareerTimelineSectionProps
 * @returns 타임라인 섹션 UI 엘리먼트
 */
export const CareerTimelineSection: React.FC<CareerTimelineSectionProps> = ({
  timeline,
}) => {
  // 선택된 마일스톤 ID 상태 (기본값: 최신 노드)
  const [selectedId, setSelectedId] = useState<string | null>(
    timeline.length > 0 ? timeline[timeline.length - 1].id : null
  );

  /**
   * colorType별 뱃지 스타일 반환
   */
  const getBadgeStyle = (type: TimelineNode['colorType']) => {
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

  /**
   * colorType별 BorderGlow HSL 색상값 반환
   */
  const getGlowColor = (type: TimelineNode['colorType']) => {
    switch (type) {
      case 'cyan':
        return '170 100 50';
      case 'amber':
        return '40 100 50';
      case 'green':
        return '140 85 45';
      default:
        return '215 25 60';
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

  const activeNode = timeline.find((item) => item.id === selectedId) || timeline[0];

  return (
    <section
      id="timeline"
      className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden relative"
    >
      {/* 은은한 배경 빔 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          category="Career Path"
          title="게임에서 웹, 그리고 모바일까지의 성장 스펙트럼"
          description="2011년부터 축적해 온 프론트엔드 및 임베디드 기술 성장 흐름입니다."
        />

        {/* 1페이지 가로 타임라인 컨테이너 */}
        <div className="mt-6 mb-4">
          {/* 데스크탑 7컬럼 가로 로드맵 */}
          <div className="relative pt-10 pb-10 hidden md:block">
            {/* 중앙 가로 연결선 */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-slate-300 via-emerald-400 to-amber-400 dark:from-slate-800 dark:via-cyan-brand dark:to-amber-brand rounded-full shadow-[0_0_12px_rgba(0,212,170,0.3)] z-0" />

            <div className="grid grid-cols-7 gap-3 relative z-10">
              {timeline.map((item, idx) => {
                const isTop = idx % 2 === 1; // 상하 지그재그 배치
                const isSelected = selectedId === item.id;
                const dotColor = getDotColors(item.colorType);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-between min-h-[250px] relative group"
                  >
                    {/* 상단 카드 영역 (홀수 index) */}
                    <div className="w-full h-[105px] flex items-end justify-center">
                      {isTop && (
                        <button
                          onClick={() => setSelectedId(item.id)}
                          className={`w-full p-3 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-white dark:bg-slate-900 border-emerald-400 dark:border-cyan-brand shadow-[0_0_20px_rgba(0,212,170,0.2)] ring-2 ring-emerald-400/40 dark:ring-cyan-brand/40 -translate-y-1'
                              : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:-translate-y-0.5'
                          }`}
                        >
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold font-display border mb-1 shadow-2xs ${getBadgeStyle(
                              item.colorType
                            )}`}
                          >
                            {item.year}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {item.role}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {item.description}
                          </p>
                        </button>
                      )}
                    </div>

                    {/* 중앙 연결선 위 노드 버튼 */}
                    <button
                      onClick={() => setSelectedId(item.id)}
                      className="my-auto relative z-20 w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-white dark:bg-slate-900 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-125 focus:outline-none"
                      title={`${item.year} - ${item.role}`}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 rounded-full animate-ping opacity-40 bg-emerald-400 dark:bg-cyan-brand" />
                      )}
                      <div className={`w-3.5 h-3.5 rounded-full ${dotColor}`} />
                    </button>

                    {/* 하단 카드 영역 (짝수 index) */}
                    <div className="w-full h-[105px] flex items-start justify-center">
                      {!isTop && (
                        <button
                          onClick={() => setSelectedId(item.id)}
                          className={`w-full p-3 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-white dark:bg-slate-900 border-emerald-400 dark:border-cyan-brand shadow-[0_0_20px_rgba(0,212,170,0.2)] ring-2 ring-emerald-400/40 dark:ring-cyan-brand/40 translate-y-1'
                              : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:translate-y-0.5'
                          }`}
                        >
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold font-display border mb-1 shadow-2xs ${getBadgeStyle(
                              item.colorType
                            )}`}
                          >
                            {item.year}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {item.role}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {item.description}
                          </p>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 모바일 뷰 카드 스트립 */}
          <div className="block md:hidden overflow-x-auto pb-4 pt-2 no-scrollbar">
            <div className="flex gap-3 min-w-max px-2">
              {timeline.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`p-3.5 rounded-2xl border text-left w-48 transition-all ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 border-emerald-400 dark:border-cyan-brand shadow-md ring-2 ring-emerald-400/30 dark:ring-cyan-brand/30'
                        : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border mb-1.5 ${getBadgeStyle(
                        item.colorType
                      )}`}
                    >
                      {item.year}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.role}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 하단 선택된 마일스톤 상세 디테일 보드 (BorderGlow 완벽 일체화) */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              {activeNode && (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <BorderGlow
                    glowColor={getGlowColor(activeNode.colorType)}
                    backgroundColor="rgba(15, 23, 42, 0.95)"
                    borderRadius={24}
                    glowRadius={35}
                    glowIntensity={0.9}
                  >
                    <div className="p-6 rounded-[24px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-extrabold font-display border shadow-2xs ${getBadgeStyle(
                              activeNode.colorType
                            )}`}
                          >
                            {activeNode.year}
                          </span>
                          <div>
                            <SplitText
                              tag="h3"
                              text={activeNode.role}
                              className="text-base md:text-lg font-bold text-slate-900 dark:text-white"
                              delay={20}
                              duration={0.4}
                              splitType="words"
                            />
                            <SplitText
                              tag="p"
                              text={activeNode.description}
                              className="text-xs text-slate-500 dark:text-slate-400"
                              delay={15}
                              duration={0.3}
                              splitType="words"
                            />
                          </div>
                        </div>

                        {/* 기술 스택 로고 태그 */}
                        {activeNode.techStack &&
                          activeNode.techStack.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 shrink-0">
                              {activeNode.techStack.map((tech) => (
                                <TechTag key={tech} name={tech} showIcon isPrimary />
                              ))}
                            </div>
                          )}
                      </div>

                      {/* 세부 주요 성과 (Scope & Key Achievements) */}
                      {activeNode.achievements &&
                        activeNode.achievements.length > 0 && (
                          <div className="pt-4">
                            <h4 className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 mb-2.5 uppercase tracking-wider">
                              Key Achievements & Scope
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                              {activeNode.achievements.map((ach, aIdx) => (
                                <div
                                  key={aIdx}
                                  className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80"
                                >
                                  <span className="text-emerald-500 dark:text-cyan-brand font-bold text-xs mt-0.5 shrink-0">
                                    ✓
                                  </span>
                                  <span>{ach}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </BorderGlow>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
