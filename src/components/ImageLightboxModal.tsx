import React from 'react';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import type { ProjectGalleryImage } from '@/types/portfolio';

export type ImageLightboxModalProps = {
  isOpen: boolean;
  images: ProjectGalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
};

/**
 * react-photo-view 기반 고해상도 이미지 확대/줌/탐색 뷰어 라이트박스 컴포넌트
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

  const sliderImages = images.map((img, idx) => {
    const isGif = img.url.toLowerCase().includes('.gif');
    return {
      src: img.url,
      key: `${img.url}-${idx}`,
      ...(isGif
        ? {
            render: () => (
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={img.url}
                  alt={img.title || 'GIF Animation'}
                  className="max-h-[85vh] max-w-[90vw] object-contain mx-auto shadow-2xl rounded-lg select-none"
                />
              </div>
            ),
          }
        : {}),
      intro: (
        <div className="text-center py-2 px-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 text-white max-w-xl mx-auto shadow-2xl">
          {img.title && <div className="font-bold text-sm text-cyan-brand mb-0.5">{img.title}</div>}
          {img.caption && <div className="text-xs text-slate-200">{img.caption}</div>}
        </div>
      ),
    };
  });

  return (
    <PhotoSlider
      images={sliderImages}
      visible={isOpen}
      onClose={onClose}
      index={currentIndex}
      onIndexChange={onSelectIndex}
      overlayRender={(props) => {
        return (
          <div className="absolute bottom-6 left-0 right-0 z-50 pointer-events-none px-4">
            <div className="pointer-events-auto">
              {sliderImages[props.index]?.intro}
            </div>
          </div>
        );
      }}
    />
  );
};
