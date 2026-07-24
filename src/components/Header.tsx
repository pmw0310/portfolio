import React, { useState, useEffect } from 'react';

/**
 * 네비게이션 메뉴 항목 타입
 */
type NavItem = {
  label: string;
  targetId: string;
};

const navItems: NavItem[] = [
  { label: '소개', targetId: 'about' },
  { label: '경력', targetId: 'timeline' },
  { label: '주요 프로젝트', targetId: 'projects' },
  { label: '사이드 프로젝트', targetId: 'side-projects' },
  { label: '리더십', targetId: 'leadership' },
  { label: '연락처', targetId: 'contact' },
];

/**
 * 상단 반응형 네비게이션 헤더 컴포넌트
 * @returns 헤더 엘리먼트
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* 브랜드 로고 */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="text-lg md:text-xl font-bold font-display tracking-tight text-white flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="text-cyan-brand">PARK</span> MINWOO
        </button>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleNavClick(item.targetId)}
              className="text-sm font-medium text-slate-300 hover:text-cyan-brand transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메인 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleNavClick(item.targetId)}
              className="block w-full text-left py-2 text-base font-medium text-slate-300 hover:text-cyan-brand transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
