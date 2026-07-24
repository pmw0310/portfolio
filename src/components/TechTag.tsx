import React from 'react';
import { TechIcon } from '@/components/TechIcon';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type TechTagProps = {
  /** 기술명 또는 태그 텍스트 */
  name: string;
  /** 주요 핵심 기술 여부 */
  isPrimary?: boolean;
  /** 로고 아이콘 표시 여부 (기본값: true) */
  showIcon?: boolean;
  /** 추가 커스텀 클래스 */
  className?: string;
};

/**
 * shadcn/ui Badge 기반 기술 스택 및 키워드 태그 뱃지 컴포넌트
 * @param props TechTagProps
 * @returns 뱃지 엘리먼트
 */
export const TechTag: React.FC<TechTagProps> = ({
  name,
  isPrimary = false,
  showIcon = true,
  className = '',
}) => {
  return (
    <Badge
      variant={isPrimary ? 'glow' : 'secondary'}
      className={cn(
        'transition-all duration-200 hover:scale-105 cursor-default',
        className
      )}
    >
      {showIcon && <TechIcon name={name} className="w-3.5 h-3.5 text-current shrink-0" />}
      <span>{name}</span>
    </Badge>
  );
};
