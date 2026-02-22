import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Github, Send, Mail, Terminal } from 'lucide-react'
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

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05.">{t('contact.label')}</SectionHeading>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Terminal-style form */}
          <ScrollReveal type="fade-up">
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0d0b14]">
              {/* Terminal header */}
              <div className="flex items-center gap-3 border-b border-slate-800 bg-[#13111f] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Terminal size={12} />
                  <span className="font-mono text-xs">contact@klim-sarakeev</span>
                </div>
              </div>

              {/* Form body */}
              <div className="p-6">
                <p className="mb-6 text-slate-400">
                  <span className="font-mono text-purple-400">$</span>{' '}
                  {t('contact.description')}
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block font-mono text-xs text-slate-500"
                      >
                        <span className="text-purple-400">const</span> {t('contact.form.name').toLowerCase()}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-slate-800 bg-[#13111f] px-4 py-2.5 font-mono text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block font-mono text-xs text-slate-500"
                      >
                        <span className="text-purple-400">const</span> {t('contact.form.email').toLowerCase()}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-slate-800 bg-[#13111f] px-4 py-2.5 font-mono text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block font-mono text-xs text-slate-500"
                    >
                      <span className="text-purple-400">const</span> {t('contact.form.message').toLowerCase()}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-slate-800 bg-[#13111f] px-4 py-2.5 font-mono text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-700 focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-purple-600 px-6 py-2.5 font-mono text-sm font-medium text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-50"
                  >
                    <Send size={14} />
                    {status === 'sending'
                      ? t('contact.form.sending')
                      : t('contact.form.send')}
                    {/* Pulse ring on hover */}
                    <span className="absolute inset-0 rounded-lg border border-purple-400/0 transition-all duration-500 group-hover:border-purple-400/30 group-hover:scale-105" />
                  </motion.button>

                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono text-sm text-emerald-400"
                    >
                      {`> ${t('contact.form.success')}`}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono text-sm text-red-400"
                    >
                      {`> ${t('contact.form.error')}`}
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Social links sidebar */}
          <div className="space-y-4">
            {[
              {
                href: 'https://github.com/TruerDev',
                icon: Github,
                label: 'GitHub',
                handle: '@TruerDev',
                accent: 'hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)]',
              },
              {
                href: 'https://t.me/truer_xD',
                icon: Send,
                label: 'Telegram',
                handle: '@truer_xD',
                accent: 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]',
              },
              {
                href: 'mailto:truuuuer@gmail.com',
                icon: Mail,
                label: 'Email',
                handle: 'truuuuer@gmail.com',
                accent: 'hover:border-pink-500/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.08)]',
              },
            ].map((link, i) => (
              <ScrollReveal key={link.label} type="fade-right" delay={i * 0.1}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`flex items-center gap-4 rounded-xl border border-slate-800 bg-[#13111f]/50 p-5 backdrop-blur-sm transition-all duration-300 ${link.accent}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50">
                    <link.icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{link.label}</p>
                    <p className="font-mono text-xs text-slate-500">{link.handle}</p>
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
