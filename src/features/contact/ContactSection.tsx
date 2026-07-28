import React, { useState } from 'react';
import { motion } from 'motion/react';
import type { PersonalInfo } from '@/types/portfolio';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FaGithub } from 'react-icons/fa';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
  FileText,
} from 'lucide-react';

export type ContactSectionProps = {
  profile: PersonalInfo;
};

/**
 * 모던 인터랙티브 Contact 섹션 컴포넌트 (FAQ 및 Subject 제거 후 정돈)
 * @param props ContactSectionProps
 * @returns 연락처 섹션 엘리먼트
 */
export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // mailto 실행
    const mailtoUrl = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
      `[포트폴리오 문의] ${formData.name}님의 메시지`
    )}&body=${encodeURIComponent(
      `이름: ${formData.name}\n이메일: ${formData.email}\n\n내용:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 px-4 md:px-8 overflow-hidden transition-colors border-t border-slate-200 dark:border-slate-800"
    >
      {/* 배경 은은한 빛 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/5 dark:bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <SectionHeader
          category="Get In Touch"
          title="함께 대화 나누고 싶으신가요?"
          description="채용 제안, 기술 논의, 포트폴리오 질문 등 언제든 편하게 메시지를 남겨주세요."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* 좌측 정보 카드 (Slide from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 flex"
          >
            <Card className="p-8 bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md flex flex-col justify-between w-full space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="glow" className="gap-1 px-3 py-1">
                    <Sparkles className="w-3.5 h-3.5" /> Contact Info
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-cyan-400 font-semibold">
                    {profile.role}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </p>
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <Mail className="w-4 h-4 text-emerald-500 dark:text-cyan-400 shrink-0" />
                      <span className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 truncate">
                        {profile.contact.email}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-cyan-400 shrink-0"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>복사됨!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>복사</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 우측 메시지 전송 폼 (Slide from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 flex"
          >
            <Card className="p-6 md:p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xl w-full flex flex-col justify-between">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Send A Message <Send className="w-5 h-5 text-cyan-400" />
                </CardTitle>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  아래 항목을 작성하시면 메일 클라이언트로 연결되어 편하게 문의하실 수
                  있습니다.
                </p>
              </CardHeader>

              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                {isSubmitted ? (
                  <div className="p-8 text-center space-y-4 bg-emerald-50 dark:bg-cyan-950/30 rounded-2xl border border-emerald-200 dark:border-cyan-800/40 my-auto">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-cyan-400 mx-auto" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      메일 작성 창으로 연결되었습니다!
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      열린 메일 앱에서 전송을 누르시면 메시지가 전달됩니다.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2"
                    >
                      다시 작성하기
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 flex flex-col h-full justify-between"
                  >
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            placeholder="성함 또는 기업명"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Your Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          placeholder="문의하실 내용이나 대화하고 싶은 주제를 자유롭게 작성해 주세요."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                          rows={6}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full font-bold gap-2 text-slate-950 mt-4"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 하단 푸터 & 소셜 뱃지 서브 바 */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} PARK MINWOO. All rights reserved.</p>
            <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">
              Designed & Built with React, TypeScript & shadcn/ui.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {profile.contact.github && (
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-2xs hover:scale-105"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
            {profile.contact.blog && (
              <a
                href={profile.contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all shadow-2xs hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>Notion Portfolio</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
