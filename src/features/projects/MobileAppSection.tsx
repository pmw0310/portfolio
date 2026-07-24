import React from 'react';
import { motion } from 'motion/react';
import type { MajorProject } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import { ImageCarousel } from '@/components/ImageCarousel';
import ew24 from '@/assets/images/01_EnergyWatch/ew_24.jpg';
import ew25 from '@/assets/images/01_EnergyWatch/ew_25.jpg';
import ew26 from '@/assets/images/01_EnergyWatch/ew_26.jpg';
import ew27 from '@/assets/images/01_EnergyWatch/ew_27.jpg';
import ew28 from '@/assets/images/01_EnergyWatch/ew_28.jpg';
import ew29 from '@/assets/images/01_EnergyWatch/ew_29.jpg';

export type MobileAppSectionProps = {
  project?: MajorProject;
};

/**
 * 프로젝트 문제-판단-변화 불릿 항목 타입
 */
type ProcessBullet = {
  label: string;
  dotBgClass: string;
  description: string;
};

const PROCESS_BULLETS: ProcessBullet[] = [
  {
    label: '문제',
    dotBgClass: 'bg-emerald-600 dark:bg-emerald-500',
    description: 'PC 중심 웹 UI로는 현장 엔지니어의 모바일 접근성이 부재',
  },
  {
    label: '판단',
    dotBgClass: 'bg-amber-600 dark:bg-amber-500',
    description:
      'Flutter로 iOS/Android 동시 개발. 웹 UI를 그대로 옮기는 대신 모바일에 최적화된 UX 재설계',
  },
  {
    label: '변화',
    dotBgClass: 'bg-emerald-500 dark:bg-cyan-brand',
    description:
      'Figma 프로토타입 도입으로 디자인→개발 프로세스 전환. 실시간 대시보드 + 데이터 요약 + 푸시 알림까지 모바일 핵심 기능 완성',
  },
];

/**
 * Cross-Platform Mobile App 섹션 컴포넌트
 * 원본 PPT/HTML의 문제-판단-변화 불릿 리스트와 좌측 액센트 바 콜아웃 박스를 반응형으로 재현합니다.
 * @param props MobileAppSectionProps
 * @returns 모바일 앱 섹션 엘리먼트
 */
export const MobileAppSection: React.FC<MobileAppSectionProps> = ({ project }) => {
  const galleryImages = project?.galleryImages || [
    { url: ew24, title: '사이트 목록', caption: '사업장 및 공간 단위별 계측 사이트 목록 화면' },
    { url: ew25, title: '서비스 메뉴', caption: '모바일 주요 기능 및 네비게이션 서비스 메뉴' },
    { url: ew26, title: '실시간 모니터링 차트', caption: '모바일 최적화 실시간 전력 사용량 및 부하 추이 차트' },
    { url: ew27, title: '모니터링 차트 상세 보기', caption: '선택 시간대 및 기간별 모니터링 차트 상세 뷰' },
    { url: ew28, title: '설정 페이지 (언어 설정)', caption: '다국어 언어 설정, 푸시 알림 및 모바일 사용자 환경 설정' },
    { url: ew29, title: '메인 대시보드', caption: 'EnergyWatch 모바일 앱 실시간 종합 메인 대시보드' },
  ];

  return (
    <section
      id="mobile-app"
      className="py-24 bg-white dark:bg-slate-900 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 헤더 타이틀 */}
        <SectionHeader
          category="Cross-Platform Mobile"
          title="EnergyWatch 모바일 앱"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* 좌측: 문제/판단/변화 불릿 항목 및 콜아웃 박스 */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-8"
          >
            {/* 1. 불릿 리스트 항목 */}
            <div className="space-y-6">
              {PROCESS_BULLETS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.12,
                    ease: 'easeOut',
                  }}
                  className="flex items-start gap-3.5"
                >
                  {/* 컬러 둥근 불릿 닷 */}
                  <span
                    className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${item.dotBgClass}`}
                  />
                  {/* 불릿 텍스트 (라벨 강조) */}
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    <strong className="font-bold text-slate-900 dark:text-white mr-1.5">
                      {item.label}:
                    </strong>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 2. 하단 강조 콜아웃 박스 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-5 md:p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-relaxed word-keep-all">
                양대 앱스토어 배포 완료. 인증서 관리부터 스토어 심사까지 배포 파이프라인 전과정을 독립 수행
              </p>
            </motion.div>

            {/* 3. 기술 스택 태그 */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Flutter', 'Dart', 'Provider', 'WebSocket', 'Firebase'].map(
                (tech, idx) => (
                  <TechTag key={idx} name={tech} isPrimary={idx < 2} />
                )
              )}
            </div>
          </motion.div>

          {/* 우측 모바일 스크린샷 슬라이더 (Carousel) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-3"
          >
            <ImageCarousel
              images={galleryImages}
              aspectRatio="auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

