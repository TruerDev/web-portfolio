import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/skills'

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{t('skills.label')}</SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-zinc-800 p-6 light:border-zinc-200"
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-purple-400">
                {t(`skills.categories.${cat.key}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, j) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + j * 0.03 }}
                    className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-purple-500/30 hover:text-purple-300 light:border-zinc-300 light:bg-zinc-100 light:text-zinc-700 light:hover:border-purple-400/40"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
