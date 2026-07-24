import React from 'react';
import type { MajorProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import ew14 from '@/assets/images/01_EnergyWatch/ew_14.png';
import ew08 from '@/assets/images/01_EnergyWatch/ew_08.png';

export type EnterpriseEmsSectionProps = {
  projects: MajorProject[];
};

/**
 * Enterprise EMS & CMS 대시보드 프로젝트 섹션 컴포넌트
 * @param props EnterpriseEmsSectionProps
 * @returns 프로젝트 섹션 엘리먼트
 */
export const EnterpriseEmsSection: React.FC<EnterpriseEmsSectionProps> = ({
  projects,
}) => {
  const migrationProject = projects.find((p) => p.id === 'legacy-migration');
  const cmsProject = projects.find((p) => p.id === 'realtime-cms');

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 px-4 md:px-8 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        <SectionHeader
          category="Featured Major Projects"
          title="B2B IoT SaaS 플랫폼 핵심 아키텍처 구축"
          description="레거시 마이그레이션부터 실시간 대용량 모니터링 시스템 설계까지 단독 주도한 주요 성과입니다."
        />

        {/* 1. 무중단 레거시 마이그레이션 */}
        {migrationProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-cyan-brand tracking-widest uppercase bg-cyan-brand/10 border border-cyan-brand/30 px-3 py-1 rounded-full">
                {migrationProject.badge}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold font-display text-white">
                {migrationProject.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {migrationProject.summary}
              </p>

              <div className="space-y-3">
                {migrationProject.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 text-sm space-y-1"
                  >
                    <div className="font-bold text-slate-200">{feature.title}</div>
                    <div className="text-slate-400 leading-snug">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {migrationProject.techStack.map((tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-700/60 shadow-xl group">
                <img
                  src={ew14}
                  alt="EnergyWatch 데이터 분석 페이지 - Next.js 마이그레이션"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-slate-400">
                Next.js로 최초 전환된 핵심 데이터 분석 대시보드 화면
              </p>
            </div>
          </div>
        )}

        {/* 2. 실시간 전력 모니터링 & CMS 대시보드 */}
        {cmsProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold text-amber-brand tracking-widest uppercase bg-amber-brand/10 border border-amber-brand/30 px-3 py-1 rounded-full">
                {cmsProject.badge}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold font-display text-white">
                {cmsProject.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {cmsProject.summary}
              </p>

              {/* KPI 카운터 카드 */}
              <div className="grid grid-cols-3 gap-4">
                {cmsProject.features.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-black font-display text-cyan-brand">
                      {kpi.statNumber || '30+'}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">
                      {kpi.statLabel || kpi.title}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cmsProject.techStack.map((tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-slate-700/60 shadow-xl group">
                <img
                  src={ew08}
                  alt="CMS 모니터링 대시보드 화면"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-slate-400">
                WebSocket 실시간 데이터 수집 및 ECharts 시각화 화면
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
