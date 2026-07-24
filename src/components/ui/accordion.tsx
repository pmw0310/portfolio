import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export type AccordionItemProps = {
  value: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
};

/**
 * shadcn/ui 스타일의 AccordionItem 컴포넌트
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300',
        isOpen ? 'border-cyan-400/50 dark:border-cyan-400/50 shadow-md' : '',
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <span className="text-sm md:text-base">{title}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0',
            isOpen ? 'rotate-180 text-cyan-400' : ''
          )}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1 pt-3">
          {children}
        </div>
      )}
    </div>
  );
};
