import React from 'react';
import { motion } from 'motion/react';
import type { PersonalInfo, SkillGroup } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { TechTag } from '@/components/TechTag';
import { SpotlightCard } from '@/components/SpotlightCard';
import SplitText from '@/components/SplitText';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, Code2 } from 'lucide-react';

export type ProfileSectionProps = {
  profile: PersonalInfo;
  skills: SkillGroup[];
};

/**
 * 프로필 소개 & 스킬 카테고리 섹션 컴포넌트 (좌/우 방향성 애니메이션 적용)
 * @param props ProfileSectionProps
 * @returns 프로필 섹션 엘리먼트
 */
export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile, skills }) => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50/50 dark:bg-slate-950 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800/80 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          category="About Me & Skills"
          title="사용자의 문제를 발견하고, 기술로 해결하는 개발자"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 좌측 프로필 본문 및 하이라이트 카드 (좌측에서 오른쪽으로 Slide In) */}
          <div className="lg:col-span-5 space-y-6">
            <SplitText
              tag="p"
              text={profile.summary}
              className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-light"
              delay={15}
              duration={0.4}
              splitType="words"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Key Strengths & Core Values
              </div>

              {profile.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <SpotlightCard spotlightColor="rgba(0, 212, 170, 0.12)" className="p-5">
                    <p className="text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed font-medium">
                      {highlight}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 우측 기술 스택 그룹 그리드 (우측에서 왼쪽으로 Slide In) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: 'easeOut',
                }}
              >
                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                  className="p-0 overflow-hidden flex flex-col justify-between"
                >
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-sm font-semibold text-emerald-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-emerald-500 dark:text-cyan-400" />
                      {group.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {[...group.skills]
                        .sort((a, b) => Number(b.isPrimary) - Number(a.isPrimary))
                        .map((skill, sIdx) => (
                          <TechTag
                            key={sIdx}
                            name={skill.name}
                            isPrimary={skill.isPrimary}
                          />
                        ))}
                    </div>
                  </CardContent>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
