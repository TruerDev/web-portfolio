import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useState, useRef, type MouseEvent as ReactMouseEvent } from 'react'

interface Project {
  title: string
  description: string
  tags: string[]
  featured: boolean
  github?: string
  live?: string
}

const accentColors = [
  { border: 'hover:border-purple-500/40', glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]', tag: 'text-purple-400', dot: 'bg-purple-500' },
  { border: 'hover:border-cyan-500/40', glow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]', tag: 'text-cyan-400', dot: 'bg-cyan-500' },
  { border: 'hover:border-pink-500/40', glow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]', tag: 'text-pink-400', dot: 'bg-pink-500' },
  { border: 'hover:border-amber-500/40', glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]', tag: 'text-amber-400', dot: 'bg-amber-500' },
  { border: 'hover:border-emerald-500/40', glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]', tag: 'text-emerald-400', dot: 'bg-emerald-500' },
]

function TiltCard({
  children,
  className,
  glowClass,
}: {
  children: React.ReactNode
  className: string
  glowClass: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: ReactMouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      className={`${className} ${glowClass}`}
      style={{
        transform,
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as Project[]

  const featured = items.filter(p => p.featured)
  const other = items.filter(p => !p.featured)

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03.">{t('projects.label')}</SectionHeading>

        {/* Featured projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => {
            const accent = accentColors[i % accentColors.length]

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <TiltCard
                  className={`group flex h-full flex-col rounded-xl border border-slate-800 bg-[#13111f]/60 p-6 backdrop-blur-sm transition-all duration-300 ${accent.border}`}
                  glowClass={accent.glow}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${accent.dot}`} />
                      <Folder size={22} className={accent.tag} />
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 transition-colors hover:text-slate-200"
                          aria-label={`${project.title} source code`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 transition-colors hover:text-slate-200"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-slate-500 transition-colors group-hover:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {other.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-lg border border-slate-800/50 bg-[#13111f]/30 p-5 transition-colors hover:border-slate-700"
              >
                <h4 className="mb-2 font-medium text-slate-200">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 text-sm text-slate-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[11px] text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
