import { Glyph, Reveal, SectionHeading, Ticket, type GlyphName } from '../components'
import { useI18n, type Dict } from '../i18n'
import './Services.css'

type ServiceKey = keyof Dict['services']['items']
type Pillar = keyof Dict['services']['pillars']

interface Service {
  key: ServiceKey
  pillar: Pillar
  glyph: GlyphName
  tone: 'surface' | 'highlight' | 'natural1' | 'accent'
}

const services: Service[] = [
  { key: 'estrategia', pillar: 'creative', glyph: 'condor', tone: 'highlight' },
  { key: 'contenido', pillar: 'creative', glyph: 'llama', tone: 'surface' },
  { key: 'pauta', pillar: 'creative', glyph: 'picaflor', tone: 'natural1' },
  { key: 'datos', pillar: 'data', glyph: 'chakana', tone: 'accent' },
  { key: 'desarrollo', pillar: 'tech', glyph: 'tucan', tone: 'surface' },
  { key: 'automatizacion', pillar: 'tech', glyph: 'sicuri', tone: 'highlight' },
]

export function Services() {
  const { t } = useI18n()
  const s = t.services

  return (
    <section id="servicios" className="section services surface-dark" aria-labelledby="servicios-title">
      <div className="container">
        <SectionHeading id="servicios-title" eyebrow={s.eyebrow} glyph="kantuta" title={s.title} intro={s.intro} />

        <ul role="list" className="services__grid">
          {services.map((service, i) => {
            const item = s.items[service.key]
            return (
              <li key={service.key} id={`servicio-${service.key}`} className="services__item">
                <Reveal delay={(i % 2) * 80}>
                  <Ticket
                    as="article"
                    tone={service.tone}
                    stub={
                      <>
                        <Glyph name={service.glyph} className="services__glyph" />
                        <span className="services__number">
                          <span className="visually-hidden">{s.numberLabel} </span>
                          {s.numberPrefix} {String(i + 1).padStart(2, '0')}
                        </span>
                      </>
                    }
                  >
                    <p className={`services__pillar services__pillar--${service.pillar}`}>
                      <span className="visually-hidden">{s.pillarLabel}: </span>
                      {s.pillars[service.pillar]}
                    </p>
                    <h3 className="services__title">{item.title}</h3>
                    <p className="services__text">{item.description}</p>
                    <ul className="services__list">
                      {item.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </Ticket>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
