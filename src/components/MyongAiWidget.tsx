import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import myongAvatar from '@/assets/images/02_gf2/myong_avatar.png';

export type MyongAiWidgetProps = {
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
 * 원본 대시보드와 동일한 #0d1315 바탕화면, #12181a 카드 배경, 100자 글자 수 제한이 적용되어 있습니다.
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
    /* 위젯 본체 박스 (#12181a) + 테두리 (#242e34) */
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#12181a] border border-[#242e34] p-4 sm:p-6 shadow-xl space-y-4 text-white ${className}`}
    >
      {/* 상단 캐릭터 아바타 및 타이틀 문구 */}
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0 flex items-center justify-center">
            {/* 원본 사진과 100% 일치하는 청록색(#115874) 배경 및 네온 스카이블루(#39bef9) 링 (overflow-hidden으로 외곽 돌출 방지) */}
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#115874] border-2 border-[#39bef9] shadow-[0_0_12px_rgba(57,190,249,0.55)] flex items-center justify-center overflow-hidden">
              <img
                src={myongAvatar}
                alt="MYONG AI 수오미 아바타"
                className="w-9 h-9 sm:w-9.5 sm:h-9.5 object-contain [image-rendering:pixelated] select-none pointer-events-none"
              />
            </div>
          </div>
          <div className="space-y-0.5 text-left">
            <h4 className="text-[#ed5e0c] font-bold text-base sm:text-lg tracking-tight">
              RAG 서비스를 직접 사용해 보세요
            </h4>
            <p className="text-[#f46c1c] text-xs sm:text-sm font-medium">
              질문을 입력하시면 실제 운영 중인 MYONG AI 지식 검색으로 연결됩니다
            </p>
          </div>
        </div>

        {/* 질문 입력 인풋 필드 (최대 100자 제한 & 100자 카운터 탑재) */}
        <form onSubmit={handleSubmit} className="relative pt-0.5">
          <div className="relative flex items-center rounded-full bg-[#0a0e0f] border border-[#6a4128] focus-within:border-[#ed5e0c] focus-within:ring-2 focus-within:ring-[#ed5e0c]/25 transition-all">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              maxLength={MAX_QUERY_LENGTH}
              placeholder="MYONG AI에게 질문하기..."
              className="w-full bg-transparent px-5 py-2.5 sm:py-3 pr-28 text-sm sm:text-base text-slate-100 placeholder:text-[#5d6872] focus:outline-none"
            />

            {/* 우측 100자 카운터 및 전송 버튼 */}
            <div className="absolute right-2 flex items-center gap-2">
              <span
                className={`text-xs font-mono font-medium transition-colors ${
                  query.length >= MAX_QUERY_LENGTH
                    ? 'text-[#ed5e0c] font-bold'
                    : 'text-[#62707b]'
                }`}
                title="최대 100자 입력 가능"
              >
                {query.length}/{MAX_QUERY_LENGTH}
              </span>
              <button
                type="submit"
                title="MYONG AI 질의 전송"
                aria-label="MYONG AI 질의 전송"
                className="p-2 sm:p-2.5 rounded-full bg-[#ed5e0c] hover:bg-[#ff6815] text-white shadow-md hover:shadow-[#ed5e0c]/40 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 translate-x-0.5" />
              </button>
            </div>
          </div>
        </form>

        {/* 추천 질의어 칩 (100자 이내 빠른 질의 지원) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="text-xs text-[#7e8e9c] flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-[#f46c1c]" />
            <span>추천 질문:</span>
          </span>
          {SUGGESTED_QUERIES.map((suggested, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleChipClick(suggested)}
              className="text-xs px-2.5 py-1 rounded-full bg-[#0a0e0f] hover:bg-[#542e19]/40 text-[#c2cfdc] hover:text-[#f46c1c] border border-[#242e34] hover:border-[#6a4128] transition-colors cursor-pointer"
            >
              &quot;{suggested}&quot;
            </button>
          ))}
        </div>
      </div>
  );
};
