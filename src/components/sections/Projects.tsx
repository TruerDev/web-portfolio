import { useTranslation } from 'react-i18next'
import { Github, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

interface Project {
  title: string
  description: string
  tags: string[]
  category: 'work' | 'personal'
  github?: string
  live?: string
}

const workColors = ['#8b5cf6', '#06b6d4', '#f59e0b']
const personalColors = ['#ec4899', '#10b981', '#f59e0b', '#06b6d4']

function ProjectCard({ project, index, colors }: { project: Project; index: number; colors: string[] }) {
  const color = colors[index % colors.length]

  return (
    <ScrollReveal delay={index * 0.08}>
      <div
        className="accent-card group rounded-xl border border-white/5 p-6"
        style={{
          background: `linear-gradient(135deg, ${color}0a, transparent)`,
          borderLeft: `3px solid ${color}`,
        }}
      >
        <div className="mb-3 flex items-center gap-3">
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
}

export function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as Project[]
  const work = items.filter(p => p.category === 'work')
  const personal = items.filter(p => p.category === 'personal')

  return (
    <section id="projects" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="03">{t('projects.label').toUpperCase()}</SectionHeading>

        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[3px] text-accent">
              {t('projects.work_label')}
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="flex flex-col gap-5">
            {work.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} colors={workColors} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[3px] text-accent">
              {t('projects.personal_label')}
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="flex flex-col gap-5">
            {personal.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} colors={personalColors} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
