import type {
  PersonalInfo,
  SkillGroup,
  MajorProject,
  SideProject,
  LeadershipCard,
  TimelineNode,
} from '@/types/portfolio';

// EnergyWatch Web & CMS Images
import ew05 from '@/assets/images/01_EnergyWatch/ew_05.png';
import ew06 from '@/assets/images/01_EnergyWatch/ew_06.png';
import ew07 from '@/assets/images/01_EnergyWatch/ew_07.png';
import ew08 from '@/assets/images/01_EnergyWatch/ew_08.png';
import ew11 from '@/assets/images/01_EnergyWatch/ew_11.png';
import ew12 from '@/assets/images/01_EnergyWatch/ew_12.png';
import ew13 from '@/assets/images/01_EnergyWatch/ew_13.png';
import ew14 from '@/assets/images/01_EnergyWatch/ew_14.png';
import ew15 from '@/assets/images/01_EnergyWatch/ew_15.png';
import ew16 from '@/assets/images/01_EnergyWatch/ew_16.png';
import ew17 from '@/assets/images/01_EnergyWatch/ew_17.png';

// EnergyWatch Mobile App Images
import ewMobileDemo from '@/assets/images/01_EnergyWatch/ew_mobile_demo.gif';
import ew24 from '@/assets/images/01_EnergyWatch/ew_24.jpg';
import ew25 from '@/assets/images/01_EnergyWatch/ew_25.jpg';
import ew26 from '@/assets/images/01_EnergyWatch/ew_26.jpg';
import ew27 from '@/assets/images/01_EnergyWatch/ew_27.jpg';
import ew28 from '@/assets/images/01_EnergyWatch/ew_28.jpg';
import ew29 from '@/assets/images/01_EnergyWatch/ew_29.jpg';

// GF2 Images & GIFs (리뉴얼 최신 이미지)
import gf211 from '@/assets/images/02_gf2/gf2_11.png';
import gf212 from '@/assets/images/02_gf2/gf2_12.png';
import gf213 from '@/assets/images/02_gf2/gf2_13.png';
import gf214 from '@/assets/images/02_gf2/gf2_14.png';
import gf215 from '@/assets/images/02_gf2/gf2_15.jpg';
import gf216 from '@/assets/images/02_gf2/gf2_16.gif';

// Side Projects Images
import steam01 from '@/assets/images/03_grid/steam_01.gif';
import algo01 from '@/assets/images/05_nc/algo_01.png';
import map01 from '@/assets/images/06_map/map_01.png';
import vote01 from '@/assets/images/07_lo/vote_01.png';
import vote02 from '@/assets/images/07_lo/vote_02.png';
import vote03 from '@/assets/images/07_lo/vote_03.png';
import vote04 from '@/assets/images/07_lo/vote_04.png';
import vote06 from '@/assets/images/07_lo/vote_06.jpg';
import radish01 from '@/assets/images/08_radish/radish_01.png';

export type PortfolioData = {
  profile: PersonalInfo;
  timeline: TimelineNode[];
  skills: SkillGroup[];
  majorProjects: MajorProject[];
  sideProjects: SideProject[];
  leadership: LeadershipCard[];
};

