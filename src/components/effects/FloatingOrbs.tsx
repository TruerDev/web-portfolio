import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function FloatingOrbs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Purple orb - top right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full opacity-[0.03]"
      >
        <div className="h-full w-full rounded-full bg-purple-500 blur-[100px]" />
      </motion.div>

      {/* Cyan orb - bottom left */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.04]"
      >
        <div className="h-full w-full rounded-full bg-cyan-500 blur-[120px]" />
      </motion.div>

      {/* Pink accent - middle */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full opacity-[0.02]"
      >
        <div className="h-full w-full rounded-full bg-pink-500 blur-[80px]" />
      </motion.div>

      {/* Grid dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsla(270, 50%, 60%, 0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
