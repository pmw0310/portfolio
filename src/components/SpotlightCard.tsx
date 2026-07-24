import React, { useRef, useState } from 'react';

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
}>;

/**
 * 마우스 커서를 따라 은은한 광원(Glow Gradient) 효과를 연출하는 카드 컴포넌트
 * @param props SpotlightCardProps
 * @returns 인터랙티브 카드 엘리먼트
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(6, 182, 212, 0.15)',
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
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 overflow-hidden p-5 transition-colors ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 ease-in-out z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default SpotlightCard;
