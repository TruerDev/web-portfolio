import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export function SectionHeading({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-center gap-4"
    >
      <h2 className="text-2xl font-semibold text-zinc-100 sm:text-3xl dark:text-zinc-100 light:text-zinc-900">
        {children}
      </h2>
      <div className="h-px flex-1 bg-zinc-800 light:bg-zinc-300" />
    </motion.div>
  )
}
