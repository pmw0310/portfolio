import React, { useState, useMemo } from 'react';
import { Maximize2 } from 'lucide-react';
import type { ProjectGalleryImage } from '@/types/portfolio';
import { Stack } from '@/components/Stack';
import { ImageLightboxModal } from '@/components/ImageLightboxModal';

export type BrowserFrameStackGalleryProps = {
  /** 갤러리 이미지 배열 */
  images: ProjectGalleryImage[];
  /** 추가 컨테이너 클래스명 */
  className?: string;
};

/**
 * 모던 웹 브라우저 창 목업 스타일의 3D 카드 스택 갤러리 컴포넌트
 * @param props BrowserFrameStackGalleryProps
 * @returns 브라우저 목업 스타일 3D 스택 갤러리 엘리먼트
 */
export const BrowserFrameStackGallery: React.FC<BrowserFrameStackGalleryProps> = ({
  images,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const currentCaption = images[activeIndex] || images[0];

  const stackCards = useMemo(
    () =>
      images.map((img, idx) => (
        <div
          key={`browser-card-${idx}`}
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-300/80 dark:border-slate-700/80 bg-white dark:bg-slate-900 group select-none flex flex-col"
        >
          {/* 상단 모던 브라우저 창 미니멀 헤더 바 */}
          <div className="h-7 md:h-8 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3.5 flex items-center shrink-0 select-none z-20">
            {/* macOS 스타일 트래픽 라이트 (빨강/노랑/초록 닷) */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 dark:bg-rose-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 dark:bg-amber-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 dark:bg-emerald-500/70" />
            </div>
          </div>

          {/* 브라우저 메인 화면 뷰 (웹 스크린샷 렌더링) */}
          <div className="relative w-full flex-1 bg-slate-100 dark:bg-slate-950 overflow-hidden flex items-center justify-center">
            <img
              src={img.url}
              alt={img.title}
              className="max-w-full max-h-full object-contain pointer-events-none"
            />
          </div>
        </div>
      )),
    [images]
  );

  if (!images || images.length === 0) return null;

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 w-full ${className}`}>
      {/* 16:10 / 16:9 비율의 브라우저 목업 3D 스택 컨테이너 */}
      <div className="w-full max-w-lg aspect-[16/10] sm:aspect-[16/9.5] relative">
        <Stack
          randomRotation={true}
          sensitivity={60}
          sendToBackOnClick={true}
          autoplay={!isLightboxOpen}
          autoplayDelay={4200}
          pauseOnHover={true}
          onCardChange={(idx) => {
            if (!isLightboxOpen) {
              setActiveIndex(idx);
            }
          }}
          cards={stackCards}
        />
      </div>

      {/* 하단 캡션 정보 카드 박스 */}
      <div className="w-full max-w-lg p-3.5 md:p-4 rounded-xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-xs backdrop-blur-md transition-all duration-300">
        <div className="flex items-center justify-between gap-3 h-7 mb-2">
          {/* 1. 타이틀 뱃지 */}
          <span className="inline-flex items-center text-xs font-bold px-2.5 h-7 rounded-md bg-emerald-500/10 dark:bg-cyan-brand/10 text-emerald-600 dark:text-cyan-brand border border-emerald-500/20 dark:border-cyan-brand/20 leading-none">
            {currentCaption?.title}
          </span>

          {/* 2. 카운터 & 원형 확대 버튼 */}
          <div className="inline-flex items-center gap-2.5 h-7">
            <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold leading-none h-7">
              {activeIndex + 1} / {images.length}
            </span>

            <div className="relative group/tooltip inline-flex items-center justify-center h-7">
              <button
                onClick={() => setIsLightboxOpen(true)}
                aria-label="고해상도 이미지 확대 보기"
                className="w-7 h-7 rounded-full inline-flex items-center justify-center bg-slate-200/90 dark:bg-slate-800/90 hover:bg-emerald-500 dark:hover:bg-cyan-brand text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-slate-950 border border-slate-300/80 dark:border-slate-700/80 transition-all shadow-xs hover:scale-110 cursor-pointer shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </button>

              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-semibold whitespace-nowrap shadow-xl border border-slate-700/80 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 translate-y-1 group-hover/tooltip:translate-y-0 transition-all z-30">
                이미지 확대 보기
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {currentCaption?.caption}
        </p>
      </div>

      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
        <span>💡</span> 카드를 클릭/드래그하여 넘길 수 있으며, 확대 버튼으로 원본을 크게 보실 수 있습니다
      </p>

      {/* 확대 모달 라이트박스 */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={activeIndex}
        onClose={() => setIsLightboxOpen(false)}
        onSelectIndex={(idx) => setActiveIndex(idx)}
      />
    </div>
  );
};

export default BrowserFrameStackGallery;
