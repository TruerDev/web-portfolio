import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Github, Send, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{t('contact.label')}</SectionHeading>

        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-8 text-zinc-400 light:text-zinc-600">
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
                    className="mb-1.5 block text-sm text-zinc-400 light:text-zinc-600"
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-500 light:border-zinc-300 light:bg-white light:text-zinc-900 light:focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm text-zinc-400 light:text-zinc-600"
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-500 light:border-zinc-300 light:bg-white light:text-zinc-900 light:focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-zinc-400 light:text-zinc-600"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-purple-500 light:border-zinc-300 light:bg-white light:text-zinc-900 light:focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-700 disabled:opacity-50"
              >
                <Send size={14} />
                {status === 'sending'
                  ? t('contact.form.sending')
                  : t('contact.form.send')}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-400">{t('contact.form.success')}</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">{t('contact.form.error')}</p>
              )}
            </form>
          </motion.div>

          {/* Social links sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            <a
              href="https://github.com/TruerDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-colors hover:border-purple-500/30 light:border-zinc-200 light:hover:border-purple-400/40"
            >
              <Github size={20} className="text-purple-400" />
              <div>
                <p className="text-sm font-medium text-zinc-200 light:text-zinc-800">GitHub</p>
                <p className="text-xs text-zinc-500">@TruerDev</p>
              </div>
            </a>

            <a
              href="https://t.me/truer_xD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-colors hover:border-purple-500/30 light:border-zinc-200 light:hover:border-purple-400/40"
            >
              <Send size={20} className="text-purple-400" />
              <div>
                <p className="text-sm font-medium text-zinc-200 light:text-zinc-800">Telegram</p>
                <p className="text-xs text-zinc-500">@truer_xD</p>
              </div>
            </a>

            <a
              href="mailto:truuuuer@gmail.com"
              className="flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-colors hover:border-purple-500/30 light:border-zinc-200 light:hover:border-purple-400/40"
            >
              <Mail size={20} className="text-purple-400" />
              <div>
                <p className="text-sm font-medium text-zinc-200 light:text-zinc-800">Email</p>
                <p className="text-xs text-zinc-500">truuuuer@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
