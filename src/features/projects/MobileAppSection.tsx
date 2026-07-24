import React from 'react';
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
 * Flutter 크로스플랫폼 모바일 앱 프로젝트 섹션 컴포넌트
 * @param props MobileAppSectionProps
 * @returns 모바일 앱 섹션 엘리먼트
 */
export const MobileAppSection: React.FC<MobileAppSectionProps> = ({ project }) => {
  return (
    <section className="py-24 bg-slate-900 px-4 md:px-8 border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          category="Cross-Platform Mobile App"
          title="EnergyWatch 모바일 솔루션"
          description="현장 엔지니어의 접근성 향상을 위해 Flutter로 iOS/Android 앱을 단독 개발하고 양대 마켓에 출시했습니다."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 주요 설명 및 태그 */}
          <div className="lg:col-span-5 space-y-6">
            {project?.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 shadow-md"
              >
                <div className="font-bold text-lg text-cyan-brand">{feature.title}</div>
                <div className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-cyan-brand/10 border border-cyan-brand/30 text-cyan-brand text-xs font-semibold">
              ✓ iOS App Store & Google Play Store 배포 완료 및 인증서 관리 파이프라인 수립
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Flutter', 'Dart', 'Provider', 'WebSocket', 'Firebase'].map(
                (tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary />
                )
              )}
            </div>
          </div>

          {/* 모바일 화면 갤러리 */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[ew24, ew25, ew26, ew27].map((imgSrc, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-xl bg-slate-950 hover:border-cyan-brand/50 transition-all hover:-translate-y-1"
              >
                <img
                  src={imgSrc}
                  alt={`EnergyWatch App Screen ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
