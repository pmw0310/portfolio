import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { RefreshCw } from 'lucide-react';

const mermaidDefinition = `
graph TB
    GITHUB["🐙 GitHub (소스코드)"]

    subgraph FE ["☁️ FRONTEND (Vercel)"]
        FE_APP["⚡ Next.js 16 (App Router & Three.js)"]
    end

    subgraph CI ["🚀 BACKEND CI/CD"]
        direction LR
        GHACTIONS["⚙️ GitHub Actions"] --> DOCKER["🐳 Docker Hub"]
    end

    subgraph NAS ["🏠 Synology NAS (On-Premises Infrastructure)"]
        subgraph BE_CONTAINER ["⚡ 백엔드 (NestJS 11)"]
            direction TB
            PM2["🔄 PM2 (2-Cluster Mode)"]
            BE_API["🤖 API 서버 (REST & RAG 서비스)"]
            PM2 --> BE_API
        end

        subgraph IMG_SYS ["🖼️ 이미지 서버 (Nginx)"]
            IMG_SRV["📐 동적 이미지 서빙 (URL 쿼리 리사이징)"]
        end

        subgraph MMD_SYS ["💃 MMD 서버"]
            MMD_SRV["📦 3D 모델 & 모션 데이터 서빙"]
        end
    end

    subgraph DATA_AI ["🌐 DATA & AI PIPELINE"]
        GEMINI["✨ Google Gemini API"]
        DB_MONGO["🍃 MongoDB Atlas"]
        DB_GSHEET["🟢 Google Sheets (관리 DB)"]
    end

    %% Deploy Flows
    GITHUB == "Vercel 자동 빌드/배포" ==> FE
    GITHUB -. "백엔드 푸시" .-> GHACTIONS
    DOCKER == "Watchtower 자동 배포" ==> BE_CONTAINER

    %% FE to NAS Flows
    FE_APP <-->|"API 통신 & RAG 질의"| BE_API
    FE_APP -->|"동적 리사이징 이미지 요청 (Query)"| IMG_SRV
    FE_APP -->|"3D MMD 모델·모션 로드 (Three.js 렌더링)"| MMD_SRV

    %% BE internal & external
    BE_API <--> DB_MONGO
    BE_API <--> GEMINI
    BE_API <--> DB_GSHEET

    classDef devopsStyle fill:#1e1e2e,stroke:#fab387,stroke-width:2px,color:#cdd6f4;
    classDef feStyle fill:#1e1e2e,stroke:#a6e3a1,stroke-width:2px,color:#cdd6f4;
    classDef beStyle fill:#1e1e2e,stroke:#f38ba8,stroke-width:2px,color:#cdd6f4;
    classDef imgStyle fill:#1e1e2e,stroke:#89dceb,stroke-width:2px,color:#cdd6f4;
    classDef mmdStyle fill:#1e1e2e,stroke:#b4befe,stroke-width:2px,color:#cdd6f4;
    classDef dataStyle fill:#1e1e2e,stroke:#f9e2af,stroke-width:2px,color:#cdd6f4;
    classDef gitStyle fill:#1e1e2e,stroke:#cba6f7,stroke-width:2px,color:#cdd6f4;

    class GITHUB gitStyle;
    class GHACTIONS,DOCKER devopsStyle;
    class FE_APP feStyle;
    class PM2,BE_API beStyle;
    class IMG_SRV imgStyle;
    class MMD_SRV mmdStyle;
    class DB_MONGO,DB_GSHEET,GEMINI dataStyle;
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
