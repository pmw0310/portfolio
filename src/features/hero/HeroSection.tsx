import React from 'react';
import type { PersonalInfo } from '@/types/portfolio';
import { SmartCountUp } from '@/components/CountUp';
import SplitText from '@/components/SplitText';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export type HeroSectionProps = {
  profile: PersonalInfo;
};

/**
 * shadcn/ui 기반 히어로 상단 커버 컴포넌트 (다크/라이트 지원 및 Badge/Card 통합)
 * @param props HeroSectionProps
 * @returns 히어로 섹션 엘리먼트
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center px-4 md:px-8 py-20 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      {/* 백그라운드 격자 그래픽 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full text-center space-y-8 mt-12">
        <Badge
          variant="glow"
          className="text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block"
        >
          Frontend Developer Portfolio
        </Badge>

        <div className="space-y-4">
          <SplitText
            tag="h1"
            text={profile.englishName}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tight text-slate-900 dark:text-white"
            delay={40}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 40, scale: 0.9 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            textAlign="center"
          />
          <SplitText
            tag="p"
            text={profile.role}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-cyan-400"
            delay={30}
            duration={0.5}
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-cyan-500 mx-auto rounded-full" />

        <SplitText
          tag="p"
          text={profile.summary}
          className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300 text-base md:text-xl leading-relaxed font-light"
          delay={20}
          duration={0.4}
          splitType="words"
          from={{ opacity: 0, y: 15 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />

        {/* 주요 핵심 통계 지표 (shadcn/ui Card 시스템 적용) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
          {profile.stats.map((stat, idx) => (
            <Card
              key={idx}
              className="bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md dark:shadow-xl backdrop-blur-xs flex flex-col items-center hover:border-cyan-500/40 transition-all group p-6"
            >
              <CardContent className="p-0 flex flex-col items-center">
                <div
                  className={`text-4xl md:text-5xl font-extrabold font-display ${
                    stat.colorClass || 'text-emerald-600 dark:text-cyan-400'
                  } mb-2 group-hover:scale-105 transition-transform`}
                >
                  <SmartCountUp value={stat.value} duration={0.3} />
                </div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
