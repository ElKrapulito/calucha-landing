import type { CSSProperties, ElementType, ReactNode } from 'react'
import './Poster.css'

interface PosterProps {
  children: ReactNode
  /** Show the red push-pin at the top. */
  pinned?: boolean
  /** Small static tilt for the hand-placed look (degrees). */
  tilt?: number
  as?: ElementType
  className?: string
  id?: string
  'aria-labelledby'?: string
}

/**
 * Cream paper poster with a thick cartoon outline, offset shadow
 * and an optional push-pin — the main "card" surface of the site.
 */
export function Poster({ children, pinned = false, tilt = 0, as: Tag = 'div', className, ...rest }: PosterProps) {
  return (
    <Tag
      className={['poster', pinned && 'poster--pinned', className].filter(Boolean).join(' ')}
      style={tilt ? { '--poster-tilt': `${tilt}deg` } as CSSProperties : undefined}
      {...rest}
    >
      {pinned && <span className="poster__pin" aria-hidden="true" />}
      <div className="poster__inner">{children}</div>
    </Tag>
  )
}

/** Horizontal colour band inside a poster (like the stripes on a festival flyer). */
export function PosterBand({
  children,
  tone = 'highlight',
  className,
}: {
  children: ReactNode
  tone?: 'highlight' | 'accent' | 'surface' | 'natural1'
  className?: string
}) {
  return <div className={['poster__band', `poster__band--${tone}`, className].filter(Boolean).join(' ')}>{children}</div>
}
