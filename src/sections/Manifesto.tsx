import { Button, Glyph, GlyphBand, Reveal, type GlyphName } from '../components'
import './Manifesto.css'

const values: { label: string; glyph: GlyphName }[] = [
  { label: 'Creatividad con identidad', glyph: 'kantuta' },
  { label: 'Decisiones basadas en datos', glyph: 'chakana' },
  { label: 'Cuentas claras, siempre', glyph: 'inti' },
]

export function Manifesto() {
  return (
    <section id="nosotros" className="section manifesto surface-dark" aria-labelledby="nosotros-title">
      <div className="container">
        <Reveal>
          <div className="manifesto__board">
            <div className="manifesto__body">
              <p className="manifesto__eyebrow">Nosotros</p>
              <h2 id="nosotros-title" className="manifesto__title">
                <span className="manifesto__word manifesto__word--a">Hecho</span>{' '}
                <span className="manifesto__word manifesto__word--b">en Bolivia,</span>{' '}
                <span className="manifesto__word manifesto__word--c">con datos</span>{' '}
                <span className="manifesto__word manifesto__word--d">y corazón</span>
              </h2>
              <p className="manifesto__text">
                Somos un equipo de creativos, comunicadores y analistas que cree que lo nuestro —los colores
                del aguayo, el ritmo de la morenada, el sabor de la llajua— también es una ventaja
                competitiva. Lo combinamos con datos para que cada idea tenga un porqué.
              </p>
              <ul role="list" className="manifesto__values">
                {values.map((v) => (
                  <li key={v.label} className="manifesto__value">
                    <Glyph name={v.glyph} className="manifesto__value-glyph" />
                    {v.label}
                  </li>
                ))}
              </ul>
            </div>
            <GlyphBand repeat={2} />
            <div className="manifesto__footer">
              <p className="manifesto__footer-text">¿Tu marca tiene una historia que contar?</p>
              <Button href="#contacto" variant="ghost">
                Trabajemos juntos
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
