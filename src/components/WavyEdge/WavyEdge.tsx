import './WavyEdge.css'

interface WavyEdgeProps {
  /** Palette colour of the wave fill. */
  color?: string
  /** Flip vertically to sit on the top edge of a section. */
  flip?: boolean
  className?: string
}

/** Hand-drawn wavy divider with a dark outline, used between bands. */
export function WavyEdge({ color = 'var(--highlight)', flip = false, className }: WavyEdgeProps) {
  return (
    <svg
      className={['wavy-edge', flip && 'wavy-edge--flip', className].filter(Boolean).join(' ')}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 0h1200v14c-60 12-110 16-170 8s-120-18-190-8-140 22-210 12-120-20-200-10-140 18-210 8S80 4 0 18z"
        fill={color}
      />
      <path
        d="M0 18c80-14 140-4 220 6s130 2 210-8 130 0 200 10 140-2 210-12 130-2 190 8 110 4 170-8"
        fill="none"
        stroke="var(--text)"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
