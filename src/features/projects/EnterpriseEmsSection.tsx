import React from 'react';
import { motion } from 'motion/react';
import type { MajorProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import { SmartCountUp } from '@/components/CountUp';
import BorderGlow from '@/components/BorderGlow';
import { Badge } from '@/components/ui/badge';
import { BrowserFrameStackGallery } from '@/components/BrowserFrameStackGallery';
import ew14 from '@/assets/images/01_EnergyWatch/ew_14.png';
import ew08 from '@/assets/images/01_EnergyWatch/ew_08.png';

export type EnterpriseEmsSectionProps = {
  projects: MajorProject[];
};

/**
 * 주요 B2B 프로젝트 섹션 컴포넌트 (슬라이더/갤러리 인터랙션 연동)
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
        />

        {/* 1. 무중단 레거시 마이그레이션 */}
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
            {/* 좌측 설명 및 서브 카드들 */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-2">
                <div className="text-xs md:text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                  {migrationProject.badge || 'LEGACY MIGRATION'}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight font-display tracking-tight pt-1">
                  서비스 무중단 <br className="hidden sm:inline" />
                  레거시 마이그레이션
                </h3>
              </div>

              {/* 불릿 아이콘 및 항목 리스트 */}
              <div className="space-y-3.5 pt-1">
                {migrationProject.features.map((feature, idx) => {
                  const isAmber = feature.bulletColor === 'amber';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      className="flex items-start gap-2.5 text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <span
                        className={`inline-block shrink-0 w-2.5 h-2.5 rounded-full mt-2 ${
                          isAmber
                            ? 'bg-amber-600 dark:bg-amber-500'
                            : 'bg-emerald-600 dark:bg-emerald-400'
                        }`}
                      />
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100 mr-1.5">
                          {feature.title}:
                        </span>
                        <span>{feature.description}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* 하단 성과 요약 카드 */}
              {migrationProject.highlightText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="p-4 md:p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800/90 text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 leading-relaxed shadow-xs"
                >
                  {migrationProject.highlightText}
                </motion.div>
              )}

              {/* 기술 스택 태그 (TechTag를 통한 아이콘 및 통일된 뱃지 스타일) */}
              <div className="flex flex-wrap gap-2 pt-2">
                {migrationProject.techStack.map((tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                ))}
              </div>
            </motion.div>

            {/* 우측 프로젝트 브라우저 3D 스택 갤러리 */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-3"
            >
              {migrationProject.galleryImages && migrationProject.galleryImages.length > 0 ? (
                <BrowserFrameStackGallery
                  images={migrationProject.galleryImages}
                />
              ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700/60 shadow-xl group">
                  <img
                    src={ew14}
                    alt="EnergyWatch 데이터 분석 페이지"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </motion.div>
          </BorderGlow>
        )}

        {/* 2. 실시간 전력 모니터링 & CMS 대시보드 */}
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
            {/* 오른쪽 text 영역 및 KPI 스탯, 3가지 성과 카드 */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 lg:order-2 space-y-6"
            >
              <div className="space-y-3">
                <Badge variant="amber" className="text-xs px-3 py-1 font-bold">
                  {cmsProject.badge || 'Real-Time Monitoring'}
                </Badge>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight pt-1">
                  {cmsProject.title}
                </h3>
              </div>

              {/* KPI 수치 스탯 영역 (30+, WS, PDF) */}
              {cmsProject.stats && cmsProject.stats.length > 0 && (
                <div className="grid grid-cols-3 gap-3 md:gap-4 pt-1">
                  {cmsProject.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="p-3.5 md:p-4 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 text-center shadow-xs"
                    >
                      <div className={`text-2xl md:text-3xl font-black font-display ${stat.colorClass || 'text-emerald-500'}`}>
                        <SmartCountUp value={stat.statNumber} />
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                        {stat.statLabel}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* 3가지 성과 카드 세로 배치 (원본 사진 1:1 스타일) */}
              <div className="space-y-3 pt-1">
                {cmsProject.features.map((feature, idx) => {
                  const isAmber = feature.bulletColor === 'amber';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="p-4 md:p-5 rounded-2xl bg-white dark:bg-slate-950/90 border border-slate-200/90 dark:border-slate-800/90 shadow-xs space-y-1.5"
                    >
                      <h4
                        className={`text-base md:text-lg font-bold font-display ${
                          isAmber
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* 왼쪽 프로젝트 브라우저 3D 스택 갤러리 */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-6 lg:order-1 space-y-3"
            >
              {cmsProject.galleryImages && cmsProject.galleryImages.length > 0 ? (
                <BrowserFrameStackGallery
                  images={cmsProject.galleryImages}
                />
              ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700/60 shadow-xl group">
                  <img
                    src={ew08}
                    alt="CMS 모니터링 대시보드 화면"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </motion.div>
          </BorderGlow>
        )}
      </div>
    </section>
  );
};
