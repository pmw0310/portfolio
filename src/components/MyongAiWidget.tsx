import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import myongAvatar from '@/assets/images/02_gf2/myong_avatar.png';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type MyongAiWidgetProps = {
  /** 추가 커스텀 클래스 */
  className?: string;
};

const SUGGESTED_QUERIES = [
  '소녀전선2가 어떤 게임이야?',
  '어떤 AI 모델을 썼어?',
  '너는 여기서 무슨 역할이야?',
  'ElmoHub는 어떤 서비스야?',
];

const MAX_QUERY_LENGTH = 100;

/**
 * ElmoHub 대시보드의 실시간 MYONG AI 지식 검색 & RAG 챗봇 위젯 컴포넌트
 * 사이트 디자인 시스템(시안/에메랄드/슬레이트)과 일관되게 라이트/다크 모드를 완벽 지원합니다.
 * @param props MyongAiWidgetProps
 * @returns MYONG AI 인터랙티브 위젯 JSX 엘리먼트
 */
export const MyongAiWidget: React.FC<MyongAiWidgetProps> = ({ className = '' }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length <= MAX_QUERY_LENGTH) {
      setQuery(val);
    }
  };

  const handleSearch = (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    const targetUrl = trimmed
      ? `https://gf2.blackolf.dev/myong?q=${encodeURIComponent(trimmed)}`
      : 'https://gf2.blackolf.dev/myong';
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleChipClick = (suggested: string) => {
    setQuery(suggested.slice(0, MAX_QUERY_LENGTH));
    handleSearch(suggested.slice(0, MAX_QUERY_LENGTH));
  };

  return (
    /* 위젯 본체 박스 - 라이트/다크 테마 지원 */
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-4 sm:p-6 transition-all space-y-4',
        'bg-gradient-to-br from-slate-50/90 via-emerald-50/15 to-sky-50/25 dark:from-slate-950/80 dark:via-slate-900/60 dark:to-slate-950/80',
        'border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-xl',
        className
      )}
    >
      {/* 상단 캐릭터 아바타 및 타이틀 문구 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0 flex items-center justify-center">
            {/* 수오미 아바타 링 - 라이트/다크 네온 펄스 효과 */}
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-sky-100 dark:bg-[#115874] border-2 border-sky-400 dark:border-[#39bef9] shadow-[0_0_12px_rgba(56,189,248,0.35)] dark:shadow-[0_0_12px_rgba(57,190,249,0.55)] flex items-center justify-center overflow-hidden transition-colors">
              <img
                src={myongAvatar}
                alt="MYONG AI 수오미 아바타"
                className="w-9 h-9 sm:w-9.5 sm:h-9.5 object-contain [image-rendering:pixelated] select-none pointer-events-none"
              />
            </div>
          </div>
          <div className="space-y-0.5 text-left">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                RAG 서비스를 직접 사용해 보세요
              </h4>
              <Badge variant="glow" className="text-[10px] px-2 py-0.5 font-bold hidden sm:inline-flex">
                LIVE DEMO
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              질문을 입력하시면 실제 운영 중인 MYONG AI 지식 검색으로 연결됩니다
            </p>
          </div>
        </div>

        {/* 모바일 화면용 배지 */}
        <div className="sm:hidden self-start pl-15">
          <Badge variant="glow" className="text-[10px] px-2 py-0.5 font-bold">
            LIVE DEMO
          </Badge>
        </div>
      </div>

      {/* 질문 입력 인풋 필드 (최대 100자 제한 & 100자 카운터 탑재) */}
      <form onSubmit={handleSubmit} className="relative pt-0.5">
        <div
          className={cn(
            'relative flex items-center rounded-full transition-all border shadow-xs',
            'bg-white dark:bg-slate-900/90',
            'border-slate-300 dark:border-slate-700/80',
            'focus-within:border-emerald-500 dark:focus-within:border-cyan-brand',
            'focus-within:ring-2 focus-within:ring-emerald-500/20 dark:focus-within:ring-cyan-brand/20'
          )}
        >
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            maxLength={MAX_QUERY_LENGTH}
            placeholder="MYONG AI에게 질문하기..."
            className={cn(
              'w-full bg-transparent px-5 py-2.5 sm:py-3 pr-28 text-sm sm:text-base focus:outline-none transition-colors',
              'text-slate-900 dark:text-slate-100',
              'placeholder:text-slate-400 dark:placeholder:text-slate-500'
            )}
          />

          {/* 우측 100자 카운터 및 전송 버튼 */}
          <div className="absolute right-2 flex items-center gap-2">
            <span
              className={cn(
                'text-xs font-mono font-medium transition-colors',
                query.length >= MAX_QUERY_LENGTH
                  ? 'text-amber-600 dark:text-amber-brand font-bold'
                  : 'text-slate-400 dark:text-slate-500'
              )}
              title="최대 100자 입력 가능"
            >
              {query.length}/{MAX_QUERY_LENGTH}
            </span>
            <button
              type="submit"
              title="MYONG AI 질의 전송"
              aria-label="MYONG AI 질의 전송"
              className={cn(
                'p-2 sm:p-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center',
                'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20',
                'dark:bg-cyan-brand dark:hover:bg-cyan-400 dark:text-slate-950 dark:shadow-cyan-500/25'
              )}
            >
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 translate-x-0.5" />
            </button>
          </div>
        </div>
      </form>

      {/* 추천 질의어 칩 (100자 이내 빠른 질의 지원) */}
      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-brand shrink-0" />
          <span className="font-medium">추천 질문:</span>
        </span>
        {SUGGESTED_QUERIES.map((suggested, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleChipClick(suggested)}
            className={cn(
              'text-xs px-2.5 py-1 rounded-full transition-all cursor-pointer border',
              'bg-white hover:bg-emerald-50/70 text-slate-700 hover:text-emerald-700 border-slate-200 hover:border-emerald-300 shadow-2xs',
              'dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-cyan-brand dark:border-slate-800 dark:hover:border-cyan-500/40'
            )}
          >
            &quot;{suggested}&quot;
          </button>
        ))}
      </div>
    </div>
  );
};
