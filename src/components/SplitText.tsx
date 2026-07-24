import React, { useRef } from 'react';
import { motion, useInView, type Easing, type Variants } from 'motion/react';

/**
 * SplitText 컴포넌트의 Props 인터페이스
 */
export interface SplitTextProps {
  /** 분할 및 애니메이션을 적용할 텍스트 */
  text: string;
  /** 추가 CSS 클래스명 */
  className?: string;
  /** 글자/단어 간 애니메이션 딜레이 (밀리초 단위) */
  delay?: number;
  /** 개별 애니메이션 지속 시간 (초 단위) */
  duration?: number;
  /** 애니메이션 이징(Ease) 함수 또는 설정 */
  ease?: Easing | Easing[];
  /** 텍스트 분할 방식 ('chars' | 'words') */
  splitType?: 'chars' | 'words';
  /** 애니메이션 시작 (시작 상태) */
  from?: { opacity?: number; y?: number; x?: number; scale?: number; filter?: string };
  /** 애니메이션 목표 (최종 상태) */
  to?: { opacity?: number; y?: number; x?: number; scale?: number; filter?: string };
  /** 뷰포트 교차 임계값 (0 ~ 1) */
  threshold?: number;
  /** 루트 마진 */
  rootMargin?: string;
  /** 래퍼 HTML 태그 레벨 */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  /** 텍스트 정렬 */
  textAlign?: React.CSSProperties['textAlign'];
  /** 애니메이션 완료 후 실행될 콜백 함수 */
  onLetterAnimationComplete?: () => void;
}

/**
 * 텍스트를 글자(chars) 또는 단어(words) 단위로 분할하여
 * 뷰포트에 진입할 때 자연스러운 등장 애니메이션을 부여하는 컴포넌트입니다.
 * GSAP 대신 프로젝트에 내장된 motion/react 엔진을 활용하여 유료 라이선스 제약 없이 작동합니다.
 */
const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.6,
  ease = [0.25, 0.1, 0.25, 1],
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag = 'p',
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: threshold,
  });

  const words = text.split(' ');

  // 부모 컨테이너 variants (stagger 적용)
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  // 자식 요소(글자/단어) variants
  const childVariants: Variants = {
    hidden: { ...from },
    visible: {
      ...to,
      transition: {
        duration,
        ease,
      },
    },
  };

  const Component = motion[tag] as typeof motion.p;

  return (
    <Component
      ref={containerRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`inline-block w-full ${className}`}
      style={{ textAlign, wordBreak: 'keep-all' }}
      onAnimationComplete={onLetterAnimationComplete}
    >
      {splitType === 'words'
        ? words.map((word, wordIndex) => (
            <span
              key={`word-${wordIndex}-${word}`}
              className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
            >
              <motion.span variants={childVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))
        : words.map((word, wordIndex) => (
            <span
              key={`word-${wordIndex}-${word}`}
              className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
            >
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`char-${charIndex}-${char}`}
                  variants={childVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
    </Component>
  );
};

export default SplitText;
