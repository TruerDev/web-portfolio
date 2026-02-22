import { useTranslation } from 'react-i18next'
import { Github, Send, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-800/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-600">
          {t('footer.designed')} &middot; {t('footer.rights')}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/TruerDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-colors hover:text-purple-400"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://t.me/truer_xD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-colors hover:text-purple-400"
            aria-label="Telegram"
          >
            <Send size={16} />
          </a>
          <a
            href="mailto:truuuuer@gmail.com"
            className="text-slate-600 transition-colors hover:text-purple-400"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
