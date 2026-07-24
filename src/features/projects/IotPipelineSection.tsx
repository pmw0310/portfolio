import React from 'react';
import { SectionHeader } from '@/components/SectionHeader';

/**
 * IoT 데이터 파이프라인 시각화 섹션 컴포넌트
 * @returns 파이프라인 섹션 엘리먼트
 */
export const IotPipelineSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 px-4 md:px-8 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          category="Data Pipeline"
          title="현장에서 클라우드까지, 3-Tier 데이터 파이프라인"
          description="DS-125 계측모듈에서 전력품질미터를 거쳐 Cloud EMS 웹 대시보드로 실시간 전달되는 구조입니다."
        />

        {/* 파이프라인 시각화 카드 */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
            {/* Stage 1 */}
            <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3 relative group hover:border-emerald-500 transition-colors">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase">
                Tier 1
              </span>
              <h3 className="text-2xl font-bold font-display text-white">DS-125</h3>
              <p className="text-sm font-semibold text-slate-300">계측모듈</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                현장 전력 데이터 1차 감지 및 센싱 수집
              </p>
            </div>

            {/* Stage 2 */}
            <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 text-center space-y-3 relative group hover:border-amber-500 transition-colors">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full uppercase">
                Tier 2
              </span>
              <h3 className="text-2xl font-bold font-display text-white">DS-CBN</h3>
              <p className="text-sm font-semibold text-slate-300">전력품질미터</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                전력 품질 정밀 연산 및 프로토콜 변환
              </p>
            </div>

            {/* Stage 3 */}
            <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 text-center space-y-3 relative group hover:border-cyan-500 transition-colors">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full uppercase">
                Tier 3
              </span>
              <h3 className="text-2xl font-bold font-display text-white">Cloud EMS</h3>
              <p className="text-sm font-semibold text-slate-300">웹 모니터링 SaaS</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                WebSocket 스트리밍 & ECharts 실시간 시각화
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
