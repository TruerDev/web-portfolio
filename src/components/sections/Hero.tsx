import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4 font-mono text-sm text-purple-400 sm:text-base"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-2 text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl light:text-zinc-900"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6 text-2xl font-semibold text-purple-400 sm:text-4xl lg:text-5xl"
        >
          {t('hero.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg light:text-zinc-600"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="/cv-klim-sarakeev.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-700"
          >
            <Download size={16} />
            {t('hero.cta_cv')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-purple-500 hover:text-purple-400 light:border-zinc-300 light:text-zinc-700 light:hover:border-purple-500"
          >
            {t('hero.cta_contact')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
