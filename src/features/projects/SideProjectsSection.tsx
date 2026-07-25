import React from 'react';
import { motion } from 'motion/react';
import type { MajorProject, SideProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import BorderGlow from '@/components/BorderGlow';
import SplitText from '@/components/SplitText';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ImageCarousel } from '@/components/ImageCarousel';
import { BrowserFrameStackGallery } from '@/components/BrowserFrameStackGallery';
import { ExternalLink } from 'lucide-react';
import { Gf2ArchitectureModal } from './Gf2ArchitectureModal';

import steamGif from '@/assets/images/03_grid/steam_01.gif';
import algoPng from '@/assets/images/05_nc/algo_01.png';
import mapPng from '@/assets/images/06_map/map_01.png';
import votePng from '@/assets/images/07_lo/vote_01.png';
import radishPng from '@/assets/images/08_radish/radish_01.png';
import gf211 from '@/assets/images/02_gf2/gf2_11.png';
import gf213 from '@/assets/images/02_gf2/gf2_13.png';
import gf215 from '@/assets/images/02_gf2/gf2_15.jpg';

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

/**
 * 사이드 프로젝트 목록 섹션 컴포넌트 (갤러리/슬라이더 연동 포함)
 * @param props SideProjectsSectionProps
 * @returns 사이드 프로젝트 섹션 엘리먼트
 */
export const SideProjectsSection: React.FC<SideProjectsSectionProps> = ({
  gf2Project,
  sideProjects,
}) => {
  return (
    <section
      id="side-projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader
          category="Side Projects"
          title="문제를 발견하면, 만들어 해결합니다"
        />

        {/* GF2 메인 사이드 프로젝트 (Community Platform) */}
        {gf2Project && (
          <BorderGlow
            animated={true}
            borderRadius={24}
            glowColor="200 85 65"
            colors={['#38bdf8', '#34d399', '#a78bfa']}
            backgroundColor="var(--card-bg)"
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-xl dark:shadow-2xl [--card-bg:#ffffff] dark:[--card-bg:#0f172a]"
            contentClassName="space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="space-y-4">
                <Badge variant="glow" className="text-xs px-3 py-1 font-bold">
                  {gf2Project.badge}
                </Badge>
                <SplitText
                  tag="h3"
                  text={gf2Project.title}
                  className="text-2xl md:text-4xl font-bold font-display text-slate-900 dark:text-white pt-1"
                  delay={25}
                  duration={0.5}
                  splitType="words"
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Gf2ArchitectureModal />
                <a
                  href="https://gf2.blackolf.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 dark:bg-cyan-brand text-white dark:text-slate-950 font-bold hover:bg-emerald-700 dark:hover:bg-cyan-400 shadow-md hover:shadow-lg transition-all text-xs group"
                >
                  <span>🔗 서비스 바로가기</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* 좌측 서브 특성 카드 목록 */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="lg:col-span-6 space-y-4"
              >
                {gf2Project.features.map((feature, idx) => (
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
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-1 shadow-xs"
                  >
                    <div className="font-bold text-slate-900 dark:text-white text-base">
                      {feature.title}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </div>
                  </motion.div>
                ))}

                <div className="flex flex-wrap gap-2 pt-2">
                  {gf2Project.techStack.map((tech, idx) => (
                    <TechTag key={idx} name={tech} isPrimary />
                  ))}
                </div>
              </motion.div>

              {/* 우측 프로젝트 브라우저 3D 스택 갤러리 */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="lg:col-span-6 space-y-3"
              >
                {gf2Project.galleryImages && gf2Project.galleryImages.length > 0 ? (
                  <BrowserFrameStackGallery
                    images={gf2Project.galleryImages}
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                      <img
                        src={gf211}
                        alt="소녀전선2 메인 화면"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <img src={gf213} alt="가챠 확률 분석" className="w-full h-auto" />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <img src={gf215} alt="웹 포토 카드 갤러리" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </BorderGlow>
        )}

        {/* 사이드 프로젝트 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sideProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md hover:border-emerald-500/50 dark:hover:border-cyan-500/50 transition-all hover:-translate-y-1 flex flex-col p-0 group">
                {/* 갤러리 슬라이더 또는 단일 썸네일 노출 */}
                {project.galleryImages && project.galleryImages.length > 0 ? (
                  <div className="w-full">
                    <ImageCarousel
                      images={project.galleryImages}
                      aspectRatio="video"
                      showCaption={false}
                      className="rounded-b-none border-x-0 border-t-0"
                    />
                  </div>
                ) : (
                  project.imageKey &&
                  sideImageMap[project.imageKey] && (
                    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                      <img
                        src={sideImageMap[project.imageKey]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300"
                          title="프로젝트 바로가기"
                        >
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-bold shadow-lg">
                            <span>방문하기</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </a>
                      )}
                    </div>
                  )
                )}

                <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-semibold text-emerald-600 dark:text-cyan-brand uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span>{project.period}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-cyan-brand transition-colors">
                        {project.title}
                      </h4>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-emerald-600 dark:hover:text-cyan-brand transition-colors shrink-0 p-0.5"
                          title="서비스/코드 링크"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} name={tech} isPrimary={false} showIcon />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
