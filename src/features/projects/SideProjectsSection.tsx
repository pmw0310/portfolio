import React from 'react';
import type { MajorProject, SideProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';

import steamGif from '@/assets/images/03_grid/steam_01.gif';
import algoPng from '@/assets/images/05_nc/algo_01.png';
import mapPng from '@/assets/images/06_map/map_01.png';
import votePng from '@/assets/images/07_lo/vote_01.png';
import radishPng from '@/assets/images/08_radish/radish_01.png';
import gf201 from '@/assets/images/02_gf2/gf2_01.png';
import gf203 from '@/assets/images/02_gf2/gf2_03.png';
import gf207 from '@/assets/images/02_gf2/gf2_07.png';

export type SideProjectsSectionProps = {
  gf2Project?: MajorProject;
  sideProjects: SideProject[];
};

const sideImageMap: Record<string, string> = {
  'images/03_grid/steam_01.gif': steamGif,
  'images/05_nc/algo_01.png': algoPng,
  'images/06_map/map_01.png': mapPng,
  'images/07_lo/vote_01.png': votePng,
  'images/08_radish/radish_01.png': radishPng,
};

export const SideProjectsSection: React.FC<SideProjectsSectionProps> = ({
  gf2Project,
  sideProjects,
}) => {
  return (
    <section
      id="side-projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader
          category="Side Projects"
          title="문제를 발견하면, 만들어 해결합니다"
          description="업무 밖에서도 사용자의 불편함을 발굴하여 실제 서비스로 구현하고 운영하는 7+ 사이드 프로젝트입니다."
        />

        {/* GF2 메인 사이드 프로젝트 */}
        {gf2Project && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl dark:shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-cyan-brand tracking-widest uppercase bg-emerald-100 dark:bg-cyan-brand/10 border border-emerald-300 dark:border-cyan-brand/30 px-3 py-1 rounded-full">
                  {gf2Project.badge}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mt-3">
                  {gf2Project.title}
                </h3>
              </div>
              <a
                href="https://gf2.blackolf.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-cyan-brand font-semibold hover:underline text-base"
              >
                gf2.blackolf.dev ↗
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                {gf2Project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1"
                  >
                    <div className="font-bold text-slate-900 dark:text-white text-base">
                      {feature.title}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                ))}

                <div className="flex flex-wrap gap-2 pt-2">
                  {gf2Project.techStack.map((tech, idx) => (
                    <TechTag key={idx} name={tech} isPrimary />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                  <img
                    src={gf201}
                    alt="소녀전선2 메인 화면"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img src={gf203} alt="패키지 가치 분석" className="w-full h-auto" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img src={gf207} alt="캐릭터 카드 컬렉션" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 사이드 프로젝트 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sideProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1 flex flex-col"
            >
              {project.imageKey && sideImageMap[project.imageKey] && (
                <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={sideImageMap[project.imageKey]}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-semibold text-emerald-600 dark:text-cyan-brand uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span>{project.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
