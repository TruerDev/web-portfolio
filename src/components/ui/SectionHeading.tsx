import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  number?: string
}

export function SectionHeading({ children, number }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-16 flex items-center gap-4"
    >
      {number && (
        <span className="font-mono text-sm text-purple-500">{number}</span>
      )}
      <h2 className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
        {children}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
    </motion.div>
  )
}
