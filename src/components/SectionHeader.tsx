import React from 'react';

export type SectionHeaderProps = {
  /** 소제목 카테고리 태그 (예: ABOUT ME, CAREER PATH) */
  category: string;
  /** 메인 대제목 */
  title: string;
  /** 설명 텍스트 (옵션) */
  description?: string;
  /** 정렬 모드 (기본: left) */
  align?: 'left' | 'center';
};

/**
 * 포트폴리오 주요 섹션별 타이틀 헤더 컴포넌트 (다크/라이트 지원)
 * @param props SectionHeaderProps
 * @returns 섹션 타이틀 엘리먼트
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  category,
  title,
  description,
  align = 'left',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      <p className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 text-emerald-600 dark:text-cyan-brand">
        {category}
      </p>
      <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight leading-tight mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};
