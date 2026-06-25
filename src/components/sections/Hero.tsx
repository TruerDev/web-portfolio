import { useTranslation } from 'react-i18next'
import { Download, Github, Mail } from 'lucide-react'
import { ParticleField } from '@/components/effects/ParticleField'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5"
    >
      <ParticleField />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 50% 35% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div style={{ animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0 }}>
          <h1
            className="font-display leading-[0.9] text-white"
            style={{ fontSize: 'clamp(64px, 16vw, 120px)', letterSpacing: 4 }}
          >
            {t('hero.name').toUpperCase()}
          </h1>
        </div>

        <div
          className="mt-4 font-display text-2xl tracking-[4px] sm:text-3xl"
          style={{
            color: 'var(--color-accent)',
            animation: 'fadeUp 0.6s 0.25s ease both',
            opacity: 0,
          }}
        >
          {t('hero.title').toUpperCase()}
        </div>

        <p
          className="mx-auto mt-8 max-w-lg font-mono text-[13px] leading-relaxed text-white/40"
          style={{ animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0, letterSpacing: 1 }}
        >
          {t('hero.subtitle')}
        </p>

        <div
          className="mt-6 flex flex-wrap justify-center gap-3"
          style={{ animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0 }}
        >
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] text-white/40">
            {t('hero.status_location')}
          </span>
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] px-4 py-1.5 font-mono text-[11px] text-emerald-400/70">
            {t('hero.status_available')}
          </span>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-4"
          style={{ animation: 'fadeUp 0.6s 0.6s ease both', opacity: 0 }}
        >
          <a
            href="/KlimSarakeevCV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[3px] text-white"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))',
              boxShadow: '0 4px 30px rgba(139,92,246,0.35)',
            }}
          >
            <Download size={14} />
            {t('hero.cta_cv')}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>
          <a
            href="https://github.com/TruerDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-4 font-mono text-[11px] uppercase tracking-[3px] text-white/40 transition-all duration-200 hover:border-purple-500/40 hover:text-purple-400"
          >
            <Github size={14} />
            {t('hero.cta_github')}
          </a>
          <a
            href="mailto:truuuuer@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-4 font-mono text-[11px] uppercase tracking-[3px] text-white/40 transition-all duration-200 hover:border-purple-500/40 hover:text-purple-400"
          >
            <Mail size={14} />
            {t('hero.cta_email')}
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'fadeUp 0.6s 1.2s ease both', opacity: 0 }}
      >
        <div className="font-mono text-[9px] uppercase tracking-[4px] text-white/15">
          scroll down
        </div>
      </div>
    </section>
  )
}
