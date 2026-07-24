import type { PortfolioData } from '@/types/portfolio';

/**
 * 박민우 시니어 프론트엔드 개발자 포트폴리오 데이터
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: '박민우',
    englishName: 'PARK MINWOO',
    role: '시니어 프론트엔드 개발자',
    experienceYears: '6+',
    summary:
      'IoT 솔루션 기업에서 B2B SaaS 플랫폼의 프론트엔드를 단독 구축하고 6년간 운영했습니다. 레거시 시스템의 현대화부터 크로스플랫폼 앱 개발까지, 비즈니스가 필요로 하는 기술적 판단을 내리고 실행해 왔습니다.',
    highlights: [
      'AngularJS → Next.js 점진적 마이그레이션으로 서비스 무중단 현대화',
      'WebSocket 실시간 모니터링 + ECharts 데이터 시각화 시스템 설계',
      'Flutter 크로스플랫폼 앱 단독 개발, 양대 앱스토어 배포',
    ],
    stats: [
      { label: 'Years FE Experience', value: '6+', colorClass: 'text-cyan-brand' },
      { label: 'IoT SaaS Platform', value: 'B2B', colorClass: 'text-amber-brand' },
      { label: 'Side Projects', value: '7+', colorClass: 'text-green-brand' },
    ],
    contact: {
      email: 'pmw0310@gmail.com', // 대표 이메일
      github: 'https://github.com/pmw0310',
      blog: 'https://mammoth-llama-22f.notion.site/26ec51a3be4a812cb04dd52358c83113',
    },
  },

  timeline: [
    {
      id: 't-2011',
      year: '2011',
      role: '게임 개발자',
      description: 'C#, Unity 모바일 게임 개발',
      colorType: 'gray',
      isTop: false,
    },
    {
      id: 't-2015',
      year: '2015',
      role: '전환기',
      description: '전자회로, MCU 직업훈련학교',
      colorType: 'gray',
      isTop: true,
    },
    {
      id: 't-2016',
      year: '2016',
      role: '레티그리드 입사',
      description: '펌웨어 개발로 입사 → 프론트엔드로 전환',
      colorType: 'amber',
      isTop: false,
    },
    {
      id: 't-2018',
      year: '2018',
      role: 'EnergyWatch FE 리드',
      description: 'B2B SaaS 플랫폼 프론트엔드 전체 책임',
      colorType: 'cyan',
      isTop: true,
    },
    {
      id: 't-2020',
      year: '2020',
      role: '사이드 프로젝트',
      description: '커뮤니티 서비스 개발 (7개+ 프로젝트 운영)',
      colorType: 'green',
      isTop: false,
    },
    {
      id: 't-2023',
      year: '2023',
      role: 'Flutter 앱 출시',
      description: '크로스플랫폼 앱 양대 마켓 배포',
      colorType: 'cyan',
      isTop: true,
    },
    {
      id: 't-2024',
      year: '2024',
      role: '새로운 도전',
      description: '레티그리드 퇴사 및 다음 단계를 향해',
      colorType: 'amber',
      isTop: false,
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
        { name: 'Vue.js', isPrimary: false },
      ],
    },
    {
      category: 'State & Styling',
      skills: [
        { name: 'Redux', isPrimary: false },
        { name: 'SWR', isPrimary: false },
        { name: 'Provider', isPrimary: false },
        { name: 'Tailwind CSS', isPrimary: true },
        { name: 'MUI', isPrimary: false },
        { name: 'Emotion', isPrimary: false },
        { name: 'SCSS', isPrimary: false },
      ],
    },
    {
      category: 'Data Visualization',
      skills: [
        { name: 'ECharts', isPrimary: true },
        { name: 'Recharts', isPrimary: false },
        { name: 'D3.js', isPrimary: false },
        { name: 'Leaflet', isPrimary: false },
      ],
    },
    {
      category: 'Mobile',
      skills: [
        { name: 'Flutter', isPrimary: true },
        { name: 'Dart', isPrimary: true },
        { name: 'Firebase', isPrimary: false },
        { name: 'WebSocket', isPrimary: false },
      ],
    },
    {
      category: 'Backend (Side Projects)',
      skills: [
        { name: 'Node.js', isPrimary: false },
        { name: 'NestJS', isPrimary: false },
        { name: 'MongoDB', isPrimary: false },
        { name: 'GraphQL', isPrimary: false },
        { name: 'Redis', isPrimary: false },
      ],
    },
    {
      category: 'Tools & Infra',
      skills: [
        { name: 'Vite', isPrimary: true },
        { name: 'Git', isPrimary: false },
        { name: 'Figma', isPrimary: false },
        { name: 'Vercel', isPrimary: false },
        { name: 'NGINX', isPrimary: false },
      ],
    },
  ],

  majorProjects: [
    {
      id: 'legacy-migration',
      title: '서비스 무중단 레거시 마이그레이션',
      subtitle: 'AngularJS → Next.js 마이그레이션',
      badge: 'Legacy Migration',
      period: 'EnergyWatch 플랫폼 운영 기간',
      role: '프론트엔드 단독 아키텍처 설계 및 구현',
      techStack: ['Next.js', 'AngularJS', 'postMessage', 'MUI'],
      summary:
        '전체 재작성의 리스크 대신 가장 복잡한 데이터 분석 페이지를 우선 전환하여 iframe + postMessage 기반 공존 아키텍처로 무중단 마이그레이션을 성사시켰습니다.',
      features: [
        {
          title: '유지보수 병목 해결',
          description:
            'AngularJS 기반 레거시 시스템의 유지보수 한계와 신기능 개발 병목을 마이그레이션으로 완전 해소.',
        },
        {
          title: '핵심 분석 페이지선 전환',
          description:
            '전체 재작성 대신 데이터 분석 페이지를 우선 전환하여 핵심 컴포넌트와 아키텍처 안전성 확보.',
        },
        {
          title: 'iframe + postMessage 통신',
          description:
            'MUI 테마 통일, origin 검증 보안 체계 및 동적 리사이징으로 사용자가 인지할 수 없는 자연스러운 UX 확보.',
        },
      ],
      outcomes: [
        '서비스 중단 없이 핵심 데이터 분석 페이지 점진적 전환 성공',
        '신기술 도입 및 안정성 확보 아키텍처 검증',
      ],
    },
    {
      id: 'realtime-cms',
      title: '실시간 전력 모니터링 & CMS 대시보드',
      subtitle: 'WebSocket & ECharts 기반 시각화 시스템',
      badge: 'Real-Time Monitoring',
      period: 'EnergyWatch 핵심 서비스 모듈',
      role: '프론트엔드 모니터링 시스템 설계 및 실시간 파이프라인 개발',
      techStack: ['React', 'WebSocket', 'ECharts', 'Recharts', 'HTML5 Canvas'],
      summary:
        '초기 1회 API 연동 후 WebSocket 기반 실시간 스트리밍으로 전환하는 고성능 모니터링 대시보드와 자동 보고서 PDF 출력 시스템을 구현했습니다.',
      features: [
        {
          title: '30+ 차트 대시보드',
          description:
            '데이터 로딩, 에러 처리, 렌더링 최적화를 추상화한 공통 차트 아키텍처 구현.',
          statNumber: '30+',
          statLabel: '차트 종류',
        },
        {
          title: 'WebSocket 스트리밍',
          description:
            '주기적 폴링 방식 대신 WebSocket 데이터 수집으로 네트워크 부하 최소화 및 실시간 업데이트.',
          statNumber: 'WS',
          statLabel: '실시간 연결',
        },
        {
          title: '보고서 자동 PDF 출력',
          description:
            '클라이언트 사이드 렌더링 기반 고화질 대시보드 보고서 자동 PDF 출력 연동.',
          statNumber: 'PDF',
          statLabel: '보고서 생성',
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
    },
    {
      id: 'gf2-blackolf',
      title: '소녀전선2 by BlackOlf 팬 커뮤니티',
      subtitle: 'gf2.blackolf.dev',
      badge: 'Community Platform (운영 중)',
      period: '2024 ~ 현재',
      role: '풀스택 설계 & 서비스 독립 운영',
      techStack: ['Next.js', 'Google Sheets API', 'Framer Motion', 'Tailwind CSS'],
      summary:
        'Google Sheets API + ISR 아키텍처를 도입하여 일평균 다수의 유저가 방문하는 게임 커뮤니티 정보 플랫폼을 개발 및 운영 중입니다.',
      features: [
        {
          title: 'ISR + Google Sheets API',
          description:
            '데이터 변경 시 필요한 페이지만 재빌드하여 빠른 페이지 로딩 및 서버 유지비 제로 구현.',
        },
        {
          title: '가챠 확률 시뮬레이터',
          description:
            '복잡한 천장 시스템을 반영한 시뮬레이션 알고리즘 및 모션 연출 구현.',
        },
        {
          title: '캐릭터 카탈로그 & 가치 계산기',
          description: '유저 맞춤형 데이터 필터링 및 시각적 반응형 인터페이스 제공.',
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
      description:
        'Fabric.js로 Canvas를 직접 제어, GIF까지 편집 가능한 클라이언트 사이드 이미지 에디터.',
      role: '1인 제작',
      techStack: ['Next.js', 'Fabric.js', 'Canvas API'],
      imageKey: 'images/03_grid/steam_01.gif',
    },
    {
      id: 'nc-algorithm',
      title: '뉴럴클라우드 알고리즘',
      category: 'Game Data Web',
      period: '2023',
      description:
        '요일별 아이템 획득 정보를 정리하고 캐릭터별 필요 통계를 시각화하여 효율적 파밍 우선순위 지원.',
      role: '1인 제작',
      techStack: ['React', 'Recharts', 'TypeScript'],
      imageKey: 'images/05_nc/algo_01.png',
    },
    {
      id: 'mnh-map',
      title: '천애명월도M 인터랙티브 지도',
      category: 'Interactive Map',
      period: '2022',
      description:
        'Leaflet으로 게임 좌표 시스템을 웹에 구현하고 마커 필터링으로 위치 탐색을 돕는 지도 서비스.',
      role: '1인 제작',
      techStack: ['React', 'Leaflet', 'TypeScript'],
      imageKey: 'images/06_map/map_01.png',
    },
    {
      id: 'last-origin',
      title: '라스트오리진 실시간 투표',
      category: 'Realtime Poll',
      period: '2020',
      description:
        'GraphQL + Redis 캐싱으로 실시간 집계 및 세션 기반 중복 투표 방지를 구현한 시스템.',
      role: '1인 제작',
      techStack: ['Next.js', 'GraphQL', 'Redis'],
      imageKey: 'images/07_lo/vote_01.png',
    },
    {
      id: 'animal-crossing',
      title: '동물의숲 무 가격 예측기',
      category: 'Predictor Web App',
      period: '2020',
      description:
        '알려진 가격 패턴 알고리즘 기반으로 주간 가격 등락을 예측해주는 Vue.js 토이 프로젝트.',
      role: '1인 제작',
      techStack: ['Vue.js', 'JavaScript', 'Algorithm'],
      imageKey: 'images/08_radish/radish_01.png',
    },
  ],

  leadership: [
    {
      id: 'lead-fe',
      title: '프론트엔드 단독 구축 & 리딩',
      description:
        '약 4년간 B2B SaaS 플랫폼의 프론트엔드 전반을 1인으로 책임졌습니다. 기술 스택 선정, 아키텍처 설계, 개발, 배포, 운영 전 과정을 주도했습니다.',
      metricNumber: '~4년',
      metricLabel: 'FE 독립 운영',
      details: [
        '기술 스택 선정 및 아키텍처 설계',
        '전체 UI 컴포넌트 라이브러리 제작',
        '무중단 배포 및 운영 모니터링',
      ],
    },
    {
      id: 'lead-mentoring',
      title: '주니어 채용 & 멘토링',
      description:
        '프론트엔드 팀 확장을 위한 채용 프로세스에 참여하고 코드 리뷰와 페어 프로그래밍으로 신규 팀원의 개발 조기 적응을 도왔습니다.',
      metricNumber: 'CR',
      metricLabel: 'Code Review & Mentoring',
      details: [
        '채용 인터뷰 및 기술 과제 평가',
        '코드 리뷰 문화 도입',
        '1:1 페어 프로그래밍 멘토링',
      ],
    },
    {
      id: 'lead-design',
      title: 'UI/UX 프로토타이핑 직접 설계',
      description:
        '전담 디자이너 없이 Figma를 독학하여 개발 이전에 프로토타입을 자체 제작하고, 개발 프로세스와의 시너지를 극대화했습니다.',
      metricNumber: 'Figma',
      metricLabel: '디자인-개발 프로세스 구축',
      details: [
        'Figma 디자인 시스템 구축',
        '인터랙티브 프로토타입 제작',
        '모바일 최적화 UX 직접 가공',
      ],
    },
  ],
};
