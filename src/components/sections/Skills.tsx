import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/skills'

const categoryAccents: Record<string, { bg: string; text: string; skillHover: string }> = {
  languages: { bg: 'bg-purple-500', text: 'text-purple-400', skillHover: 'hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]' },
  frontend: { bg: 'bg-cyan-500', text: 'text-cyan-400', skillHover: 'hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]' },
  backend: { bg: 'bg-emerald-500', text: 'text-emerald-400', skillHover: 'hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]' },
  tools: { bg: 'bg-amber-500', text: 'text-amber-400', skillHover: 'hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]' },
  ai: { bg: 'bg-pink-500', text: 'text-pink-400', skillHover: 'hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)]' },
}

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04.">{t('skills.label')}</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const accent = categoryAccents[cat.key] || categoryAccents.languages

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="rounded-xl border border-slate-800 bg-[#13111f]/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700"
              >
                {/* Category header with accent dot */}
                <div className="mb-5 flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${accent.bg}`} />
                  <h3 className={`font-mono text-sm font-medium ${accent.text}`}>
                    {t(`skills.categories.${cat.key}`)}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.1 + j * 0.04,
                      }}
                      className={`cursor-default rounded-lg border border-slate-700/50 bg-slate-800/30 px-3 py-1.5 text-sm text-slate-300 transition-all duration-200 ${accent.skillHover}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
