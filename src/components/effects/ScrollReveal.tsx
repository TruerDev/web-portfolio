import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

type RevealType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'clip-up' | 'stagger-children'

interface Props {
  children: ReactNode
  type?: RevealType
  delay?: number
  duration?: number
  className?: string
  staggerDelay?: number
}

const variants: Record<RevealType, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  'clip-up': {
    hidden: { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
    visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' },
  },
  'stagger-children': {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
}

export function ScrollReveal({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  staggerDelay: _staggerDelay,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        ...(type === 'stagger-children' && _staggerDelay
          ? { staggerChildren: _staggerDelay }
          : {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Child item for use inside stagger-children
export function ScrollRevealItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
