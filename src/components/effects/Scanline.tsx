export function Scanline() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Moving scanline */}
      <div
        className="absolute right-0 left-0 h-[2px]"
        style={{
          background: 'linear-gradient(transparent, rgba(255,255,255,0.03), transparent)',
          animation: 'scanline 4s linear infinite',
        }}
      />
      {/* Static CRT lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
        }}
      />
    </div>
  )
}
