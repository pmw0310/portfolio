import React from 'react';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiAngular,
  SiVuedotjs,
  SiRedux,
  SiSwr,
  SiTailwindcss,
  SiMui,
  SiSass,
  SiApacheecharts,
  SiD3,
  SiLeaflet,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiGraphql,
  SiRedis,
  SiVite,
  SiGit,
  SiFigma,
  SiVercel,
  SiNginx,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiUnity,
  SiGooglecloud,
  SiStyledcomponents,
  SiWebpack,
  SiC,
  SiArduino,
  SiStmicroelectronics,
  SiSwiper,
  SiPnpm,
  SiSwagger,
  SiFramer,
  SiGooglegemini,
} from 'react-icons/si';
import {
  TbCode,
  TbChartDots,
  TbPlugConnected,
  TbBrandCSharp,
  TbLayersIntersect,
  TbCpu,
  TbShieldCheck,
  TbBox,
} from 'react-icons/tb';

export type TechIconProps = {
  /** 기술 스택 이름 */
  name: string;
  /** 추가 클래스 */
  className?: string;
};

/**
 * 기술 스택 이름별 적절한 SVG 아이콘 매핑 테이블
 */
const techIconMap: Record<string, { icon: IconType; color?: string }> = {
  React: { icon: SiReact, color: '#61DAFB' },
  'React 19': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs },
  'Next.js 15': { icon: SiNextdotjs },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  AngularJS: { icon: SiAngular, color: '#DD0031' },
  'Vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
  'Vue 2': { icon: SiVuedotjs, color: '#4FC08D' },
  Zustand: { icon: TbBox, color: '#443D3A' },
  Redux: { icon: SiRedux, color: '#764ABC' },
  SWR: { icon: SiSwr },
  Provider: { icon: TbLayersIntersect, color: '#02569B' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  MUI: { icon: SiMui, color: '#007FFF' },
  'MUI v7': { icon: SiMui, color: '#007FFF' },
  Emotion: { icon: SiReact, color: '#C767C4' },
  'Styled Components': { icon: SiStyledcomponents, color: '#DB7093' },
  'styled-components': { icon: SiStyledcomponents, color: '#DB7093' },
  SCSS: { icon: SiSass, color: '#CC6699' },
  ECharts: { icon: SiApacheecharts, color: '#AA344D' },
  Swiper: { icon: SiSwiper, color: '#6332F6' },
  Motion: { icon: SiFramer, color: '#0055FF' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  Recharts: { icon: TbChartDots, color: '#22B8CF' },
  'D3.js': { icon: SiD3, color: '#F9A03F' },
  Leaflet: { icon: SiLeaflet, color: '#199900' },
  Flutter: { icon: SiFlutter, color: '#02569B' },
  Dart: { icon: SiDart, color: '#0175C2' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
  WebSocket: { icon: TbPlugConnected, color: '#010101' },
  postMessage: { icon: TbPlugConnected, color: '#10B981' },
  'iframe + postMessage': { icon: TbPlugConnected, color: '#10B981' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  NestJS: { icon: SiNestjs, color: '#E0234E' },
  'NestJS 11': { icon: SiNestjs, color: '#E0234E' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  GraphQL: { icon: SiGraphql, color: '#E10098' },
  Redis: { icon: SiRedis, color: '#DC382D' },
  Vite: { icon: SiVite, color: '#646CFF' },
  Webpack: { icon: SiWebpack, color: '#8DD6F9' },
  'pnpm Workspace': { icon: SiPnpm, color: '#F69220' },
  'pnpm Monorepo': { icon: SiPnpm, color: '#F69220' },
  'pnpm monorepo': { icon: SiPnpm, color: '#F69220' },
  pnpm: { icon: SiPnpm, color: '#F69220' },
  PNPM: { icon: SiPnpm, color: '#F69220' },
  Doppler: { icon: TbShieldCheck, color: '#482475' },
  'Swagger API': { icon: SiSwagger, color: '#85EA2D' },
  Swagger: { icon: SiSwagger, color: '#85EA2D' },
  'Vercel Analytics': { icon: SiVercel },
  Git: { icon: SiGit, color: '#F05032' },
  Figma: { icon: SiFigma, color: '#F24E1E' },
  Vercel: { icon: SiVercel },
  NGINX: { icon: SiNginx, color: '#009639' },
  'C#': { icon: TbBrandCSharp, color: '#239120' },
  Unity: { icon: SiUnity },
  Python: { icon: SiPython, color: '#3776AB' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  'Google Sheets API': { icon: SiGooglecloud, color: '#34A853' },
  'Canvas API': { icon: SiHtml5, color: '#E34F26' },
  'HTML5 Canvas': { icon: SiHtml5, color: '#E34F26' },
  C: { icon: SiC, color: '#A8B9CC' },
  ATmega: { icon: TbCpu, color: '#00539B' },
  STM32: { icon: SiStmicroelectronics, color: '#03234C' },
  Arduino: { icon: SiArduino, color: '#00979D' },
  'Gemini API': { icon: SiGooglegemini, color: '#8E24AA' },
};

/**
 * 기술 스택명을 전달받아 브랜드 SVG 로고 아이콘을 렌더링하는 컴포넌트
 * @param props TechIconProps
 * @returns 로고 아이콘 컴포넌트 또는 기본 코드 아이콘
 */
export const TechIcon: React.FC<TechIconProps> = ({ name, className = '' }) => {
  const item = techIconMap[name];

  if (!item) {
    return <TbCode className={`inline-block shrink-0 ${className}`} />;
  }

  const IconComponent = item.icon;

  return (
    <IconComponent
      className={`inline-block shrink-0 ${className}`}
      style={item.color ? { color: item.color } : undefined}
    />
  );
};
