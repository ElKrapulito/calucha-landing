import type { CSSProperties } from 'react'
import { Glyph, Reveal, SectionHeading, type GlyphName } from '../components'
import './Work.css'

interface Project {
  client: string
  title: string
  result: string
  glyph: GlyphName
  tone: 'highlight' | 'natural1' | 'secondary' | 'accent'
  tilt: number
}

// TODO: replace with real case studies and photography
const projects: Project[] = [
  {
    client: 'Café de altura · Yungas',
    title: 'Lanzamiento de marca en redes',
    result: '+230 % de seguidores en 3 meses',
    glyph: 'picaflor',
    tone: 'highlight',
    tilt: -2,
  },
  {
    client: 'Textiles andinos · El Alto',
    title: 'Tienda online y campaña de temporada',
    result: '3,1x retorno sobre la inversión publicitaria',
    glyph: 'llama',
    tone: 'natural1',
    tilt: 1.5,
  },
  {
    client: 'Turismo lacustre · Titicaca',
    title: 'Contenido audiovisual y pauta',
    result: '1,8M reproducciones de video',
    glyph: 'trucha',
    tone: 'secondary',
    tilt: -1,
  },
  {
    client: 'Agroexportadora · Oruro',
    title: 'Tablero de datos comerciales',
    result: 'Reportes semanales en 5 minutos, no en 5 horas',
    glyph: 'quinua',
    tone: 'accent',
    tilt: 2,
  },
]

export function Work() {
  return (
    <section id="trabajos" className="section work surface-dark" aria-labelledby="trabajos-title">
      <div className="container">
        <SectionHeading
          id="trabajos-title"
          eyebrow="Trabajos recientes"
          glyph="patuju"
          title="Historias que ya estamos contando"
          intro="Un vistazo a proyectos donde la creatividad y los datos se dieron la mano."
        />

        <ul role="list" className="work__grid">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 70}>
                <article className="snapshot" style={{ '--snap-tilt': `${project.tilt}deg` } as CSSProperties}>
                  <div className={`snapshot__photo snapshot__photo--${project.tone}`} aria-hidden="true">
                    <Glyph name={project.glyph} className="snapshot__glyph" />
                  </div>
                  <div className="snapshot__caption">
                    <p className="snapshot__client">{project.client}</p>
                    <h3 className="snapshot__title">{project.title}</h3>
                    <p className="snapshot__result">{project.result}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
