import { useTranslation } from 'react-i18next'
import { AnimatedCounter } from '@/components/effects/AnimatedCounter'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

const stats = [
  { key: 'ads_accounts', end: 100, suffix: '+' },
  { key: 'countries', end: 20, suffix: '+' },
  { key: 'systems', end: 5, suffix: '+' },
  { key: 'commits', end: 500, suffix: '+' },
]

export function Stats() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden px-6 py-20">
      {/* Background accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <ScrollReveal>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(stat => (
            <AnimatedCounter
              key={stat.key}
              end={stat.end}
              suffix={stat.suffix}
              label={t(`stats.${stat.key}`)}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
