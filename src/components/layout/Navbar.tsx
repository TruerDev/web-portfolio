import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { languages } from '@/i18n'

const navKeys = ['about', 'experience', 'projects', 'skills', 'contact'] as const

export function Navbar() {
  const { t, i18n } = useTranslation()
  const active = useScrollSpy()
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-slate-800/30 bg-[#0a0a12]/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-lg font-semibold transition-colors hover:text-purple-300"
        >
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            KS
          </span>
          <span className="text-slate-600">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                active === key
                  ? 'text-purple-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="mr-1 font-mono text-[10px] text-purple-500/60">
                0{i + 1}.
              </span>
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center overflow-hidden rounded-lg border border-slate-800">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                aria-label={`Switch language to ${lang.label}`}
                aria-current={i18n.language === lang.code ? 'true' : undefined}
                className={`px-2.5 py-1.5 font-mono text-[11px] transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-purple-600/20 text-purple-400'
                    : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-400 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-800/30 bg-[#0a0a12]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    active === key
                      ? 'text-purple-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="mr-2 font-mono text-[10px] text-purple-500/60">
                    0{i + 1}.
                  </span>
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
