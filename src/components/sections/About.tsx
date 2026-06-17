import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="01">{t('about.label').toUpperCase()}</SectionHeading>

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
    </section>
  )
}
