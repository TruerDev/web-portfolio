import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]'

interface Props {
  text: string
  className?: string
  delay?: number
  duration?: number
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  glitchOnHover?: boolean
}

export function GlitchText({
  text,
  className = '',
  delay = 0,
  duration = 1500,
  as: Tag = 'span',
  glitchOnHover = true,
}: Props) {
  const [displayText, setDisplayText] = useState(text)
  const [hasAnimated, setHasAnimated] = useState(false)
  const controls = useAnimationControls()
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined)

  const scramble = useCallback(
    (onComplete?: () => void) => {
      let iteration = 0
      const totalIterations = text.length * 3

      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < iteration / 3) return text[i]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )

        iteration++
        if (iteration > totalIterations) {
          clearInterval(intervalRef.current)
          setDisplayText(text)
          onComplete?.()
        }
      }, duration / totalIterations)
    },
    [text, duration]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({ opacity: 1 })
      scramble(() => setHasAnimated(true))
    }, delay)

    return () => {
      clearTimeout(timer)
      clearInterval(intervalRef.current)
    }
  }, [delay, scramble, controls])

  const handleHover = () => {
    if (glitchOnHover && hasAnimated) {
      scramble()
    }
  }

  return (
    <motion.span initial={{ opacity: 0 }} animate={controls}>
      <Tag className={className} onMouseEnter={handleHover}>
        {displayText}
      </Tag>
    </motion.span>
  )
}
