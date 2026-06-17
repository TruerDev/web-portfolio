import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Github, Send, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/effects/ScrollReveal'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    const params = new URLSearchParams()
    data.forEach((value, key) => params.append(key, value.toString()))
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (res.ok) { setStatus('success'); form.reset(); setTimeout(() => setStatus('idle'), 4000) }
      else { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) }
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) }
  }

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[12px] text-white outline-none transition-all duration-200 placeholder:text-white/15 focus:border-purple-500/40 focus:shadow-[0_0_20px_rgba(139,92,246,0.08)]'

  return (
    <section id="contact" className="relative px-5 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading number="05">{t('contact.label').toUpperCase()}</SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <ScrollReveal>
            <div
              className="overflow-hidden rounded-xl border border-white/10"
              style={{ background: 'var(--color-bg-card)', boxShadow: '0 0 60px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex gap-[6px]">
                  {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                    <div key={c} className="h-[11px] w-[11px] rounded-full" style={{ background: c, boxShadow: `0 0 4px ${c}55` }} />
                  ))}
                </div>
                <span className="ml-2 font-mono text-[10px] text-white/15">contact — bash</span>
              </div>

              <div className="p-6">
                <p className="mb-4 font-mono text-[12px] text-white/30">
                  <span className="text-accent">$</span> {t('contact.description')}
                </p>
                <p className="mb-6 font-mono text-[11px] text-white/30">
                  {t('contact.relocation')}
                </p>

                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-[10px] text-white/20">
                        <span className="text-accent">const</span> {t('contact.form.name').toLowerCase()}
                      </label>
                      <input type="text" name="name" required className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-[10px] text-white/20">
                        <span className="text-accent">const</span> {t('contact.form.email').toLowerCase()}
                      </label>
                      <input type="email" name="email" required className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-[10px] text-white/20">
                      <span className="text-accent">const</span> {t('contact.form.message').toLowerCase()}
                    </label>
                    <textarea name="message" rows={5} required className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[3px] text-white transition-all duration-200 disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))', boxShadow: '0 4px 20px rgba(139,92,246,0.3)' }}
                  >
                    <Send size={12} />
                    {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  </button>
                  {status === 'success' && <p className="font-mono text-[11px] text-emerald-400">{'>'} {t('contact.form.success')}</p>}
                  {status === 'error' && <p className="font-mono text-[11px] text-red-400">{'>'} {t('contact.form.error')}</p>}
                </form>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-3">
            {[
              { href: 'https://github.com/TruerDev', icon: Github, label: 'GitHub', handle: '@TruerDev', color: '#8b5cf6' },
              { href: 'https://t.me/truer_xD', icon: Send, label: 'Telegram', handle: '@truer_xD', color: '#06b6d4' },
              { href: 'mailto:truuuuer@gmail.com', icon: Mail, label: 'Email', handle: 'truuuuer@gmail.com', color: '#ec4899' },
            ].map((link, i) => (
              <ScrollReveal key={link.label} delay={i * 0.1}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="accent-card flex items-center gap-4 rounded-xl border border-white/5 p-4"
                  style={{ background: `linear-gradient(135deg, ${link.color}06, transparent)` }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: `${link.color}15` }}>
                    <link.icon size={15} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold text-white/70">{link.label}</p>
                    <p className="font-mono text-[10px] text-white/20">{link.handle}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
