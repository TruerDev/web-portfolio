import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Project {
  title: string
  description: string
  tags: string[]
  featured: boolean
  github?: string
  live?: string
}

export function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as Project[]

  const featured = items.filter(p => p.featured)
  const other = items.filter(p => !p.featured)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{t('projects.label')}</SectionHeading>

        {/* Featured projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-900 light:border-zinc-200 light:bg-zinc-50 light:hover:border-purple-400/40 light:hover:bg-white"
            >
              <div className="mb-4 flex items-center justify-between">
                <Folder size={24} className="text-purple-400" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 transition-colors hover:text-purple-400"
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
                      className="text-zinc-500 transition-colors hover:text-purple-400"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-zinc-100 transition-colors group-hover:text-purple-400 light:text-zinc-900">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-zinc-500 light:text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {other.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-lg border border-zinc-800/50 p-5 transition-colors hover:border-zinc-700 light:border-zinc-200 light:hover:border-zinc-300"
              >
                <h4 className="mb-2 font-medium text-zinc-200 light:text-zinc-800">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 text-sm text-zinc-500 light:text-zinc-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs text-zinc-600">
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
