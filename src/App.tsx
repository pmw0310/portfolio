import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { useTheme } from '@/hooks/useTheme';
import { Header } from '@/components/Header';
import { HeroSection } from '@/features/hero/HeroSection';
import { ProfileSection } from '@/features/profile/ProfileSection';
import { CareerTimelineSection } from '@/features/timeline/CareerTimelineSection';
import { EnterpriseEmsSection } from '@/features/projects/EnterpriseEmsSection';
import { IotPipelineSection } from '@/features/projects/IotPipelineSection';
import { MobileAppSection } from '@/features/projects/MobileAppSection';
import { SideProjectsSection } from '@/features/projects/SideProjectsSection';
import { LeadershipSection } from '@/features/leadership/LeadershipSection';
import { ContactSection } from '@/features/contact/ContactSection';

/**
 * 포트폴리오 메인 애플리케이션 컴포넌트 (다크/라이트 테마 제어)
 * @returns 포트폴리오 메인 페이지
 */
export const App: React.FC = () => {
  const [isDark, toggleTheme] = useTheme();

  const flutterProject = portfolioData.majorProjects.find((p) => p.id === 'flutter-app');
  const gf2Project = portfolioData.majorProjects.find((p) => p.id === 'gf2-blackolf');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white dark:selection:bg-cyan-brand dark:selection:text-slate-950 transition-colors duration-300">
      {/* 1. 상단 고정 네비게이션 헤더 (테마 토글 포함) */}
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      {/* 2. 히어로 커버 섹션 */}
      <HeroSection profile={portfolioData.profile} />

      {/* 3. 프로필 & 스킬 그리드 섹션 */}
      <ProfileSection profile={portfolioData.profile} skills={portfolioData.skills} />

      {/* 4. 경력 타임라인 섹션 */}
      <CareerTimelineSection timeline={portfolioData.timeline} />

      {/* 5. 주요 B2B EMS & CMS 프로젝트 섹션 */}
      <EnterpriseEmsSection projects={portfolioData.majorProjects} />

      {/* 6. 3-Tier IoT 데이터 파이프라인 섹션 */}
      <IotPipelineSection />

      {/* 7. Flutter 모바일 앱 섹션 */}
      <MobileAppSection project={flutterProject} />

      {/* 8. 리더십 & 프로세스 개선 섹션 */}
      <LeadershipSection leadership={portfolioData.leadership} />

      {/* 9. 사이드 프로젝트 컬렉션 & GF2 커뮤니티 플랫폼 섹션 */}
      <SideProjectsSection
        gf2Project={gf2Project}
        sideProjects={portfolioData.sideProjects}
      />

      {/* 10. 연락처 & 푸터 섹션 */}
      <ContactSection profile={portfolioData.profile} />
    </div>
  );
};

export default App;
