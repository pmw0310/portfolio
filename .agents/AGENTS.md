# 🚀 Portfolio React Renewal Rules (.agents/AGENTS.md)

## 1. 프로젝트 목적 및 기본 원칙
- **기반 문서**: 본 프로젝트는 기존 `html/index.html` (파워포인트에서 HTML로 변환된 소스)을 바탕으로 React + TypeScript 환경으로 리뉴얼하는 프로젝트입니다.
- **마이그레이션 방침**: PPT에서 변환된 HTML의 **텍스트, 이미지 자원, 슬라이드별 구성 내용 및 디자인 컨셉**을 1:1로 참조하되, 지저분한 고정 크기 인라인 스타일이나 변환 코드는 그대로 복사하지 않고 모던한 **React + Tailwind CSS 반응형 컴포넌트**로 깔끔하게 재설계합니다.
- **모바일 및 반응형 지원**: 기존 PPT의 1920x1080 데스크탑 고정 슬라이드 형태를 벗어나, **모바일/태블릿/데스크탑 등 모든 모바일 디바이스 환경에서 최적화된 반응형 레이아웃**으로 구축합니다.
- **기술 스택**: 
  - **Framework**: React + Vite + TypeScript (Next.js는 사용하지 않음)
  - **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **언어 및 문서화**: 모든 주석, JSDoc, 문서, 에이전트 대화 설명은 **한국어**로 작성합니다.

## 2. 코딩 표준 및 컨벤션 (Absolute Rules)
- **함수 선언**: 일반 `function` 키워드 대신 **화살표 함수**(`const Component = () => {}`)를 필수로 사용합니다.
- **경로 별칭**: 상대 경로(`../../`) 사용을 금지하고, **`@/` 경로 별칭**을 사용합니다. (예: `@/components`, `@/features`, `@/data` 등)
- **타입 안정성**:
  - `any` 타입 사용을 엄격히 금지합니다 (`unknown` 사용 후 타입 가드 작성).
  - `null` 또는 `undefined` 체크를 명확히 합니다 (Optional Chaining `?.` 적극 활용).
- **네이밍 규칙**:
  - 컴포넌트 / 타입: `PascalCase` 사용 (Interface 'I' 접두어 절대 금지).
  - 변수 / 함수 / 상수: `camelCase`, `UPPER_SNAKE_CASE` 준수.
  - Boolean 변수: is/should/has/can/did/will + 형용사/명사.
  - 이벤트 핸들러: `handle` + 동작 (예: `handleTabChange`).
- **JSDoc 작성 필수**: Export 되는 모든 함수 및 컴포넌트 상단에는 한국어 JSDoc(`/** ... */`)을 작성합니다.

## 3. 디렉토리 구조 및 마이그레이션 규칙
- **디렉토리 구조**:
  ```text
  src/
  ├── assets/          # 기존 html/images/ 등 이미지 및 미디어 자원
  ├── components/      # 재사용 가능한 UI 단위 컴포넌트 (Tag, Button, Card, Badge 등)
  ├── features/        # 포트폴리오 섹션/슬라이드 컴포넌트 (HeroSection, ExperienceSection, ProjectSection 등)
  ├── data/            # 기존 index.html의 텍스트/경력/프로젝트 데이터 TS 모듈 (src/data/portfolioData.ts)
  ├── types/           # TS 타입 정의 (src/types/portfolio.ts)
  ├── styles/          # Tailwind 글로벌 설정 및 커스텀 유틸리티
  └── App.tsx
  ```
- **데이터 분리**: 기존 `index.html` 내의 모든 텍스트, 경력, 프로젝트 정보는 `src/data/` 디렉토리 내의 TypeScript 객체 파일로 분리하여 관리합니다.
- **Tailwind CSS 적용**: 기존 `index.html`에서 정의된 Custom Properties(`--navy`, `--cyan`, `--amber` 등)를 Tailwind CSS의 색상 테마 및 유틸리티 클래스로 매핑하여 개발합니다.
