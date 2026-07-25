import React, { useState, useMemo } from 'react';
import { Maximize2 } from 'lucide-react';
import type { ProjectGalleryImage } from '@/types/portfolio';
import { Stack } from '@/components/Stack';
import { ImageLightboxModal } from '@/components/ImageLightboxModal';

export type MobileFrameStackGalleryProps = {
  /** 갤러리 이미지 배열 */
  images: ProjectGalleryImage[];
  /** 추가 컨테이너 클래스명 */
  className?: string;
};

/**
 * 스마트폰 디바이스 목업 스타일의 3D 카드 스택 갤러리 컴포넌트
 * @param props MobileFrameStackGalleryProps
 * @returns 스마트폰 목업 스타일 3D 스택 갤러리 엘리먼트
 */
export const MobileFrameStackGallery: React.FC<MobileFrameStackGalleryProps> = ({
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
          key={`mobile-card-${idx}`}
          className="relative w-full h-full rounded-[32px] overflow-hidden shadow-xl border-4 border-slate-800 dark:border-slate-700 bg-slate-950 group select-none flex flex-col"
        >
          {/* 상단 스마트폰 카메라 / 노치 바 */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-slate-900 rounded-full z-20 flex items-center justify-center gap-1.5 px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <div className="w-1 h-1 rounded-full bg-cyan-900/80" />
          </div>

          {/* 모바일 화면 캡처 이미지 (가림 없는 100% 핏 스크린 뷰) */}
          <div className="relative w-full h-full pt-6 pb-2 px-1 bg-slate-950 flex items-center justify-center overflow-hidden">
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover pointer-events-none rounded-xl"
            />
          </div>
        </div>
      )),
    [images]
  );

  if (!images || images.length === 0) return null;

  return (
    <div className={`flex flex-col items-center justify-center space-y-5 py-2 w-full ${className}`}>
      {/* 세로형 스마트폰 디바이스 목업 (220px x 440px) */}
      <div className="w-[220px] sm:w-[240px] h-[440px] sm:h-[470px] relative">
        <Stack
          randomRotation={true}
          sensitivity={60}
          sendToBackOnClick={true}
          autoplay={!isLightboxOpen}
          autoplayDelay={3800}
          pauseOnHover={true}
          onCardChange={(idx) => {
            if (!isLightboxOpen) {
              setActiveIndex(idx);
            }
          }}
          cards={stackCards}
        />
      </div>

      {/* 외부 하단 캡션 카드 박스 */}
      <div className="w-full max-w-[260px] sm:max-w-xs p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-xs backdrop-blur-md transition-all duration-300">
        <div className="flex items-center justify-between gap-3 h-7 mb-2.5">
          {/* 타이틀 뱃지 */}
          <span className="inline-flex items-center text-xs font-bold px-2.5 h-7 rounded-md bg-emerald-500/10 dark:bg-cyan-brand/10 text-emerald-600 dark:text-cyan-brand border border-emerald-500/20 dark:border-cyan-brand/20 leading-none">
            {currentCaption?.title}
          </span>

          {/* 인덱스 카운터 + 확대 버튼 */}
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

      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
        <span>💡</span> 카드를 드래그하거나 클릭하여 넘길 수 있고, 확대 버튼으로 크게 보실 수 있습니다
      </p>

      {/* 고해상도 전체 화면 이미지 확대 라이트박스 모달 연동 */}
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

export default MobileFrameStackGallery;
