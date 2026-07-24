import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 조건부 클래스 이름 및 Tailwind CSS 클래스 병합 유틸리티 함수
 * @param inputs - 병합할 클래스 이름 목록
 * @returns 병합된 클래스 이름 문자열
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
