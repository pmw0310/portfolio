import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/SectionHeader';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Zap, ShieldCheck, Sliders, FileText, Sun, Factory } from 'lucide-react';
import skHynixLogoImg from '@/assets/images/sk_hynix_logo.png';
import gsCaltexLogoImg from '@/assets/images/gs_caltex_logo.png';

/**
 * 데이터 파이프라인 3-Tier 단계 정보 타입
 */
type PipelineTier = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  borderColor: string;
  protocolBadge?: string;
  protocolColor?: string;
};

/**
 * 4가지 아키텍처 특장점 정보 타입
 */
type ArchitectureDetail = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  spotlightColor: string;
};

/**
 * 고객사 정보 타입 (로고 아이콘 포함)
 */
type ClientItem = {
  id: string;
  name: string;
  logo: React.ReactNode;
  borderColor: string;
};

const PIPELINE_TIERS: PipelineTier[] = [
  {
    id: 'ds-125',
    title: 'DS-125',
    subtitle: '계측모듈',
    description: ['현장 전력 데이터 수집'],
    borderColor: 'border-emerald-500/60 dark:border-emerald-500/40',
    protocolBadge: 'RS-485',
    protocolColor: 'emerald',
  },
  {
    id: 'ds-cbn',
    title: 'DS-CBN',
    subtitle: '전력품질미터',
    description: ['모듈 데이터 통합·전송'],
    borderColor: 'border-amber-500/60 dark:border-amber-500/40',
    protocolBadge: 'LTE / Ethernet',
    protocolColor: 'amber',
  },
  {
    id: 'cloud-ems',
    title: 'Cloud EMS',
    subtitle: 'Energy Watch',
    description: ['웹 대시보드 & 모바일 앱', '실시간 시각화 & 보고서'],
    borderColor: 'border-cyan-500/60 dark:border-cyan-500/40',
  },
];

const ARCH_DETAILS: ArchitectureDetail[] = [
  {
    title: '대용량 시계열 최적화',
    description:
      '사용자가 요청한 조회 기간을 내부적으로 분할, API를 병렬 호출하고 프론트엔드 캐싱 + 데이터 샘플링을 복합 적용하여 렌더링 성능 확보',
    icon: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    iconBg:
      'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/60',
    spotlightColor: 'rgba(16, 185, 129, 0.15)',
  },
  {
    title: 'TypeScript 타입 안전성',
    description:
      '복잡한 시계열 데이터 변환 로직을 TypeScript 타입 시스템과 lodash로 안정적으로 처리. 수십 종류 차트에 필요한 데이터 구조를 타입으로 보장',
    icon: <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    iconBg:
      'bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-800/60',
    spotlightColor: 'rgba(245, 158, 11, 0.15)',
  },
  {
    title: '고객사 맞춤 설정',
    description:
      '요금제, 알림 기준치, 표시 데이터 등 각 기업 고객의 설비 환경에 맞춰 유연하게 변경 가능한 관리 시스템 구현',
    icon: <Sliders className="w-5 h-5 text-cyan-600 dark:text-cyan-brand" />,
    iconBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200/60 dark:border-cyan-800/60',
    spotlightColor: 'rgba(6, 182, 212, 0.15)',
  },
  {
    title: 'PDF 보고서 출력',
    description:
      '월별/분기별 전력 사용 패턴, 요금 분석이 담긴 종합 보고서를 웹에서 PDF로 다운로드할 수 있는 출력 기능 제공',
    icon: <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    iconBg:
      'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/60 dark:border-indigo-800/60',
    spotlightColor: 'rgba(99, 102, 241, 0.15)',
  },
];

const CLIENT_LIST: ClientItem[] = [
  {
    id: 'sk-hynix',
    name: 'SK Hynix',
    logo: (
      <img
        src={skHynixLogoImg}
        alt="SK Hynix 공식 로고"
        className="h-6 lg:h-7 w-auto object-contain max-w-[130px] dark:brightness-110 transition-transform group-hover:scale-105"
      />
    ),
    borderColor: 'hover:border-rose-500/50 dark:hover:border-rose-500/50',
  },
  {
    id: 'gs-caltex',
    name: 'GS칼텍스',
    logo: (
      <img
        src={gsCaltexLogoImg}
        alt="GS칼텍스 공식 로고"
        className="h-6 lg:h-7 w-auto object-contain max-w-[130px] dark:brightness-110 transition-transform group-hover:scale-105"
      />
    ),
    borderColor: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/50',
  },
  {
    id: 'gyeonggi-solar',
    name: '경기도 태양광 350개소',
    logo: (
      <div className="flex items-center gap-2">
        <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
          경기도 태양광 350개소
        </span>
      </div>
    ),
    borderColor: 'hover:border-amber-500/50 dark:hover:border-amber-500/50',
  },
  {
    id: 'samcheonpo-power',
    name: '삼천포 화력발전소',
    logo: (
      <div className="flex items-center gap-2">
        <Factory className="w-5 h-5 text-sky-500 dark:text-sky-400" />
        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
          삼천포 화력발전소
        </span>
      </div>
    ),
    borderColor: 'hover:border-sky-500/50 dark:hover:border-sky-500/50',
  },
];

