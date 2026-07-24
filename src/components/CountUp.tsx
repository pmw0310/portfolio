import { useInView, useMotionValue, useSpring } from 'motion/react';
import React, { useCallback, useEffect, useRef } from 'react';

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  prefix?: string;
  suffix?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

/**
 * React Bits 수치 카운트업 애니메이션 컴포넌트
 * @param props CountUpProps
 * @returns 뷰포트 감지 시 애니메이션되는 숫자 엘리먼트 (스크롤 진입 시마다 재실행)
 */
export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 0.3,
  className = '',
  startWhen = true,
  separator = '',
  prefix = '',
  suffix = '',
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  // 스크롤 시 화면에 보일 때마다 애니메이션이 재실행되도록 once: false 설정
  const isInView = useInView(ref, { once: false, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      const numberWithSeparator = separator
        ? formattedNumber.replace(/,/g, separator)
        : formattedNumber;

      return `${prefix}${numberWithSeparator}${suffix}`;
    },
    [maxDecimals, separator, prefix, suffix]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      // 뷰포트에 진입할 때마다 시작 수치로 리셋 후 빠른 속도로 애니메이션 시작
      motionValue.set(direction === 'down' ? to : from);

      if (typeof onStart === 'function') {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    } else if (!isInView) {
      // 뷰포트 영역 밖으로 나가면 다음 진입 시 재실행되도록 시작값으로 복원
      motionValue.set(direction === 'down' ? to : from);
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

/**
 * 텍스트 속 숫자를 파싱하여 화면 스크롤 진입 시마다 CountUp 애니메이션을 적용하는 스마트 래퍼 컴포넌트
 * 영문 약어 (예: B2B, CR 등)는 카운트하지 않고 텍스트 그대로 보존합니다.
 * @param props { value: string | number; className?: string; duration?: number }
 * @returns 스마트 카운트업 엘리먼트
 */
export const SmartCountUp: React.FC<{
  value: string | number;
  className?: string;
  duration?: number;
}> = ({ value, className, duration = 0.3 }) => {
  if (typeof value === 'number') {
    return <CountUp to={value} className={className} duration={duration} />;
  }

  // 예: "6+", "~4년", "30+", "7+" -> prefix, num, suffix 분리
  const match = value.match(/^([^0-9.-]*)([-+]?\d*\.?\d+)(.*)$/);
  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const [, parsedPrefix, parsedNumStr, parsedSuffix] = match;

  // 영문 알파벳이 앞이나 뒤에 포함되어 있는 약어/단어(예: B2B, CR, MP3)는 카운트 제외
  if (/[a-zA-Z]/.test(parsedPrefix) || /[a-zA-Z]/.test(parsedSuffix)) {
    return <span className={className}>{value}</span>;
  }

  const num = parseFloat(parsedNumStr);

  if (isNaN(num)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <CountUp
      to={num}
      prefix={parsedPrefix}
      suffix={parsedSuffix}
      className={className}
      duration={duration}
    />
  );
};
