import React from 'react';

/**
 * TechTag 컴포넌트 Props
 */
export type TechTagProps = {
  /** 기술명 또는 태그 텍스트 */
  name: string;
  /** 주요 핵심 기술 여부 */
  isPrimary?: boolean;
  /** 추가 커스텀 클래스 */
  className?: string;
};

/**
 * 기술 스택 및 키워드 태그 뱃지 컴포넌트
 * @param props TechTagProps
 * @returns 뱃지 엘리먼트
 */
export const TechTag: React.FC<TechTagProps> = ({
  name,
  isPrimary = false,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200';

  const colorStyles = isPrimary
    ? 'bg-emerald-500/10 text-cyan-brand border border-emerald-500/30 font-semibold shadow-xs'
    : 'bg-slate-800 text-slate-300 border border-slate-700/80 hover:border-slate-600';

  return <span className={`${baseStyles} ${colorStyles} ${className}`}>{name}</span>;
};
