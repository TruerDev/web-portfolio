import { useTranslation } from 'react-i18next'
import { Github, Send, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-zinc-800/50 light:border-zinc-200/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500">
          {t('footer.designed')} &middot; {t('footer.rights')}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/TruerDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-purple-400"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://t.me/truer_xD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-purple-400"
            aria-label="Telegram"
          >
            <Send size={18} />
          </a>
          <a
            href="mailto:truuuuer@gmail.com"
            className="text-zinc-500 transition-colors hover:text-purple-400"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
