import React from 'react';
import { motion } from 'motion/react';
import type { MajorProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import ew24 from '@/assets/images/01_EnergyWatch/ew_24.jpg';
import ew25 from '@/assets/images/01_EnergyWatch/ew_25.jpg';
import ew26 from '@/assets/images/01_EnergyWatch/ew_26.jpg';
import ew27 from '@/assets/images/01_EnergyWatch/ew_27.jpg';

export type MobileAppSectionProps = {
  project?: MajorProject;
};

/**
 * Cross-Platform Mobile App 섹션 컴포넌트 (좌/우 옆에서 슬라이드 등장 애니메이션 적용)
 * @param props MobileAppSectionProps
 * @returns 모바일 앱 섹션 엘리먼트
 */
export const MobileAppSection: React.FC<MobileAppSectionProps> = ({ project }) => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          category="Cross-Platform Mobile App"
          title="EnergyWatch 모바일 솔루션"
          description="현장 엔지니어의 접근성 향상을 위해 Flutter로 iOS/Android 앱을 단독 개발하고 양대 마켓에 출시했습니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 좌측 서브 특징 카드들 (좌측에서 슬라이드 인) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            {project?.features.map((feature, idx) => (
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
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
              >
                <div className="font-bold text-lg text-emerald-600 dark:text-cyan-brand">
                  {feature.title}
                </div>
                <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </div>
              </motion.div>
            ))}

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-cyan-brand/10 border border-emerald-200 dark:border-cyan-brand/30 text-emerald-700 dark:text-cyan-brand text-xs font-semibold">
              ✓ iOS App Store & Google Play Store 배포 완료 및 인증서 관리 파이프라인 수립
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Flutter', 'Dart', 'Provider', 'WebSocket', 'Firebase'].map(
                (tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                )
              )}
            </div>
          </motion.div>

          {/* 우측 앱 화면 이미지 목업들 (우측에서 슬라이드 인) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[ew24, ew25, ew26, ew27].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: 'easeOut',
                }}
                className="rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-950 hover:border-emerald-500 dark:hover:border-cyan-brand/50 transition-all hover:-translate-y-1"
              >
                <img
                  src={imgSrc}
                  alt={`EnergyWatch App Screen ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