/**
 * IoT Data Pipeline 3-Tier & 아키텍처 상세 섹션 컴포넌트
 * 원본 PPT/HTML의 3-Tier 흐름도, SpotlightCard 기반 특장점 카드, 고객사 로고 뱃지를 반응형으로 재현합니다.
 * @returns 데이터 파이프라인 섹션 엘리먼트
 */
export const IotPipelineSection: React.FC = () => {
  return (
    <section
      id="pipeline"
      className="py-20 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 공통 헤더 타이틀 적용 (인터랙티브 애니메이션) */}
        <SectionHeader
          category="DATA PIPELINE"
          title="현장에서 클라우드까지, 데이터 파이프라인"
        />

        {/* 1. 상단 3-Tier 데이터 파이프라인 흐름 다이어그램 (데스크탑 & 모바일 반응형) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-lg dark:shadow-2xl"
        >
          {/* 데스크탑 / 태블릿 (md 이상): 가로 파이프라인 카드 + 점선 화살표 */}
          <div className="hidden md:grid md:grid-cols-11 items-center gap-2 lg:gap-4">
            {PIPELINE_TIERS.map((tier, idx) => (
              <React.Fragment key={tier.id}>
                {/* 파이프라인 카드 (DS-125, DS-CBN, Cloud EMS) */}
                <div
                  className={`col-span-3 bg-slate-50/80 dark:bg-slate-950/80 border-2 ${tier.borderColor} rounded-2xl p-6 text-center shadow-xs flex flex-col justify-center min-h-[170px] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group`}
                >
                  <h3 className="text-2xl lg:text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-1 tracking-tight">
                    {tier.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                    {tier.subtitle}
                  </p>
                  <div className="space-y-0.5">
                    {tier.description.map((desc, dIdx) => (
                      <p
                        key={dIdx}
                        className="text-xs text-slate-500 dark:text-slate-400 font-medium"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 연결 프로토콜 점선 화살표 (RS-485 / LTE/Ethernet) */}
                {idx < PIPELINE_TIERS.length - 1 && (
                  <div className="col-span-1 flex flex-col items-center justify-center relative py-2">
                    <span className="text-[11px] lg:text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap mb-1">
                      {tier.protocolBadge}
                    </span>
                    <div className="w-full flex items-center">
                      <div
                        className={`flex-1 border-t-2 border-dashed ${
                          tier.protocolColor === 'emerald'
                            ? 'border-emerald-500/80 dark:border-emerald-400/80'
                            : 'border-amber-500/80 dark:border-amber-400/80'
                        }`}
                      />
                      <svg
                        className={`w-3 h-3 -ml-1 ${
                          tier.protocolColor === 'emerald'
                            ? 'text-emerald-500 dark:text-emerald-400 fill-current'
                            : 'text-amber-500 dark:text-amber-400 fill-current'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 모바일 (md 미만): 세로 파이프라인 흐름 */}
          <div className="flex md:hidden flex-col items-center gap-3">
            {PIPELINE_TIERS.map((tier, idx) => (
              <React.Fragment key={tier.id}>
                <div
                  className={`w-full bg-slate-50/80 dark:bg-slate-950/80 border-2 ${tier.borderColor} rounded-2xl p-5 text-center shadow-xs flex flex-col justify-center min-h-[140px] relative overflow-hidden`}
                >
                  <h3 className="text-2xl font-extrabold font-display text-slate-900 dark:text-white mb-1">
                    {tier.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    {tier.subtitle}
                  </p>
                  <div className="space-y-0.5">
                    {tier.description.map((desc, dIdx) => (
                      <p
                        key={dIdx}
                        className="text-xs text-slate-500 dark:text-slate-400"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 모바일 세로 화살표 */}
                {idx < PIPELINE_TIERS.length - 1 && (
                  <div className="flex flex-col items-center my-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      {tier.protocolBadge}
                    </span>
                    <div
                      className={`h-6 border-l-2 border-dashed ${
                        tier.protocolColor === 'emerald'
                          ? 'border-emerald-500 dark:border-emerald-400'
                          : 'border-amber-500 dark:border-amber-400'
                      }`}
                    />
                    <svg
                      className={`w-3 h-3 -mt-1 ${
                        tier.protocolColor === 'emerald'
                          ? 'text-emerald-500 dark:text-emerald-400 fill-current rotate-90'
                          : 'text-amber-500 dark:text-amber-400 fill-current rotate-90'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 2. 하단 4개 아키텍처 특장점 카드 (SpotlightCard 기반 UI 스타일 통일 & 동일 높이 맞춤) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {ARCH_DETAILS.map((detail, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor={detail.spotlightColor}
              delay={idx * 0.08}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-md dark:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl ${detail.iconBg} border flex items-center justify-center shadow-xs`}
                  >
                    {detail.icon}
                  </div>
                </div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white font-display pt-1">
                  {detail.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed word-keep-all">
                  {detail.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* 3. 하단 적용 고객사 뱃지 태그 목록 (공식 로고 적용) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          {CLIENT_LIST.map((client) => (
            <div
              key={client.id}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs ${client.borderColor} transition-all duration-200 hover:-translate-y-0.5 cursor-default min-h-[48px]`}
            >
              {client.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
