import { useTranslation } from 'react-i18next'
import { Download } from 'lucide-react'
import { ParticleField } from '@/components/effects/ParticleField'
import { GlitchText } from '@/components/effects/GlitchText'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5"
    >
      <ParticleField />

      {/* Top radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 50% 35% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Tagline */}
        <div
          className="mb-8 font-mono text-[10px] uppercase tracking-[5px]"
          style={{
            color: '#8b5cf6',
            filter: 'drop-shadow(0 0 8px rgba(139,92,246,0.6))',
            animation: 'fadeUp 0.6s ease both',
          }}
        >
          ◆ {t('hero.greeting')} ◆
        </div>

        {/* Name — massive glitch */}
        <div style={{ animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0 }}>
          <h1
            className="font-display leading-[0.9]"
            style={{ fontSize: 'clamp(64px, 16vw, 120px)', letterSpacing: 4 }}
          >
            <GlitchText
              text={t('hero.name').toUpperCase()}
              className="text-white"
            />
          </h1>
        </div>

        {/* Title */}
        <div
          className="mt-4 font-display text-3xl tracking-[6px] sm:text-4xl"
          style={{
            color: '#8b5cf6',
            filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.6))',
            animation: 'fadeUp 0.6s 0.25s ease both',
            opacity: 0,
          }}
        >
          {t('hero.title').toUpperCase()}
        </div>

        {/* Subtitle */}
        <p
          className="mx-auto mt-8 max-w-lg font-mono text-[13px] leading-relaxed text-white/35"
          style={{ animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0, letterSpacing: 1 }}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-4"
          style={{ animation: 'fadeUp 0.6s 0.55s ease both', opacity: 0 }}
        >
          <a
            href="/cv-klim-sarakeev.pdf"
            download
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[3px] text-white"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
              boxShadow: '0 4px 30px rgba(139,92,246,0.35)',
              animation: 'pulse-accent 3s infinite',
            }}
          >
            <Download size={14} />
            {t('hero.cta_cv')}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-4 font-mono text-[11px] uppercase tracking-[3px] text-white/40 transition-all duration-200 hover:border-purple-500/40 hover:text-purple-400"
          >
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
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
