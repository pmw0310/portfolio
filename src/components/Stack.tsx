import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  type PanInfo,
} from 'motion/react';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

const CardRotate: React.FC<CardRotateProps> = ({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    }
    x.set(0);
    y.set(0);
  };

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
};

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards?: React.ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
  onCardChange?: (currentIndex: number) => void;
}

interface StackCardItem {
  id: number;
  content: React.ReactNode;
  randomRotate: number;
}

/**
 * 카드 아이템 목록으로부터 결정론적(Pure) 회전 각도를 가진 카드 스택 데이터 배열을 생성합니다.
 * @param items - 카드 React 노드 배열
 * @param enableRandom - 랜덤 회전 활성화 여부
 * @returns 결정론적 회전 각도가 적용된 카드 스택 배열
 */
const createStackItems = (
  items: React.ReactNode[],
  enableRandom: boolean
): StackCardItem[] => {
  return items
    .map((content, index) => {
      // Math.sin을 활용한 결정론적 의사 난수 계산 (동일 인덱스에 대해 동일한 일관된 회전값 반환)
      const seed = Math.sin(index + 1) * 10000;
      const randomValue = seed - Math.floor(seed);
      const randomRotate = enableRandom ? randomValue * 10 - 5 : 0;

      return {
        id: index + 1,
        content,
        randomRotate,
      };
    })
    .reverse();
};

/**
 * 입체적으로 카드가 쌓이고 드래그 및 클릭으로 순환되는 반응형 3D 카드 스택 컴포넌트
 * @param props StackProps
 * @returns 3D 카드 스택 인터랙티브 엘리먼트
 */
export const Stack: React.FC<StackProps> = ({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
  onCardChange,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const defaultCards = useMemo<React.ReactNode[]>(
    () => [
      <img
        key="card-1"
        src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
        alt="card-1"
        className="w-full h-full object-cover pointer-events-none"
      />,
      <img
        key="card-2"
        src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
        alt="card-2"
        className="w-full h-full object-cover pointer-events-none"
      />,
      <img
        key="card-3"
        src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
        alt="card-3"
        className="w-full h-full object-cover pointer-events-none"
      />,
      <img
        key="card-4"
        src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
        alt="card-4"
        className="w-full h-full object-cover pointer-events-none"
      />,
    ],
    []
  );

  const targetCards = cards.length ? cards : defaultCards;

  const [prevCards, setPrevCards] = useState(targetCards);
  const [prevRandomRotation, setPrevRandomRotation] = useState(randomRotation);
  const [stack, setStack] = useState<StackCardItem[]>(() =>
    createStackItems(targetCards, randomRotation)
  );

  const isCardsChanged = (prev: React.ReactNode[], next: React.ReactNode[]) => {
    if (prev.length !== next.length) return true;
    for (let i = 0; i < prev.length; i++) {
      const p = prev[i];
      const n = next[i];
      if (React.isValidElement(p) && React.isValidElement(n)) {
        if (p.key !== n.key) return true;
      } else if (p !== n) {
        return true;
      }
    }
    return false;
  };

  if (isCardsChanged(prevCards, targetCards) || prevRandomRotation !== randomRotation) {
    setPrevCards(targetCards);
    setPrevRandomRotation(randomRotation);
    setStack(createStackItems(targetCards, randomRotation));
  }

  const sendToBack = useCallback((id: number) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      if (index === -1) return prev;
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  }, []);

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused && isInView) {
      const interval = setInterval(() => {
        setStack((prev) => {
          if (prev.length <= 1) return prev;
          const newStack = [...prev];
          const card = newStack.pop();
          if (card) {
            newStack.unshift(card);
          }
          return newStack;
        });
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack.length, isPaused, isInView]);

  useEffect(() => {
    if (stack.length > 0 && onCardChange) {
      const topCard = stack[stack.length - 1];
      onCardChange(topCard.id - 1);
    }
  }, [stack, onCardChange]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        perspective: 600,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const isTop = index === stack.length - 1;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag || !isTop}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full"
              onClick={() => isTop && shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: isTop ? 0 : (stack.length - index - 1) * 3 + card.randomRotate,
                scale: 1 + index * 0.05 - stack.length * 0.05,
                transformOrigin: '90% 90%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
};

export default Stack;
