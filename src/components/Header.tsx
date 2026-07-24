import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
 * 상단 반응형 네비게이션 헤더 컴포넌트 (shadcn/ui Button 및 다크/라이트 모드 토글 포함)
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
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
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
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* 브랜드 로고 */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="text-lg md:text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="text-emerald-600 dark:text-cyan-400">PARK</span> MINWOO
        </button>

        {/* 데스크탑 네비게이션 & 테마 토글 */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <Button
                  key={item.targetId}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.targetId)}
                  className={cn(
                    'text-sm font-medium transition-colors cursor-pointer relative py-1 px-3',
                    isActive
                      ? 'text-emerald-600 dark:text-cyan-400 font-bold bg-emerald-500/10 dark:bg-cyan-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-400'
                  )}
                >
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* 테마 토글 버튼 */}
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleTheme}
            className="rounded-full w-9 h-9 border-slate-300 dark:border-slate-700"
            aria-label="Toggle Dark/Light Mode"
            title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </Button>
        </div>

        {/* 모바일 우측 버튼 묶음 (토글 + 햄버거) */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleTheme}
            className="rounded-full w-9 h-9 border-slate-300 dark:border-slate-700"
            aria-label="Toggle Dark/Light Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            )}
          </Button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.targetId;
            return (
              <Button
                key={item.targetId}
                variant="ghost"
                onClick={() => handleNavClick(item.targetId)}
                className={cn(
                  'w-full justify-start text-left py-2 text-base font-medium transition-colors',
                  isActive
                    ? 'text-emerald-600 dark:text-cyan-400 font-bold bg-emerald-500/10 dark:bg-cyan-500/10'
                    : 'text-slate-700 dark:text-slate-300'
                )}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
      )}
    </header>
  );
};
