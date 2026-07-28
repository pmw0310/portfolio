import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/**
 * 마우스 움직임을 추적하는 스포트라이트 위치 타입
 */
export type SpotlightPosition = {
  x: number;
  y: number;
};

/**
 * SpotlightCard 컴포넌트 Props
 */
export type SpotlightCardProps = React.PropsWithChildren<{
  /** 추가 커스텀 Tailwind 스타일 클래스 */
  className?: string;
  /** 스포트라이트 광원 색상 (기본값: rgba(6, 182, 212, 0.15)) */
  spotlightColor?: string;
  /** 애니메이션 지연 시간 (초) */
  delay?: number;
}>;

/**
 * shadcn/ui Card 시스템과 은은한 스포트라이트 및 화면 진입 애니메이션이 결합된 카드 컴포넌트
 * @param props SpotlightCardProps
 * @returns 인터랙티브 스포트라이트 애니메이션 카드 엘리먼트
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(6, 182, 212, 0.15)',
  delay = 0,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<SpotlightPosition>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.8);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.8);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="h-full"
    >
      <Card
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn('relative overflow-hidden p-6 h-full flex flex-col justify-between', className)}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 ease-in-out z-10"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
        <div className="relative z-20 h-full flex flex-col justify-between">{children}</div>
      </Card>
    </motion.div>
  );
};

export default SpotlightCard;
