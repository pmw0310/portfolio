import React from 'react';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import type { ProjectGalleryImage } from '@/types/portfolio';

export type ImageLightboxModalProps = {
  /** 라이트박스 열림 여부 */
  isOpen: boolean;
  /** 표시할 이미지 목록 */
  images: ProjectGalleryImage[];
  /** 현재 활성화된 이미지 인덱스 */
  currentIndex: number;
  /** 모달 닫기 이벤트 핸들러 */
  onClose: () => void;
  /** 이미지 인덱스 변경 이벤트 핸들러 */
  onSelectIndex: (index: number) => void;
};

/**
 * react-photo-view 기반 고해상도 이미지 확대, 휠 스크롤 줌, 핀치 줌, 좌우 탐색 라이트박스 컴포넌트
 * @param props ImageLightboxModalProps
 * @returns PhotoSlider 라이트박스 엘리먼트
 */
export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  if (!images || images.length === 0) return null;

  const sliderImages = images.map((img, idx) => ({
    src: img.url,
    key: `${img.url}-${idx}`,
  }));

  return (
    <PhotoSlider
      images={sliderImages}
      visible={isOpen}
      onClose={onClose}
      index={currentIndex}
      onIndexChange={onSelectIndex}
      overlayRender={(props) => {
        const curImg = images[props.index] || images[0];
        return (
          <div className="absolute bottom-6 left-0 right-0 z-[1000] pointer-events-none px-4 select-none">
            <div className="max-w-xl mx-auto text-center pointer-events-auto">
              <div className="py-3 px-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 text-white shadow-2xl">
                {curImg?.title && (
                  <div className="font-bold text-sm md:text-base text-emerald-400 dark:text-cyan-brand mb-1">
                    {curImg.title}
                  </div>
                )}
                {curImg?.caption && (
                  <div className="text-xs md:text-sm text-slate-200 leading-relaxed font-medium">
                    {curImg.caption}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default ImageLightboxModal;
