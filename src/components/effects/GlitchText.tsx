interface Props {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: Props) {
  return (
    <span className={`title-glitch ${className}`} data-text={text}>
      {text}
    </span>
  )
}
