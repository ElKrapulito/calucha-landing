import type { ReactNode } from 'react'
import './FilmStrip.css'

interface FilmStripProps {
  children: ReactNode
  /** Number of sprocket holes per edge. */
  holes?: number
  className?: string
}

function Sprockets({ count }: { count: number }) {
  return (
    <div className="film__sprockets" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="film__hole" />
      ))}
    </div>
  )
}

/** Red film-reel frame with sprocket holes — used to frame sequential content. */
export function FilmStrip({ children, holes = 12, className }: FilmStripProps) {
  return (
    <div className={['film', className].filter(Boolean).join(' ')}>
      <Sprockets count={holes} />
      <div className="film__frame">{children}</div>
      <Sprockets count={holes} />
    </div>
  )
}
