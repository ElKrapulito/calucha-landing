import { Glyph, amazonGlyphs, andeanGlyphs, type GlyphName } from '../Glyph'
import './GlyphBand.css'

type Tone = 'highlight' | 'natural1' | 'accent' | 'background' | 'secondary' | 'natural2'

// Alternate highlands and lowlands so the default band spans the whole country.
const defaultSequence: GlyphName[] = [
  ...andeanGlyphs.flatMap((name, i) => [name, amazonGlyphs[i]]),
  ...amazonGlyphs.slice(andeanGlyphs.length),
].filter(Boolean)
const tones: Tone[] = ['highlight', 'natural1', 'accent', 'background', 'secondary', 'natural2']

interface GlyphBandProps {
  glyphs?: GlyphName[]
  /** How many times to repeat the sequence so it fills wide screens. */
  repeat?: number
  className?: string
}

/**
 * Aguayo-inspired woven strip: striped edges with a row of hieroglyphs.
 * Purely decorative, so it is hidden from assistive technology.
 */
export function GlyphBand({ glyphs = defaultSequence, repeat = 1, className }: GlyphBandProps) {
  const items = Array.from({ length: repeat }, () => glyphs).flat()

  return (
    <div className={['glyph-band', className].filter(Boolean).join(' ')} aria-hidden="true">
      <div className="glyph-band__row">
        {items.map((name, i) => (
          <Glyph key={`${name}-${i}`} name={name} tone={tones[i % tones.length]} className="glyph-band__glyph" />
        ))}
      </div>
    </div>
  )
}
