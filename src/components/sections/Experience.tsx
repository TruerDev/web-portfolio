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
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02.">{t('experience.label')}</SectionHeading>

        <div className="relative ml-4 border-l border-slate-800 pl-10 lg:ml-8">
          {/* Animated gradient on the timeline line */}
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent" />

          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group relative ${i < roles.length - 1 ? 'mb-16' : ''}`}
            >
              {/* Timeline dot with glow */}
              <div className="absolute -left-[45px] flex h-7 w-7 items-center justify-center rounded-full border border-purple-500/30 bg-[#0a0a12] transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <Briefcase size={12} className="text-purple-400" />
              </div>

              {/* Card */}
              <div className="rounded-xl border border-slate-800/50 bg-[#13111f]/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/20 hover:bg-[#13111f]">
                <span className="mb-2 inline-block font-mono text-xs tracking-wider text-purple-400">
                  {role.period}
                </span>
                <h3 className="text-xl font-semibold text-slate-100">
                  {role.title}
                </h3>
                <p className="mb-4 text-sm text-slate-500">{role.company}</p>
                <p className="mb-5 leading-relaxed text-slate-400">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="rounded-full border border-slate-700/50 bg-slate-800/30 px-3 py-1 text-xs text-slate-400 transition-colors hover:border-purple-500/30 hover:text-purple-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
