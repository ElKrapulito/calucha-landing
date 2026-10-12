import { Glyph, Reveal, SectionHeading, Ticket, type GlyphName } from '../components'
import './Services.css'

interface Service {
  id: string
  number: string
  title: string
  glyph: GlyphName
  tone: 'surface' | 'highlight' | 'natural1' | 'accent'
  description: string
  deliverables: string[]
}

const services: Service[] = [
  {
    id: 'servicio-estrategia',
    number: '01',
    title: 'Estrategia de marca',
    glyph: 'condor',
    tone: 'highlight',
    description: 'Encontramos la voz de tu marca y la convertimos en un plan con objetivos que se pueden medir.',
    deliverables: ['Investigación de audiencia', 'Posicionamiento y tono', 'Plan de comunicación'],
  },
  {
    id: 'servicio-contenido',
    number: '02',
    title: 'Contenido y redes',
    glyph: 'llama',
    tone: 'surface',
    description: 'Reels, carruseles, fotografía y copy con identidad local que la gente quiere compartir.',
    deliverables: ['Calendario editorial', 'Producción foto y video', 'Community management'],
  },
  {
    id: 'servicio-pauta',
    number: '03',
    title: 'Pauta digital',
    glyph: 'picaflor',
    tone: 'natural1',
    description: 'Campañas en Meta, Google y TikTok que optimizamos semana a semana para cuidar cada boliviano invertido.',
    deliverables: ['Segmentación y pruebas A/B', 'Optimización continua', 'Reportes de retorno'],
  },
  {
    id: 'servicio-datos',
    number: '04',
    title: 'Datos y analítica',
    glyph: 'chakana',
    tone: 'accent',
    description: 'Dashboards, social listening y reportes que traducen los números en decisiones claras.',
    deliverables: ['Tableros a medida', 'Escucha social', 'Insights mensuales'],
  },
]

export function Services() {
  return (
    <section id="servicios" className="section services surface-dark" aria-labelledby="servicios-title">
      <div className="container">
        <SectionHeading
          id="servicios-title"
          eyebrow="Lo que hacemos"
          glyph="kantuta"
          title="Servicios con raíz y con método"
          intro="Cuatro boletos de entrada para hacer crecer tu marca. Puedes tomar uno o el paquete completo."
        />

        <ul role="list" className="services__grid">
          {services.map((service, i) => (
            <li key={service.id} id={service.id} className="services__item">
              <Reveal delay={i * 80}>
                <Ticket
                  as="article"
                  tone={service.tone}
                  stub={
                    <>
                      <Glyph name={service.glyph} className="services__glyph" />
                      <span className="services__number">
                        <span className="visually-hidden">Servicio </span>N.º {service.number}
                      </span>
                    </>
                  }
                >
                  <h3 className="services__title">{service.title}</h3>
                  <p className="services__text">{service.description}</p>
                  <ul className="services__list">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Ticket>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
