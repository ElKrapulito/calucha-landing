import type { ReactNode } from 'react'
import { Glyph, type GlyphName } from '../Glyph'
import './SectionHeading.css'

interface SectionHeadingProps {
  id: string
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  glyph?: GlyphName
  align?: 'start' | 'center'
  /** `dark` = on the green page background; `light` = on cream/mustard. */
  surface?: 'dark' | 'light'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  glyph,
  align = 'start',
  surface = 'dark',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${surface}`}>
      {eyebrow && (
        <p className="section-heading__eyebrow">
          {glyph && <Glyph name={glyph} className="section-heading__glyph" />}
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </header>
  )
}
