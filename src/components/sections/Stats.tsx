import { useTranslation } from 'react-i18next'
import { AnimatedCounter } from '@/components/effects/AnimatedCounter'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

const stats = [
  { key: 'accounts', end: 100, suffix: '+', color: '#8b5cf6' },
  { key: 'countries', end: 20, suffix: '+', color: '#06b6d4' },
  { key: 'platforms', end: 1000, suffix: '+', color: '#f59e0b' },
  { key: 'agents', end: 7, suffix: '', color: '#ec4899' },
]

export function Stats() {
  const { t } = useTranslation()

  return (
    <section className="relative px-5 py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <ScrollReveal>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.key}
              end={stat.end}
              suffix={stat.suffix}
              color={stat.color}
              delay={i * 150}
              label={t(`stats.${stat.key}`)}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
