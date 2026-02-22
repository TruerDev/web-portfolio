import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01.">{t('about.label')}</SectionHeading>

        <div className="grid gap-16 md:grid-cols-[260px_1fr]">
          {/* Avatar placeholder */}
          <ScrollReveal type="scale">
            <div className="group relative flex items-start justify-center">
              <div className="relative">
                {/* Decorative border */}
                <div className="absolute -inset-3 rounded-2xl border border-purple-500/20 transition-all duration-500 group-hover:border-purple-500/40 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]" />
                <div className="flex h-56 w-56 items-center justify-center rounded-2xl border border-slate-800 bg-[#13111f]">
                  {/* Replace with <img src="/avatar.jpg" alt="Klim Sarakeev" className="h-full w-full rounded-2xl object-cover" /> */}
                  <span className="bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text font-mono text-5xl font-bold text-transparent">
                    KS
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <div className="space-y-5">
            {(['p1', 'p2', 'p3'] as const).map((key, i) => (
              <ScrollReveal key={key} type="fade-up" delay={i * 0.12}>
                <p className="text-lg leading-relaxed text-slate-400">
                  {t(`about.${key}`)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
