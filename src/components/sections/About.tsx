import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{t('about.label')}</SectionHeading>

        <div className="grid gap-12 md:grid-cols-[240px_1fr]">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex items-start justify-center"
          >
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 light:border-zinc-300 light:bg-zinc-100">
              {/* Replace with <img src="/avatar.jpg" alt="Klim Sarakeev" className="h-full w-full rounded-2xl object-cover" /> */}
              <span className="font-mono text-4xl text-purple-500">KS</span>
            </div>
          </motion.div>

          {/* Bio text */}
          <div className="space-y-4">
            {(['p1', 'p2', 'p3'] as const).map((key, i) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="leading-relaxed text-zinc-400 light:text-zinc-600"
              >
                {t(`about.${key}`)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
