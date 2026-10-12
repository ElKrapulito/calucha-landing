import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Reveal.css'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms. */
  delay?: number
  className?: string
}

/** Fades + lifts its children in on first scroll into view (skipped with reduced motion). */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={['reveal', visible && 'is-visible', className].filter(Boolean).join(' ')}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
