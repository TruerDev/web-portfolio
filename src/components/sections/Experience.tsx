import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

interface Role {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
}

const roleColors = ['#8b5cf6', '#06b6d4', '#f59e0b']

export function Experience() {
  const { t } = useTranslation()
  const roles = t('experience.roles', { returnObjects: true }) as Role[]

  return (
    <section id="experience" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="02">{t('experience.label').toUpperCase()}</SectionHeading>

        <div className="flex flex-col gap-5">
          {roles.map((role, i) => {
            const color = roleColors[i % roleColors.length]
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="accent-card rounded-xl border border-white/5 p-6"
                  style={{
                    background: `linear-gradient(135deg, ${color}0a, transparent)`,
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[13px] font-bold text-white">
                      {role.title}
                    </span>
                    <span
                      className="rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[2px]"
                      style={{ background: `${color}15`, borderColor: `${color}30`, color }}
                    >
                      {role.period}
                    </span>
                  </div>
                  <p className="mb-1 font-mono text-[11px] text-white/25">{role.company}</p>
                  <p className="mb-4 font-serif text-[13px] leading-[1.7] text-white/45">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.highlights.map((h, j) => (
                      <span key={j} className="rounded border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-white/30">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
