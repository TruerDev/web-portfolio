import { useTranslation } from 'react-i18next'
import { Github, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

interface Project {
  title: string
  description: string
  tags: string[]
  featured: boolean
  github?: string
  live?: string
}

const cardColors = ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981']
const cardIcons = ['\u{1F480}', '\u{1F525}', '\u{26A1}', '\u{1F916}', '\u{1F4CA}']

export function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as Project[]
  const featured = items.filter(p => p.featured)
  const other = items.filter(p => !p.featured)

  return (
    <section id="projects" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="03">{t('projects.label').toUpperCase()}</SectionHeading>

        <div className="flex flex-col gap-5">
          {featured.map((project, i) => {
            const color = cardColors[i % cardColors.length]
            return (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div
                  className="accent-card group rounded-xl border border-white/5 p-6"
                  style={{
                    background: `linear-gradient(135deg, ${color}0a, transparent)`,
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span style={{ fontSize: 18 }}>{cardIcons[i % cardIcons.length]}</span>
                    <span className="font-mono text-[13px] font-bold text-white">{project.title}</span>
                    <div className="ml-auto flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/20 transition-colors hover:text-white/60">
                          <Github size={15} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white/20 transition-colors hover:text-white/60">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 font-serif text-[13px] leading-[1.7] text-white/45">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded border px-2 py-0.5 font-mono text-[10px]" style={{ borderColor: `${color}25`, color: `${color}aa`, background: `${color}08` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {other.length > 0 && (
          <div className="mt-8 flex flex-col gap-4">
            {other.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="rounded-lg border border-white/5 bg-white/[0.01] p-5">
                  <p className="mb-2 font-mono text-[12px] font-bold text-white/60">{project.title}</p>
                  <p className="mb-3 font-serif text-[12px] text-white/30">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] text-white/15">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
