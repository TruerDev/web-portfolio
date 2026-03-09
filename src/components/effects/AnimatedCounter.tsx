import { useEffect, useRef, useState } from 'react'

interface Props {
  end: number
  suffix?: string
  label: string
  color?: string
  delay?: number
}

export function AnimatedCounter({ end, suffix = '', label, color = '#8b5cf6', delay = 0 }: Props) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { rootMargin: '-80px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const timer = setTimeout(() => {
      const start = performance.now()
      const duration = 1800
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(animate)
        else setCount(end)
      }
      requestAnimationFrame(animate)
    }, delay)
    return () => clearTimeout(timer)
  }, [inView, end, delay])

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display text-5xl leading-none sm:text-6xl"
        style={{ color, filter: `drop-shadow(0 0 8px ${color})` }}
      >
        {count}{suffix}
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[3px] text-white/25">
        {label}
      </p>
    </div>
  )
}
