import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="01">{t('about.label').toUpperCase()}</SectionHeading>

        <div className="grid gap-14 md:grid-cols-[200px_1fr]">
          <ScrollReveal>
            <div className="group relative mx-auto w-fit md:mx-0">
              <div
                className="flex h-48 w-48 items-center justify-center rounded-xl border border-white/10"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), transparent)' }}
              >
                <span
                  className="font-display text-5xl"
                  style={{ color: '#8b5cf6', filter: 'drop-shadow(0 0 12px rgba(139,92,246,0.5))' }}
                >
                  KS
                </span>
              </div>
              <div className="absolute -inset-px rounded-xl border border-purple-500/0 transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]" />
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {(['p1', 'p2', 'p3'] as const).map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <p className="font-serif text-[14px] leading-[1.8] text-white/50">
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
