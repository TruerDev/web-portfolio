import { useTranslation } from 'react-i18next'
import { Github, Send, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="font-mono text-[10px] text-white/15">
          {t('footer.designed')} &middot; {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com/TruerDev', icon: Github, label: 'GitHub' },
            { href: 'https://t.me/truer_xD', icon: Send, label: 'Telegram' },
            { href: 'mailto:truuuuer@gmail.com', icon: Mail, label: 'Email' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-white/15 transition-colors hover:text-purple-400"
              aria-label={link.label}
            >
              <link.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
