import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { RefreshCw } from 'lucide-react';

const mermaidDefinition = `
graph TB
    subgraph USERS ["👤 ACCESS LAYER"]
        U_USER["🌐 일반 사용자"]
        U_ADMIN["🔐 관리자 (ISR Trigger)"]
    end

    subgraph DEVOPS ["🚀 DEVOPS & CI/CD PIPELINE"]
        GITHUB["🐙 GitHub (소스코드)"]
        GHACTIONS["⚙️ GitHub Actions (CI/CD)"]
        DOPPLER["🔒 Doppler (환경변수)"]
        DOCKER["🐳 Docker Hub (이미지 저장소)"]
    end

    subgraph FE ["☁️ FRONTEND (Vercel) - Next.js 15"]
        FE_API["⚡ API Route (재검증 핸들러)"]
        FE_ISR["📄 정적 페이지 (ISR)"]
        FE_DYN["🎮 동적 기능 (게임 / 좋아요)"]
    end

    subgraph BE ["🏠 BACKEND (Synology NAS Docker) - NestJS 11"]
        BE_ADMIN["🔐 관리자 모듈 (갱신 트리거)"]
        BE_GATEWAY["🚪 API 게이트웨이 & DTO"]
        BE_BIZ["🧠 비즈니스 로직 (게임 / 시트 / 좋아요)"]
        BE_SWAGGER["📑 Swagger UI (Basic Auth)"]
    end

    subgraph DB ["🌐 EXTERNAL DATA SERVICES"]
        DB_GSHEET["🟢 Google Sheets (게임 DB)"]
        DB_MONGO["🍃 MongoDB Atlas (클라우드 DB)"]
    end

    %% 연결 관계 (Access)
    U_USER --> FE_DYN
    U_USER --> FE_ISR
    U_ADMIN --> BE_ADMIN
    U_ADMIN -.-> BE_SWAGGER

    %% GitHub / Vercel / GitHub Actions / Docker Hub 파이프라인
    GITHUB --> FE_DYN
    GITHUB --> GHACTIONS
    GHACTIONS ==> DOCKER

    DOPPLER -.-> FE_DYN
    DOPPLER -.-> BE_GATEWAY
    DOCKER ==> BE_GATEWAY

    %% On-Demand Revalidation
    BE_ADMIN --> FE_ISR
    BE_ADMIN --> FE_API

    %% Frontend & Backend API Flow
    FE_DYN --> BE_GATEWAY
    BE_GATEWAY --> BE_BIZ

    %% Backend & Database Connections
    BE_BIZ -.-> DB_GSHEET
    BE_BIZ -.-> DB_MONGO

    BE_GATEWAY -.-> BE_SWAGGER

    classDef accessStyle fill:#1e1e2e,stroke:#89b4fa,stroke-width:2px,color:#cdd6f4;
    classDef devopsStyle fill:#1e1e2e,stroke:#fab387,stroke-width:2px,color:#cdd6f4;
    classDef feStyle fill:#1e1e2e,stroke:#a6e3a1,stroke-width:2px,color:#cdd6f4;
    classDef beStyle fill:#1e1e2e,stroke:#f38ba8,stroke-width:2px,color:#cdd6f4;
    classDef dbStyle fill:#1e1e2e,stroke:#f9e2af,stroke-width:2px,color:#cdd6f4;

    class U_USER,U_ADMIN accessStyle;
    class GITHUB,GHACTIONS,DOPPLER,DOCKER devopsStyle;
    class FE_API,FE_ISR,FE_DYN feStyle;
    class BE_ADMIN,BE_GATEWAY,BE_BIZ,BE_SWAGGER beStyle;
    class DB_GSHEET,DB_MONGO dbStyle;
`;

/**
 * 순수 Mermaid 플로우차트 아키텍처 차트 컴포넌트
 */
export const Gf2ArchitectureDiagram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgCode, setSvgCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [renderError, setRenderError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'Inter, system-ui, sans-serif',
      themeVariables: {
        darkMode: true,
        background: '#090d16',
        primaryColor: '#1e293b',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#3b82f6',
        lineColor: '#38bdf8',
        secondaryColor: '#0f172a',
        tertiaryColor: '#1e1e2e',
      },
    });

    const renderChart = async () => {
      try {
        setIsLoading(true);
        setRenderError(null);
        const uniqueId = `mermaid-gf2-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(uniqueId, mermaidDefinition);
        if (isMounted) {
          setSvgCode(svg);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setRenderError('아키텍처 차트를 렌더링하는 중 오류가 발생했습니다.');
          setIsLoading(false);
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full">
      {/* Mermaid 차트 뷰어 전용 영역 */}
      <div className="relative rounded-3xl border border-slate-800 bg-slate-950 p-4 md:p-6 overflow-x-auto min-h-[380px] flex items-center justify-center shadow-2xl">
        {/* 방사형 그라데이션 차트 배경 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)] pointer-events-none" />

        {isLoading && (
          <div className="flex flex-col items-center gap-3 text-slate-400 py-16">
            <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
            <span className="text-sm font-medium">Mermaid 차트 렌더링 중...</span>
          </div>
        )}

        {renderError && (
          <div className="text-rose-400 text-sm py-12 text-center">{renderError}</div>
        )}

        {!isLoading && !renderError && svgCode && (
          <div
            ref={containerRef}
            className="w-full flex justify-center overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          />
        )}
      </div>
    </div>
  );
};
