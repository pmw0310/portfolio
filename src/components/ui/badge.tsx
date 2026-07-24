import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900',
        secondary:
          'border-slate-700/50 bg-slate-800/80 text-slate-300 hover:bg-slate-700/80',
        destructive: 'border-transparent bg-red-500/20 text-red-400 border-red-500/30',
        outline: 'border-slate-700 text-slate-300 hover:border-slate-500',
        cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50',
        amber:
          'border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/50',
        emerald:
          'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50',
        glow: 'border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-200 shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

/**
 * shadcn/ui 스타일의 Badge 컴포넌트
 * @param className - 추가 커스텀 스타일 클래스
 * @param variant - 뱃지 스타일 변주 (default, secondary, cyan, amber, emerald, glow 등)
 * @param props - HTML Div 속성
 */
export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};
