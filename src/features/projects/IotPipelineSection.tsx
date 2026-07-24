import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/SectionHeader';
import { Badge } from '@/components/ui/badge';

/**
 * Data Pipeline 3-Tier 섹션 컴포넌트 (아래에서 위로 올라오는 Fade Up 애니메이션 적용)
 * @returns 파이프라인 섹션 엘리먼트
 */
export const IotPipelineSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          category="Data Pipeline"
          title="현장에서 클라우드까지, 3-Tier 데이터 파이프라인"
          description="DS-125 계측모듈에서 전력품질미터를 거쳐 Cloud EMS 웹 대시보드로 실시간 전달되는 구조입니다."
        />

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-12 shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
            {/* Stage 1 - 아래에서 위로 등장 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="bg-slate-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/30 rounded-2xl p-6 text-center space-y-4 relative group hover:border-emerald-500 transition-colors"
            >
              <Badge variant="emerald" className="text-xs px-3 py-1 font-bold">
                Tier 1
              </Badge>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white pt-1">
                DS-125
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                계측모듈
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                현장 전력 데이터 1차 감지 및 센싱 수집
              </p>
            </motion.div>

            {/* Stage 2 - 아래에서 위로 등장 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
              className="bg-slate-50 dark:bg-slate-950 border border-amber-300 dark:border-amber-500/30 rounded-2xl p-6 text-center space-y-4 relative group hover:border-amber-500 transition-colors"
            >
              <Badge variant="amber" className="text-xs px-3 py-1 font-bold">
                Tier 2
              </Badge>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white pt-1">
                DS-CBN
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                전력품질미터
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                전력 품질 정밀 연산 및 프로토콜 변환
              </p>
            </motion.div>

            {/* Stage 3 - 아래에서 위로 등장 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="bg-slate-50 dark:bg-slate-950 border border-cyan-300 dark:border-cyan-500/30 rounded-2xl p-6 text-center space-y-4 relative group hover:border-cyan-500 transition-colors"
            >
              <Badge variant="cyan" className="text-xs px-3 py-1 font-bold">
                Tier 3
              </Badge>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white pt-1">
                Cloud EMS
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                웹 모니터링 SaaS
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                WebSocket 스트리밍 & ECharts 실시간 시각화
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
