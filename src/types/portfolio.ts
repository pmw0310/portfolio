/**
 * 개인 프로필 기본 정보 타입
 */
export type PersonalInfo = {
  name: string;
  englishName: string;
  role: string;
  experienceYears: string;
  summary: string;
  highlights: string[];
  stats: {
    label: string;
    value: string;
    colorClass?: string;
  }[];
  contact: {
    email: string;
    phone?: string;
    github?: string;
    blog?: string;
  };
};

/**
 * 경력 타임라인 노드 타입
 */
export type TimelineNode = {
  id: string;
  year: string;
  role: string;
  company?: string;
  period?: string;
  description: string;
  colorType: 'cyan' | 'amber' | 'green' | 'gray';
  isTop?: boolean;
  techStack?: string[];
  achievements?: string[];
};

/**
 * 기술 스택 카테고리 타입
 */
export type SkillGroup = {
  category: string;
  skills: {
    name: string;
    isPrimary?: boolean;
  }[];
};

/**
 * 주요 프로젝트 딥다이브 상세 데이터 타입
 */
export type MajorProject = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  period: string;
  role: string;
  techStack: string[];
  summary: string;
  features: {
    title: string;
    description: string;
    statNumber?: string;
    statLabel?: string;
  }[];
  architecturePoints?: string[];
  outcomes?: string[];
  imageKey?: string;
};

/**
 * 사이드 프로젝트 타입
 */
export type SideProject = {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  role: string;
  techStack: string[];
  link?: string;
  imageKey?: string;
};

/**
 * 리더십 및 프로세스 개선 타입
 */
export type LeadershipCard = {
  id: string;
  title: string;
  description: string;
  metricNumber: string;
  metricLabel: string;
  details: string[];
};

/**
 * 포트폴리오 전체 데이터 인터페이스
 */
export type PortfolioData = {
  profile: PersonalInfo;
  timeline: TimelineNode[];
  skills: SkillGroup[];
  majorProjects: MajorProject[];
  sideProjects: SideProject[];
  leadership: LeadershipCard[];
};
