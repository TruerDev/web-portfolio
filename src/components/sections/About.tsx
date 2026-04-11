import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

export function About() {
  const { t } = useTranslation()
  const bullets = t('about.bullets', { returnObjects: true }) as string[]

  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="01">{t('about.label').toUpperCase()}</SectionHeading>

        <ScrollReveal>
          <p className="mb-8 font-serif text-[14px] leading-[1.8] text-white/50">
            {t('about.intro')}
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {bullets.map((bullet, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div
                className="flex gap-4 rounded-xl border border-white/5 p-5"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.04), transparent)' }}
              >
                <span
                  className="mt-0.5 font-mono text-[11px] font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-mono text-[12px] leading-[1.7] text-white/45">
                  {bullet}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
