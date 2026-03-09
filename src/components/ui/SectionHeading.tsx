import { ScrollReveal } from '@/components/effects/ScrollReveal'

interface Props {
  children: React.ReactNode
  number?: string
}

export function SectionHeading({ children, number }: Props) {
  return (
    <ScrollReveal className="mb-16">
      <div className="flex items-center gap-4">
        {number && (
          <span
            className="font-mono text-[10px] tracking-[4px] uppercase"
            style={{ color: '#8b5cf6', filter: 'drop-shadow(0 0 6px rgba(139,92,246,0.5))' }}
          >
            {number}
          </span>
        )}
        <h2 className="font-display text-4xl tracking-[3px] text-white sm:text-5xl">
          {children}
        </h2>
        <div className="h-px flex-1 bg-white/5" />
      </div>
    </ScrollReveal>
  )
}
