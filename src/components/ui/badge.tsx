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
          'border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700/80',
        destructive:
          'border-red-300 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/20 dark:text-red-400',
        outline:
          'border-slate-300 text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500',
        cyan: 'border-cyan-300 bg-cyan-50 text-cyan-800 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-500/20',
        amber:
          'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-500/20',
        emerald:
          'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-500/20',
        glow: 'border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-teal-500/15 to-emerald-500/15 text-cyan-900 dark:text-cyan-200 dark:border-cyan-400/40 shadow-xs shadow-cyan-500/10 hover:shadow-cyan-500/20',
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
