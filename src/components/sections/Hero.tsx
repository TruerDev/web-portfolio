import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { ParticleField } from '@/components/effects/ParticleField'
import { GlitchText } from '@/components/effects/GlitchText'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Particle canvas background */}
      <ParticleField />

      {/* Crosshair overlay lines */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 h-12 w-12 border-t border-l border-purple-500/20" />
        <div className="absolute top-8 right-8 h-12 w-12 border-t border-r border-purple-500/20" />
        <div className="absolute bottom-8 left-8 h-12 w-12 border-b border-l border-purple-500/20" />
        <div className="absolute bottom-8 right-8 h-12 w-12 border-b border-r border-purple-500/20" />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 z-[1] h-[300px] w-[300px] rounded-full bg-cyan-600/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl pt-16">
        {/* Mono label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-12 bg-purple-500" />
          <span className="font-mono text-sm tracking-wider text-purple-400">
            {t('hero.greeting')}
          </span>
        </motion.div>

        {/* Name with glitch */}
        <div className="mb-3">
          <GlitchText
            text={t('hero.name')}
            as="h1"
            delay={500}
            duration={1800}
            className="text-5xl font-bold tracking-tight text-slate-100 sm:text-7xl lg:text-8xl"
          />
        </div>

        {/* Title with gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 text-3xl font-bold sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="/cv-klim-sarakeev.pdf"
            download
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <Download size={16} />
            {t('hero.cta_cv')}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
          >
            {t('hero.cta_contact')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-purple-500/50" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
