import { Glyph, type GlyphName } from '../Glyph'
import './GlyphBand.css'

type Tone = 'highlight' | 'natural1' | 'accent' | 'background' | 'secondary' | 'natural2'

const defaultSequence: GlyphName[] = [
  'llama', 'kantuta', 'condor', 'chakana', 'picaflor', 'quinua',
  'trucha', 'inti', 'patuju', 'rana', 'illimani', 'cactus',
]
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
export function GlyphBand({ glyphs = defaultSequence, repeat = 2, className }: GlyphBandProps) {
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
