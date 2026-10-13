import { Button, Glyph, GlyphBand, Reveal, type GlyphName } from '../components'
import { useI18n } from '../i18n'
import './Manifesto.css'

const valueGlyphs: GlyphName[] = ['kantuta', 'chakana', 'jaguar', 'inti']

export function Manifesto() {
  const { t } = useI18n()
  const m = t.manifesto

  return (
    <section id="nosotros" className="section manifesto surface-dark" aria-labelledby="nosotros-title">
      <div className="container">
        <Reveal>
          <div className="manifesto__board">
            <div className="manifesto__body">
              <p className="manifesto__eyebrow">{m.eyebrow}</p>
              <h2 id="nosotros-title" className="manifesto__title">
                <span className="manifesto__word manifesto__word--a">{m.titleA}</span>{' '}
                <span className="manifesto__word manifesto__word--b">{m.titleB}</span>{' '}
                <span className="manifesto__word manifesto__word--c">{m.titleC}</span>{' '}
                <span className="manifesto__word manifesto__word--d">{m.titleD}</span>
              </h2>
              <p className="manifesto__text">{m.text}</p>
              <ul role="list" className="manifesto__values">
                {m.values.map((label, i) => (
                  <li key={label} className="manifesto__value">
                    <Glyph name={valueGlyphs[i]} className="manifesto__value-glyph" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <GlyphBand />
            <div className="manifesto__footer">
              <p className="manifesto__footer-text">{m.footerText}</p>
              <Button href="#contacto" variant="ghost">
                {m.footerCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
