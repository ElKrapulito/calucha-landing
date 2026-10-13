import { FilmStrip, Glyph, Reveal, SectionHeading, type GlyphName } from '../components'
import { useI18n } from '../i18n'
import './Process.css'

const stepGlyphs: GlyphName[] = ['kantuta', 'chakana', 'paraba', 'cacao']

export function Process() {
  const { t } = useI18n()
  const s = t.process

  return (
    <section id="proceso" className="section process surface-dark" aria-labelledby="proceso-title">
      <div className="container">
        <SectionHeading
          id="proceso-title"
          eyebrow={s.eyebrow}
          glyph="quinua"
          title={s.title}
          intro={s.intro}
          align="center"
        />

        <Reveal>
          <FilmStrip holes={14}>
            <ol role="list" className="process__steps">
              {s.steps.map((step, i) => (
                <li key={step.title} className="process__step">
                  <span className="process__index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Glyph name={stepGlyphs[i]} className="process__glyph" />
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
