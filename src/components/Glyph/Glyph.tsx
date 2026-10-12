import type { CSSProperties } from 'react'
import { glyphs, type GlyphName } from './glyphs'
import './Glyph.css'

type GlyphTone =
  | 'primary'
  | 'secondary'
  | 'highlight'
  | 'accent'
  | 'background'
  | 'text'
  | 'natural1'
  | 'natural2'

interface GlyphProps {
  name: GlyphName
  /** Palette token used to tint the glyph. Defaults to the inherited text colour. */
  tone?: GlyphTone
  /** CSS size (any length). Defaults to 1em so it scales with font-size. */
  size?: string
  /**
   * Accessible label. Leave empty for purely decorative glyphs —
   * they will be hidden from assistive technology.
   */
  label?: string
  className?: string
  style?: CSSProperties
}

export function Glyph({ name, tone, size, label, className, style }: GlyphProps) {
  const classes = ['glyph', tone && `glyph--${tone}`, className].filter(Boolean).join(' ')
  const a11y = label
    ? ({ role: 'img', 'aria-label': label } as const)
    : ({ 'aria-hidden': true, focusable: false } as const)

  return (
    <svg
      className={classes}
      viewBox="0 0 64 64"
      fill="currentColor"
      style={size ? { ...style, width: size, height: size } : style}
      {...a11y}
    >
      {glyphs[name]}
    </svg>
  )
}
