import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import { skillCategories } from '@/data/skills'

const catColors: Record<string, string> = {
  test_automation: '#8b5cf6',
  ai_testing: '#ec4899',
  languages: '#06b6d4',
  data_backend: '#10b981',
  tooling: '#f59e0b',
}

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="04">{t('skills.label').toUpperCase()}</SectionHeading>

        <div className="flex flex-col gap-5">
          {skillCategories.map((cat, i) => {
            const color = catColors[cat.key] || '#8b5cf6'
            return (
              <ScrollReveal key={cat.key} delay={i * 0.08}>
                <div
                  className="accent-card rounded-xl border border-white/5 p-5"
                  style={{
                    background: `linear-gradient(135deg, ${color}06, transparent)`,
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[3px]" style={{ color }}>
                      {t(`skills.categories.${cat.key}`)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(skill => (
                      <span
                        key={skill.name}
                        className="cursor-default rounded border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-white/40 transition-all duration-200"
                        onMouseEnter={e => {
                          const el = e.currentTarget
                          el.style.borderColor = `${color}40`
                          el.style.color = color
                          el.style.boxShadow = `0 0 12px ${color}15`
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget
                          el.style.borderColor = 'rgba(255,255,255,0.05)'
                          el.style.color = 'rgba(255,255,255,0.4)'
                          el.style.boxShadow = 'none'
                        }}
                      >
                        {skill.name}
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
