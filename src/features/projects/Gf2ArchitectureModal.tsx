import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, X, Maximize2, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';
import { Gf2ArchitectureDiagram } from './Gf2ArchitectureDiagram';

/**
 * GF2 시스템 아키텍처 다이어그램 대형 모달 및 Pan/Zoom(드래그 이동 & 휠 확대) 뷰어 컴포넌트
 * @returns 모달 트리거 버튼 및 팝업 대화상자 엘리먼트
 */
export const Gf2ArchitectureModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [dragKey, setDragKey] = useState<number>(0); // 위치 리셋용 키

  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setZoomScale(1);
    setDragKey((prev) => prev + 1);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(Number((prev + 0.2).toFixed(2)), 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(Number((prev - 0.2).toFixed(2)), 0.5));
  };

  const handleZoomReset = () => {
    setZoomScale(1);
    setDragKey((prev) => prev + 1); // 드래그 위치 리셋
  };

  // 마우스 휠로 편리한 Zoom In/Out
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    }
  };

  return (
    <>
      {/* 아키텍처 모달 트리거 버튼 */}
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 border border-slate-700/80 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all group cursor-pointer"
      >
        <Cpu className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span>시스템 아키텍처 구조도</span>
        <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
      </button>

      {/* 모달 팝업 오버레이 & 드래그 캔버스 컨테이너 */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 overflow-hidden">
            {/* 백드롭 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* 초대형 모달 다이얼로그 박스 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
              className="relative w-full max-w-[95vw] h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-7 shadow-2xl z-10 flex flex-col overflow-hidden"
            >
              {/* 모달 헤더 & 확대/드래그 툴바 */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>소녀전선2 시스템 아키텍처</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">
                        Full-Stack & CI/CD
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      마우스로 화면을 드래그하여 자유롭게 이동할 수 있습니다. (Ctrl + 휠: Zoom)
                    </p>
                  </div>
                </div>

                {/* 컨트롤러 툴바 */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 mr-2 hidden sm:flex">
                    <Move className="w-3.5 h-3.5 text-cyan-400" />
                    <span>드래그로 자유 이동</span>
                  </div>

                  <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomScale <= 0.5}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                      title="축소"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="px-2 font-mono text-cyan-400 font-bold min-w-[50px] text-center">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomScale >= 2.5}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                      title="확대"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleZoomReset}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border-l border-slate-800 ml-0.5"
                      title="위치 및 크기 초기화"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleClose}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
                    title="닫기"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 드래그 가능 캔버스 뷰포트 (Interactive Pan & Drag Canvas) */}
              <div
                ref={containerRef}
                onWheel={handleWheel}
                className="flex-1 relative overflow-hidden bg-slate-950/80 rounded-2xl border border-slate-800/80 mt-4 cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
              >
                {/* 배경 그리드 핀홀 */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none" />

                {/* 드래그 가능 motion 캔버스 */}
                <motion.div
                  key={dragKey}
                  drag
                  dragElastic={0.05}
                  dragMomentum={true}
                  style={{
                    scale: zoomScale,
                  }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="w-full flex justify-center items-center py-10"
                >
                  <Gf2ArchitectureDiagram />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
