import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import type { ProjectGalleryImage } from '@/types/portfolio';
import { ImageLightboxModal } from '@/components/ImageLightboxModal';

export type ImageCarouselProps = {
  images: ProjectGalleryImage[];
  aspectRatio?: 'video' | '4/3' | 'mobile' | 'auto';
  autoPlay?: boolean;
  className?: string;
  showCaption?: boolean;
};

/**
 * 프로젝트 스크린샷 인터랙티브 슬라이더(Carousel) 컴포넌트
 * @param props ImageCarouselProps
 * @returns 반응형 슬라이더 엘리먼트
 */
export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  aspectRatio = 'auto',
  className = '',
  showCaption = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // aspect ratio 스타일 매핑
  const aspectClasses = {
    video: 'aspect-video',
    '4/3': 'aspect-[4/3]',
    mobile: 'aspect-[9/16] max-w-[280px] mx-auto',
    auto: 'min-h-[260px] sm:min-h-[340px] md:min-h-[400px]',
  }[aspectRatio];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <>
      <div
        className={`relative group rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-slate-950 shadow-xl transition-all ${className}`}
      >
        {/* 이미지 슬라이드 뷰포트 (스크린샷 원본 비율 맞춤) */}
        <div
          className={`relative w-full ${aspectClasses} overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer p-2`}
          onClick={() => setIsLightboxOpen(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag={images.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) handleNext();
                else if (info.offset.x > 50) handlePrev();
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={currentImage.url}
                alt={currentImage.caption || `Screenshot ${currentIndex + 1}`}
                className="w-full h-auto max-h-[460px] object-contain rounded-lg shadow-md pointer-events-none select-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* 우측 상단 이미지 수 카운터 및 확대 뱃지 */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-2 pointer-events-none">
            {images.length > 1 && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-slate-200 text-xs font-semibold backdrop-blur-md border border-slate-700/60 shadow-md">
                <ImageIcon className="w-3.5 h-3.5 text-cyan-brand" />
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>

          {/* 호버 시 확대 오버레이 (좌우 화살표 호버 시 숨김 & 단축 명칭 적용) */}
          <div
            className={`absolute inset-0 bg-slate-950/30 transition-opacity flex items-center justify-center pointer-events-none z-10 ${
              isNavHovered ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md shadow-xl border border-slate-700/80 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Maximize2 className="w-3.5 h-3.5 text-cyan-brand" />
              확대 보기
            </span>
          </div>

          {/* 좌/우 탐색 화살표 버튼 */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                onMouseEnter={() => setIsNavHovered(true)}
                onMouseLeave={() => setIsNavHovered(false)}
                aria-label="이전 사진"
                className="absolute left-3 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/60 shadow-lg backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => setIsNavHovered(true)}
                onMouseLeave={() => setIsNavHovered(false)}
                aria-label="다음 사진"
                className="absolute right-3 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/60 shadow-lg backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* 하단 캡션 & 슬라이드 인디케이터 (Dot) */}
        {(showCaption || images.length > 1) && (
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            {showCaption && currentImage.caption ? (
              <p className="text-slate-300 font-medium truncate max-w-md">
                💡 {currentImage.caption}
              </p>
            ) : (
              <span className="text-slate-400 font-medium truncate">
                {currentImage.title || '프로젝트 갤러리'}
              </span>
            )}

            {/* Pagination Dots */}
            {images.length > 1 && (
              <div className="flex items-center gap-1.5 shrink-0">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    onMouseEnter={() => setIsNavHovered(true)}
                    onMouseLeave={() => setIsNavHovered(false)}
                    aria-label={`${idx + 1}번 이미지로 이동`}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'w-6 bg-cyan-brand'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 전체 화면 확대 모달 연동 */}
      <ImageLightboxModal
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
        onSelectIndex={(idx) => setCurrentIndex(idx)}
      />
    </>
  );
};
