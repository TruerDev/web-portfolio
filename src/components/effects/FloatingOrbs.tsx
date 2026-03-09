export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top radial glow */}
      <div
        className="absolute inset-x-0 top-0 bottom-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
