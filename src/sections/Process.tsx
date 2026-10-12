import { FilmStrip, Glyph, Reveal, SectionHeading, type GlyphName } from '../components'
import './Process.css'

const steps: { title: string; text: string; glyph: GlyphName }[] = [
  { title: 'Escuchamos', glyph: 'kantuta', text: 'Conocemos tu negocio, tu gente y tu competencia antes de crear una sola pieza.' },
  { title: 'Medimos', glyph: 'chakana', text: 'Definimos indicadores y levantamos datos para saber dónde estás parado.' },
  { title: 'Creamos', glyph: 'llama', text: 'Producimos contenido con identidad propia, pensado para cada plataforma.' },
  { title: 'Crecemos', glyph: 'quinua', text: 'Analizamos resultados, aprendemos y ajustamos para cosechar más cada mes.' },
]

export function Process() {
  return (
    <section id="proceso" className="section process surface-dark" aria-labelledby="proceso-title">
      <div className="container">
        <SectionHeading
          id="proceso-title"
          eyebrow="Cómo trabajamos"
          glyph="quinua"
          title="Del dato a la historia, cuadro por cuadro"
          intro="Un proceso claro en cuatro escenas, para que siempre sepas qué estamos haciendo y por qué."
          align="center"
        />

        <Reveal>
          <FilmStrip holes={14}>
            <ol role="list" className="process__steps">
              {steps.map((step, i) => (
                <li key={step.title} className="process__step">
                  <span className="process__index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Glyph name={step.glyph} className="process__glyph" />
                  <h3 className="process__title">{step.title}</h3>
                  <p className="process__text">{step.text}</p>
                </li>
              ))}
            </ol>
          </FilmStrip>
        </Reveal>
      </div>
    </section>
  )
}
