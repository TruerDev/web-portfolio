import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
}

export function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2, label }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="mb-2 font-mono text-4xl font-bold sm:text-5xl">
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {prefix}{count}{suffix}
        </span>
      </div>
      <p className="text-sm text-slate-400">{label}</p>
    </motion.div>
  )
}
