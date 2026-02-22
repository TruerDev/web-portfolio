import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Role {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export function Experience() {
  const { t } = useTranslation()
  const roles = t('experience.roles', { returnObjects: true }) as Role[]

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{t('experience.label')}</SectionHeading>

        <div className="relative ml-4 border-l border-zinc-800 pl-8 light:border-zinc-300">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative ${i < roles.length - 1 ? 'mb-12' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 light:border-zinc-400 light:bg-zinc-100">
                <Briefcase size={12} className="text-purple-400" />
              </div>

              <span className="mb-1 inline-block font-mono text-xs text-purple-400">
                {role.period}
              </span>
              <h3 className="text-lg font-semibold text-zinc-100 light:text-zinc-900">
                {role.title}
              </h3>
              <p className="mb-3 text-sm text-zinc-500">{role.company}</p>
              <p className="mb-4 leading-relaxed text-zinc-400 light:text-zinc-600">
                {role.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {role.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400 light:border-zinc-300 light:text-zinc-600"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
