import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { languages } from '@/i18n'

interface Props {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const navKeys = ['about', 'experience', 'projects', 'skills', 'contact'] as const

export function Navbar({ theme, onToggleTheme }: Props) {
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
      className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl light:border-zinc-200/50 light:bg-white/80"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-lg font-medium text-purple-400 transition-colors hover:text-purple-300"
        >
          KS<span className="text-zinc-500">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navKeys.map(key => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                active === key
                  ? 'text-purple-400'
                  : 'text-zinc-400 hover:text-zinc-200 light:text-zinc-500 light:hover:text-zinc-800'
              }`}
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-zinc-800 light:border-zinc-300">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`px-2 py-1 font-mono text-xs transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-purple-600/20 text-purple-400'
                    : 'text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-700'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={onToggleTheme}
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-200 light:text-zinc-500 light:hover:text-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-zinc-400 md:hidden"
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
            className="overflow-hidden border-t border-zinc-800/50 md:hidden light:border-zinc-200/50"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navKeys.map(key => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    active === key
                      ? 'text-purple-400'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
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