export const portfolioData: PortfolioData = {
  profile: {
    name: '박민우',
    englishName: 'PARK MINWOO',
    role: '시니어 프론트엔드 개발자',
    experienceYears: '14년',
    summary:
      'IoT 솔루션 기업에서 B2B SaaS 플랫폼의 프론트엔드를 단독 구축하고 6년간 운영했습니다. 레거시 시스템의 현대화부터 크로스플랫폼 앱 개발까지, 비즈니스가 필요로 하는 기술적 판단을 내리고 실행해 왔습니다.',
    contact: {
      email: 'pmw0310@gmail.com',
      github: 'https://github.com/blackolf',
      blog: 'https://mammoth-llama-22f.notion.site/26ec51a3be4a812cb04dd52358c83113',
    },
    stats: [
      {
        label: 'Years FE Experience',
        value: '6+',
        colorClass: 'text-emerald-600 dark:text-cyan-brand',
      },
      {
        label: 'IoT SaaS Platform',
        value: 'B2B',
        colorClass: 'text-amber-500 dark:text-amber-brand',
      },
      {
        label: 'Side Projects',
        value: '7+',
        colorClass: 'text-emerald-500 dark:text-emerald-400',
      },
    ],
    highlights: [
      'AngularJS 레거시와 Next.js를 무중단(iframe+postMessage) 하이브리드 방식으로 병행 통합 구축',
      'WebSocket 실시간 모니터링 + ECharts 데이터 시각화 시스템 설계',
      'Flutter 크로스플랫폼 앱 단독 개발, 양대 앱스토어 배포',
    ],
  },

  timeline: [
    {
      id: 't-2011',
      year: '2011',
      role: '게임 개발자',
      description: '모바일 게임 개발',
      colorType: 'cyan',
      isTop: true,
      techStack: ['C#', 'Unity'],
      achievements: [
        'C# 및 Unity 엔진 기반 모바일 게임 개발',
        '게임 제작 및 파이프라인 효율화를 위한 전용 제작 툴 개발',
      ],
    },
    {
      id: 't-2014',
      year: '2015',
      role: '전자회로, MCU',
      description: '직업훈련학교',
      colorType: 'amber',
      isTop: false,
      techStack: ['C', 'ATmega', 'STM32', 'Arduino'],
      achievements: [
        '직업훈련학교에서 ATmega, 전자회로, C 언어 기술 습득',
        'STM32 및 아두이노(Arduino) MCU 펌웨어 독학 학습',
      ],
    },
    {
      id: 't-2016',
      year: '2016',
      role: '레티그리드 입사',
      description: '프론트엔드 전향',
      colorType: 'cyan',
      isTop: true,
      techStack: ['AngularJS', 'JavaScript', 'ECharts', 'jQuery'],
      achievements: [
        '기존 프로토타입 웹 프로젝트를 이어받아 본격적인 개발 시작',
        '장비 설정 및 하드웨어 연동 웹 제어 페이지 개발',
      ],
    },
    {
      id: 't-2018',
      year: '2018',
      role: 'EnergyWatch FE 리드',
      description: 'B2B SaaS 플랫폼 FE 전체 책임',
      colorType: 'cyan',
      isTop: true,
      techStack: [
        'Next.js',
        'React',
        'TypeScript',
        'AngularJS',
        'ECharts',
        'WebSocket',
        'MUI',
      ],
      achievements: [
        'AngularJS & Next.js 무중단 하이브리드 병행 아키텍처 구축 주도',
        'WebSocket 차트 실시간 전력 모니터링 SaaS 구축',
      ],
    },
    {
      id: 't-2020',
      year: '2020',
      role: '사이드 프로젝트',
      description: '실사용자 중심 웹 서비스 개발',
      colorType: 'green',
      isTop: false,
      techStack: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
      achievements: [
        '사용자 니즈에 맞춘 유용한 웹 서비스 및 웹 툴 지속 런칭',
        'Vercel 기반 자동 배포(CI/CD) 및 반응형 웹 UI 구현',
      ],
    },
    {
      id: 't-2023',
      year: '2023',
      role: 'Flutter 앱 출시',
      description: '크로스플랫폼 앱 양대 마켓 배포',
      colorType: 'cyan',
      isTop: true,
      techStack: ['Flutter', 'Dart', 'Firebase'],
      achievements: [
        'iOS 및 Android App Store 심사 통과 및 정식 배포',
        '실시간 푸시 알림(FCM) 및 모바일 앱 상태 관리 구현',
      ],
    },
    {
      id: 't-2024',
      year: '2024',
      role: '새로운 도전',
      description: '레티그리드 퇴사 다음 단계를 향해',
      colorType: 'amber',
      isTop: false,
      techStack: [
        'Next.js',
        'React',
        'NestJS',
        'MongoDB',
        'Zustand',
        'Vercel',
        'pnpm Monorepo',
      ],
      achievements: [
        'Next.js 15 + NestJS 11 기반 사이드 프로젝트 pnpm 모노레포 아키텍처 수립',
        '독립 프로덕션 운영을 통해 월간 활성 사용자(MAU) 5,000명 달성',
      ],
    },
  ],

  skills: [
    {
      category: 'Frontend Core',
      skills: [
        { name: 'React', isPrimary: true },
        { name: 'Next.js', isPrimary: true },
        { name: 'TypeScript', isPrimary: true },
        { name: 'AngularJS', isPrimary: false },
        { name: 'Vue 2', isPrimary: false },
      ],
    },
    {
      category: 'State & Styling',
      skills: [
        { name: 'Redux', isPrimary: true },
        { name: 'MUI', isPrimary: true },
        { name: 'SCSS', isPrimary: true },
        { name: 'Styled Components', isPrimary: true },
        { name: 'Tailwind CSS', isPrimary: false },
        { name: 'Zustand', isPrimary: false },
        { name: 'Emotion', isPrimary: false },
      ],
    },
    {
      category: 'Data Visualization & Libs',
      skills: [
        { name: 'ECharts', isPrimary: true },
        { name: 'Motion', isPrimary: false },
        { name: 'Recharts', isPrimary: false },
      ],
    },
    {
      category: 'Mobile',
      skills: [
        { name: 'Flutter', isPrimary: true },
        { name: 'Dart', isPrimary: true },
        { name: 'Provider', isPrimary: false },
        { name: 'Firebase', isPrimary: false },
        { name: 'WebSocket', isPrimary: false },
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'NestJS', isPrimary: false },
        { name: 'Node.js', isPrimary: false },
        { name: 'MongoDB', isPrimary: false },
        { name: 'GraphQL', isPrimary: false },
        { name: 'Redis', isPrimary: false },
      ],
    },
    {
      category: 'Deployment & Tools',
      skills: [
        { name: 'Vite', isPrimary: true },
        { name: 'Vercel', isPrimary: false },
        { name: 'pnpm Workspace', isPrimary: false },
        { name: 'Doppler', isPrimary: false },
        { name: 'Git', isPrimary: false },
        { name: 'Figma', isPrimary: false },
      ],
    },
  ],

  majorProjects: [
    {
      id: 'legacy-migration',
      title: '서비스 무중단 레거시 마이그레이션',
      subtitle: 'AngularJS & Next.js 하이브리드 아키텍처',
      badge: 'LEGACY MIGRATION',
      period: 'EnergyWatch 서비스 고도화',
      role: 'Next.js 병행 연동 아키텍처 단독 설계 및 핵심 분석 컴포넌트 개발',
      techStack: ['Next.js', 'AngularJS', 'postMessage', 'MUI'],
      summary:
        '전체 재작성의 리스크 대신 가장 복잡한 데이터 분석 페이지를 Next.js로 개발하여, iframe + postMessage 기반 공존 아키텍처로 무중단 병행 운용 시스템을 구축했습니다.',
      highlightText:
        '서비스 중단 없이 핵심 페이지부터 점진적 전환 성공. 신기술 도입의 안전한 경로를 확보',
      features: [
        {
          title: '문제',
          bulletColor: 'emerald',
          description: 'AngularJS 기반 레거시 시스템의 유지보수 한계와 신기능 개발 병목',
        },
        {
          title: '판단',
          bulletColor: 'amber',
          description:
            '전체 재작성 대신 가장 복잡한 데이터 분석 페이지를 우선 전환하여 핵심 컴포넌트와 아키텍처를 먼저 확보',
        },
        {
          title: '변화',
          bulletColor: 'emerald',
          description:
            'iframe + postMessage 기반 공존 아키텍처 구현. MUI 테마 통일, origin 검증 보안 체계, 동적 리사이징으로 끊김 없는 UX 확보',
        },
      ],
      outcomes: [
        '서비스 중단 없이 핵심 데이터 분석 페이지 하이브리드 연동 성공',
        '레거시와 신규 기술 스택 간의 무중단 공존 아키텍처 검증',
      ],
      galleryImages: [
        {
          url: ew14,
          title: '전력 분석 및 예측 대시보드',
          caption: '서비스의 핵심 데이터인 전력 사용량 분석 및 예측 대시보드 화면',
        },
        {
          url: ew05,
          title: '메인 대시보드',
          caption: '전체 사업장의 에너지 상태를 한눈에 파악하는 메인 대시보드 화면',
        },
        {
          url: ew06,
          title: '알람 목록 및 이력',
          caption: '전력 피크 및 설비 이상 알람 이력 관리 화면',
        },
        {
          url: ew15,
          title: '전력 분석 보고서',
          caption: '전력 사용 패턴 분석 및 종합 보고서 화면',
        },
        {
          url: ew13,
          title: '계통 전력 차트',
          caption: '각 사이트별 전력 흐름 및 계통 시각화 차트',
        },
        {
          url: ew16,
          title: '개별 장비 전력 부하 페이지',
          caption: '각 장비 단위의 전력 부하 모니터링 화면',
        },
        {
          url: ew17,
          title: '전력 데이터 종합 분석',
          caption: '일반적인 전력 분석 시 사용되는 종합 데이터 분석 페이지',
        },
      ],
    },
    {
      id: 'realtime-cms',
      title: '실시간 전력 모니터링 시스템',
      subtitle: 'WebSocket & ECharts 기반 시각화 시스템',
      badge: 'Real-Time Monitoring',
      period: 'EnergyWatch 핵심 서비스 모듈',
      role: '프론트엔드 모니터링 시스템 설계 및 실시간 파이프라인 개발',
      techStack: ['React', 'WebSocket', 'ECharts', 'Recharts', 'HTML5 Canvas'],
      summary:
        '초기 1회 API 연동 후 WebSocket 기반 실시간 스트리밍으로 전환하는 고성능 모니터링 대시보드와 자동 보고서 PDF 출력 시스템을 구현했습니다.',
      stats: [
        {
          statNumber: '30+',
          statLabel: '차트 종류',
          colorClass: 'text-emerald-500 dark:text-cyan-brand',
        },
        {
          statNumber: 'WS',
          statLabel: 'WebSocket 실시간',
          colorClass: 'text-amber-500 dark:text-amber-brand',
        },
        {
          statNumber: 'PDF',
          statLabel: '보고서 자동 출력',
          colorClass: 'text-emerald-500 dark:text-emerald-400',
        },
      ],
      features: [
        {
          title: 'API 초기 로드 + WebSocket 전환',
          bulletColor: 'emerald',
          description:
            '초기 데이터 표시용으로 API를 1회 호출한 뒤, 성공하면 WebSocket 통신을 시작하여 이후 실시간 데이터를 지속 수신하는 구조로 설계',
        },
        {
          title: 'ECharts 커스터마이징',
          bulletColor: 'amber',
          description:
            '전기 흐름의 동적 표현 등 공식 문서에 없는 요구사항을 속성 조합과 차트 레이어링으로 해결',
        },
        {
          title: '재사용 차트 아키텍처',
          bulletColor: 'emerald',
          description:
            '데이터 로딩, 에러 처리 등 공통 로직을 추상화한 컴포넌트로 수십 종류 차트의 개발 복잡도를 낮춤',
        },
      ],
      galleryImages: [
        {
          url: ew07,
          title: '압축 공기 시스템 분석',
          caption: '산업 현장 압축 공기 시스템 사용량 및 효율 분석 화면',
        },
        {
          url: ew11,
          title: '실시간 모니터링 주요 화면',
          caption: 'WebSocket 기반 실시간 전력 모니터링 영역 화면',
        },
        {
          url: ew12,
          title: '실시간 모니터링 전체 화면',
          caption: '실시간 전력 모니터링 대시보드 전체 화면 뷰',
        },
      ],
    },
    {
      id: 'iot-pipeline',
      title: '현장에서 클라우드까지 3-Tier 데이터 파이프라인',
      subtitle: 'IoT Hardware to Cloud EMS',
      badge: 'Data Pipeline',
      period: 'EnergyWatch 계측 파이프라인',
      role: '계측 데이터 시각화 및 웹 UI 연동',
      techStack: ['IoT Sensor Data', 'ECharts', 'WebSocket', 'Dashboard UI'],
      summary:
        'DS-125 계측모듈에서 DS-CBN 전력품질미터를 거쳐 Cloud EMS로 이어지는 현장 전력 데이터를 실시간 시각화하는 웹 파이프라인을 연동했습니다.',
      features: [
        {
          title: 'DS-125 계측모듈',
          description: '현장 전력 데이터 1차 수집 및 통신 모듈 연동',
        },
        {
          title: 'DS-CBN 전력품질미터',
          description: '고정밀 전력 데이터 측정 및 품질 분석 연계',
        },
        {
          title: 'Cloud EMS 통합 모니터링',
          description: '웹 대시보드로 집계된 데이터 실시간 시각화 렌더링',
        },
      ],
    },
    {
      id: 'flutter-app',
      title: 'EnergyWatch 크로스플랫폼 모바일 앱',
      subtitle: 'Flutter & Dart 기반 모바일 솔루션',
      badge: 'Cross-Platform Mobile',
      period: '2023',
      role: 'Flutter 모바일 앱 단독 개발 및 양대 마켓 배포',
      techStack: ['Flutter', 'Dart', 'Provider', 'WebSocket', 'Firebase'],
      summary:
        'PC 중심 웹 UI의 현장 접근성 한계를 극복하기 위해 Flutter로 iOS/Android 앱을 단독 개발하고 양대 마켓에 출시했습니다.',
      features: [
        {
          title: '모바일 최적화 UX',
          description:
            '웹 UI를 단순히 복사하지 않고 현장 엔지니어를 위한 모바일 맞춤 대시보드 설계.',
        },
        {
          title: 'Figma 디자이너 프로토타이핑',
          description: 'Figma 프로토타입 도입으로 디자인→개발 일관된 프로세스 정착.',
        },
        {
          title: '양대 스토어 배포 파이프라인',
          description:
            'iOS/Android 인증서 관리, 빌드 및 앱스토어/플레이스토어 심사 절차 독립 수행.',
        },
      ],
      galleryImages: [
        {
          url: ewMobileDemo,
          title: '모바일 로그인 페이지 (GIF)',
          caption: 'EnergyWatch 모바일 앱 로그인 및 인증 화면 애니메이션',
        },
        {
          url: ew24,
          title: '사이트 목록',
          caption: '사업장 및 공간 단위별 계측 사이트 목록 화면',
        },
        {
          url: ew25,
          title: '서비스 메뉴',
          caption: '모바일 주요 기능 및 네비게이션 서비스 메뉴',
        },
        {
          url: ew26,
          title: '실시간 모니터링 차트',
          caption: '모바일 최적화 실시간 전력 사용량 및 부하 추이 차트',
        },
        {
          url: ew27,
          title: '모니터링 차트 상세 보기',
          caption: '선택 시간대 및 기간별 모니터링 차트 상세 뷰',
        },
        {
          url: ew28,
          title: '설정 페이지 (언어 설정)',
          caption: '다국어 언어 설정, 푸시 알림 및 모바일 사용자 환경 설정',
        },
        {
          url: ew29,
          title: '메인 대시보드',
          caption: 'EnergyWatch 모바일 앱 실시간 종합 메인 대시보드',
        },
      ],
    },
    {
      id: 'gf2-blackolf',
      title: '소녀전선2 by BlackOlf',
      subtitle: 'gf2.blackolf.dev',
      badge: 'Community Platform (운영 중)',
      period: '2024 ~ 현재',
      role: '풀스택 모노레포 설계 & 서비스 독립 운영',
      techStack: [
        'Next.js 15',
        'NestJS 11',
        'MongoDB',
        'Zustand 5',
        'Vercel',
        'ECharts',
        'pnpm Monorepo',
      ],
      summary:
        'Next.js 15 + NestJS 11 + MongoDB 풀스택 pnpm 모노레포 아키텍처를 구축하고 Zustand 상태 관리와 Google Sheets API 연동으로 월간 이용자 5,000명 수준의 팬 커뮤니티 플랫폼을 독립 개발 및 운영 중입니다.',
      features: [
        {
          title: '월간 이용자 5,000명 수준 (MAU)',
          description: '출시 후 실사용자 유입 및 지속적인 팬 커뮤니티 트래픽 수용.',
        },
        {
          title: 'ISR + Google Sheets 아키텍처',
          description:
            'Sheets API로 데이터를 가져와 페이지를 미리 생성, 변경 시 필요한 페이지만 재빌드하는 유연한 구조.',
        },
        {
          title: '가챠 확률 시뮬레이터 & 패키지 가치 분석',
          description:
            '천장 시스템 확률 계산 연출과 인게임 유료 패키지 자동 가치 산출로 합리적 유저 판단 도구 제공.',
        },
        {
          title: '풀스택 + API 문서화',
          description:
            'NestJS + Swagger 연동으로 API 문서 자동화 및 MongoDB/Google Sheets 데이터 파이프라인 수립.',
        },
      ],
      galleryImages: [
        {
          url: gf211,
          title: '커뮤니티 메인 & 5대 서비스',
          caption:
            '과금 효율 계산기, 가챠 확률 계산기, 가챠 시뮬레이터, 웹 포토카드 메인 UI',
        },
        {
          url: gf212,
          title: '가챠 확률 시뮬레이터',
          caption: '천장 시스템 및 픽업 캐릭터 모델링 기반 실시간 가챠 시뮬레이션 UI',
        },
        {
          url: gf213,
          title: '가챠 확률 및 효율 예측 통계',
          caption:
            'ECharts 기반 천장 확률 분포, 누적 가챠 기대값 및 파편 획득 예측 대시보드',
        },
        {
          url: gf214,
          title: '인게임 패키지 과금 효율 분석',
          caption: 'Google Sheets 연동 인게임 패키지 가격 대비 효율 자동 계산 산출 표',
        },
        {
          url: gf215,
          title: '웹 포토 카드 갤러리',
          caption: '인게임 캐릭터 모션 호버 연출 및 웹 포토 카드 컬렉션 UI',
        },
        {
          url: gf216,
          title: '웹 포토 카드 플립 모션 데모',
          caption: 'CSS 3D Transform & 인터랙션 기반 실시간 포토 카드 플립 모션',
        },
      ],
    },
  ],

  sideProjects: [
    {
      id: 'steam-grid',
      title: '스팀 그리드 메이커',
      category: 'Web Tool',
      period: '2024',
      role: '단독 개발 & 웹 에디터 구축',
      description:
        'Fabric.js로 Canvas를 직접 제어, GIF까지 편집 가능한 이미지 에디터. 클라이언트 사이드에서 모든 처리 완료.',
      techStack: ['Next.js', 'Fabric.js', 'TypeScript'],
      link: 'https://grid.blackolf.dev/?g=',
      imageKey: 'images/03_grid/steam_01.gif',
      galleryImages: [
        {
          url: steam01,
          title: '스팀 그리드 메이커 에디터',
          caption: 'Fabric.js 기반 GIF 지원 캔버스 에디터',
        },
      ],
    },
    {
      id: 'nc-algo',
      title: '뉴럴클라우드 알고리즘',
      category: 'Web Service',
      period: '2023',
      role: '프론트엔드 유틸리티 설계',
      description:
        '요일별 아이템 획득 정보를 정리하고, 캐릭터별 필요 통계를 제공하여 효율적인 파밍 우선순위 결정을 지원.',
      techStack: ['React', 'Recharts', 'TypeScript'],
      link: 'https://pmw0310.github.io/nc_algorithm/',
      imageKey: 'images/05_nc/algo_01.png',
      galleryImages: [
        {
          url: algo01,
          title: '뉴럴클라우드 알고리즘 파밍 UI',
          caption: '요일별 아이템 파밍 및 캐릭터별 통계 리포트',
        },
      ],
    },
    {
      id: 'wuxia-map',
      title: '천애명월도M 지도',
      category: 'Web Map Service',
      period: '2022',
      role: '단독 개발 & 인터랙티브 지도 구축',
      description:
        'Leaflet으로 게임 좌표 시스템을 웹에 구현. 카테고리별 마커 필터링으로 도감 위치를 효율적으로 탐색.',
      techStack: ['React', 'Leaflet', 'TypeScript'],
      link: 'https://map.blackolf.com/',
      imageKey: 'images/06_map/map_01.png',
      galleryImages: [
        {
          url: map01,
          title: '천애명월도M Leaflet 지도',
          caption: 'Leaflet.js 기반 캔버스 지도 마커 필터링',
        },
      ],
    },
    {
      id: 'lo-vote',
      title: '라스트오리진 투표',
      category: 'Web Community',
      period: '2020',
      role: '풀스택 커뮤니티 개발',
      description:
        'GraphQL + Redis 캐싱으로 실시간 투표 집계. 세션 기반 중복 투표 방지와 빠른 응답속도 구현.',
      techStack: ['Next.js', 'GraphQL', 'Redis'],
      link: 'https://github.com/pmw0310/last-origin-vote',
      imageKey: 'images/07_lo/vote_01.png',
      galleryImages: [
        {
          url: vote01,
          title: '실시간 인기 투표 메인',
          caption: 'GraphQL + Redis 기반 실시간 집계 투표 웹 서비스',
        },
        {
          url: vote02,
          title: '투표 결과 집계 그래프',
          caption: '실시간 투표 결과 시각화 및 부문별 순위 차트',
        },
        {
          url: vote03,
          title: '세션 중복 방지 UI',
          caption: '중복 투표 방지 및 안전한 세션 검증 프로세스',
        },
        {
          url: vote04,
          title: '결과 상세 분석 대시보드',
          caption: '득표율 및 타임라인별 투표 참여 추이 분석',
        },
        { url: vote06, title: '모바일 반응형 뷰', caption: '모바일 반응형 투표 UI 화면' },
      ],
    },
    {
      id: 'radish-price',
      title: '동물의숲 무 예측',
      category: 'Utility App',
      period: '2020',
      role: '알고리즘 구현 및 첫 토이 프로젝트',
      description:
        '알려진 가격 패턴 알고리즘 기반으로 해당 주의 무 가격 등락을 예측. Vue 2 첫 토이 프로젝트.',
      techStack: ['Vue 2', 'JavaScript'],
      link: 'https://blackolf.com/radish/',
      imageKey: 'images/08_radish/radish_01.png',
      galleryImages: [
        {
          url: radish01,
          title: '동물의숲 무 가격 예측기',
          caption: '알고리즘 기반 무 가격 등락 패턴 분석 UI',
        },
      ],
    },
  ],

  leadership: [
    {
      id: 'lead-1',
      title: '프론트엔드 단독 구축',
      description:
        '약 4년간 B2B SaaS 플랫폼의 프론트엔드 전반을 1인으로 책임. 기술 스택 선정, 아키텍처 설계부터 전체 기능 개발, 배포, 운영까지 주도',
      details: [
        '기술 스택 선정 및 아키텍처 설계',
        '1인 프론트엔드 전반 리드',
        '전 기능 개발, 배포 및 프로덕션 운영',
      ],
      metricNumber: '~4',
      metricLabel: '년간 FE 독립 운영',
    },
    {
      id: 'lead-2',
      title: '주니어 채용 & 멘토링',
      description:
        '프론트엔드 팀 확장을 위한 채용 프로세스 참여. 코드 리뷰와 페어 프로그래밍으로 신규 개발자가 팀에 빠르게 적응하도록 이끌음',
      details: [
        '채용 프로세스 참여 및 팀 확장',
        '코드 리뷰 문화 수립 및 정착',
        '페어 프로그래밍 기반 온보딩',
      ],
      metricNumber: 'CR',
      metricLabel: 'Code Review & Pair Programming',
    },
    {
      id: 'lead-3',
      title: 'UI/UX 직접 설계',
      description:
        '전담 디자이너 없이 사용자 친화적인 UI를 완성. 개발 도중 Figma를 독학하여 프로토타입→개발 프로세스를 스스로 도입하고 정착',
      details: [
        'Figma 독학 및 디자인 시스템 수립',
        '프로토타입→개발 프로세스 정착',
        '사용자 중심 UI/UX 직접 설계',
      ],
      metricNumber: 'Figma',
      metricLabel: '독학 후 프로세스 도입',
    },
  ],
};
