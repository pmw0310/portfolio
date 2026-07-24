import React from 'react';
import { motion } from 'motion/react';
import type { MajorProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import { SmartCountUp } from '@/components/CountUp';
import BorderGlow from '@/components/BorderGlow';
import SplitText from '@/components/SplitText';
import { Badge } from '@/components/ui/badge';
import ew14 from '@/assets/images/01_EnergyWatch/ew_14.png';
import ew08 from '@/assets/images/01_EnergyWatch/ew_08.png';

export type EnterpriseEmsSectionProps = {
  projects: MajorProject[];
};

/**
 * 주요 B2B 프로젝트 섹션 컴포넌트 (좌/우 슬라이드 등장 애니메이션 적용)
 * @param props EnterpriseEmsSectionProps
 * @returns 주요 B2B 프로젝트 섹션 엘리먼트
 */
export const EnterpriseEmsSection: React.FC<EnterpriseEmsSectionProps> = ({
  projects,
}) => {
  const migrationProject = projects.find((p) => p.id === 'legacy-migration');
  const cmsProject = projects.find((p) => p.id === 'realtime-cms');

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        <SectionHeader
          category="Featured Major Projects"
          title="B2B IoT SaaS 플랫폼 핵심 아키텍처 구축"
          description="레거시 마이그레이션부터 실시간 대용량 모니터링 시스템 설계까지 단독 주도한 주요 성과입니다."
        />

        {/* 1. 무중단 레거시 마이그레이션 - 옆에서 슬라이드 등장 애니메이션 */}
        {migrationProject && (
          <BorderGlow
            animated={true}
            borderRadius={24}
            glowColor="160 80 50"
            colors={['#10b981', '#06b6d4', '#6366f1']}
            backgroundColor="var(--card-bg)"
            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-lg dark:shadow-2xl [--card-bg:#f8fafc] dark:[--card-bg:#0f172a]"
            contentClassName="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* 좌측 설명 및 서브 카드들 (좌측에서 슬라이드 인) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-4">
                <Badge variant="glow" className="text-xs px-3 py-1 font-bold">
                  {migrationProject.badge}
                </Badge>
                <SplitText
                  tag="h3"
                  text={migrationProject.title}
                  className="text-2xl md:text-4xl font-bold font-display text-slate-900 dark:text-white pt-2"
                  delay={25}
                  duration={0.5}
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {migrationProject.summary}
              </p>

              <div className="space-y-3">
                {migrationProject.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.1,
                      ease: 'easeOut',
                    }}
                    className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-sm space-y-1 shadow-xs"
                  >
                    <div className="font-bold text-slate-900 dark:text-slate-200">
                      {feature.title}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-snug">
                      {feature.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {migrationProject.techStack.map((tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                ))}
              </div>
            </motion.div>

            {/* 우측 대표 이미지 (우측에서 슬라이드 인) */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700/60 shadow-xl group">
                <img
                  src={ew14}
                  alt="EnergyWatch 데이터 분석 페이지"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                Next.js로 최초 전환된 핵심 데이터 분석 대시보드 화면
              </p>
            </motion.div>
          </BorderGlow>
        )}

        {/* 2. 실시간 전력 모니터링 & CMS 대시보드 - 옆에서 슬라이드 등장 애니메이션 */}
        {cmsProject && (
          <BorderGlow
            animated={true}
            borderRadius={24}
            glowColor="40 90 60"
            colors={['#f59e0b', '#ec4899', '#3b82f6']}
            backgroundColor="var(--card-bg)"
            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-lg dark:shadow-2xl [--card-bg:#f8fafc] dark:[--card-bg:#0f172a]"
            contentClassName="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* 오른쪽 text 영역 (우측에서 슬라이드 인) */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 lg:order-2 space-y-6"
            >
              <div className="space-y-4">
                <Badge variant="amber" className="text-xs px-3 py-1 font-bold">
                  {cmsProject.badge}
                </Badge>
                <SplitText
                  tag="h3"
                  text={cmsProject.title}
                  className="text-2xl md:text-4xl font-bold font-display text-slate-900 dark:text-white pt-2"
                  delay={25}
                  duration={0.5}
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {cmsProject.summary}
              </p>

              <div className="grid grid-cols-3 gap-4">
                {cmsProject.features.map((kpi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.1,
                      ease: 'easeOut',
                    }}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs"
                  >
                    <div className="text-2xl md:text-3xl font-black font-display text-emerald-600 dark:text-cyan-brand">
                      <SmartCountUp value={kpi.statNumber || '30+'} />
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                      {kpi.statLabel || kpi.title}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cmsProject.techStack.map((tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                ))}
              </div>
            </motion.div>

            {/* 왼쪽 이미지 영역 (좌측에서 슬라이드 인) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-6 lg:order-1 space-y-4"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700/60 shadow-xl group">
                <img
                  src={ew08}
                  alt="CMS 모니터링 대시보드 화면"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                WebSocket 실시간 데이터 수집 및 ECharts 시각화 화면
              </p>
            </motion.div>
          </BorderGlow>
        )}
      </div>
    </section>
  );
};
