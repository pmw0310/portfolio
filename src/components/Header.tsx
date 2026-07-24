import React, { useState, useEffect } from 'react';

type NavItem = {
  label: string;
  targetId: string;
};

const navItems: NavItem[] = [
  { label: '소개', targetId: 'about' },
  { label: '경력', targetId: 'timeline' },
  { label: '주요 프로젝트', targetId: 'projects' },
  { label: '리더십', targetId: 'leadership' },
  { label: '사이드 프로젝트', targetId: 'side-projects' },
  { label: '연락처', targetId: 'contact' },
];

export type HeaderProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

/**
 * 상단 반응형 네비게이션 헤더 컴포넌트 (다크/라이트 모드 토글 버튼 포함)
 * @param props HeaderProps
 * @returns 헤더 엘리먼트
 */
export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver를 이용한 ScrollSpy 감지
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.targetId);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* 브랜드 로고 */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="text-lg md:text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="text-emerald-600 dark:text-cyan-brand">PARK</span> MINWOO
        </button>

        {/* 데스크탑 네비게이션 & 테마 토글 */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.targetId}
                  type="button"
                  onClick={() => handleNavClick(item.targetId)}
                  className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-emerald-600 dark:text-cyan-brand font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-brand'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-cyan-brand rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 테마 토글 버튼 */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-300 dark:border-slate-700"
            aria-label="Toggle Dark/Light Mode"
            title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* 모바일 우측 버튼 묶음 (토글 + 햄버거) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
            aria-label="Toggle Dark/Light Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.targetId;
            return (
              <button
                key={item.targetId}
                type="button"
                onClick={() => handleNavClick(item.targetId)}
                className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-600 dark:text-cyan-brand font-bold pl-2 border-l-2 border-emerald-600 dark:border-cyan-brand'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-brand'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
