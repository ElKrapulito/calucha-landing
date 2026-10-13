import type { CSSProperties } from 'react'
import { Glyph, Reveal, SectionHeading, type GlyphName } from '../components'
import { useI18n, type Dict } from '../i18n'
import './Work.css'

type ProjectKey = keyof Dict['work']['projects']

interface Project {
  key: ProjectKey
  glyph: GlyphName
  tone: 'highlight' | 'natural1' | 'secondary' | 'accent'
  tilt: number
}

// TODO: replace the illustrated tiles with real project photography
const projects: Project[] = [
  { key: 'cafe', glyph: 'picaflor', tone: 'highlight', tilt: -2 },
  { key: 'textiles', glyph: 'llama', tone: 'natural1', tilt: 1.5 },
  { key: 'ecoturismo', glyph: 'bufeo', tone: 'secondary', tilt: -1 },
  { key: 'castana', glyph: 'castana', tone: 'accent', tilt: 2 },
]

export function Work() {
  const { t } = useI18n()
  const w = t.work

  return (
    <section id="trabajos" className="section work surface-dark" aria-labelledby="trabajos-title">
      <div className="container">
        <SectionHeading
          id="trabajos-title"
          eyebrow={w.eyebrow}
          glyph="patuju"
          title={w.title}
          intro={w.intro}
        />

        <ul role="list" className="work__grid">
          {projects.map((project, i) => {
            const copy = w.projects[project.key]
            return (
            <li key={project.key}>
              <Reveal delay={i * 70}>
                <article className="snapshot" style={{ '--snap-tilt': `${project.tilt}deg` } as CSSProperties}>
                  <div className={`snapshot__photo snapshot__photo--${project.tone}`} aria-hidden="true">
                    <Glyph name={project.glyph} className="snapshot__glyph" />
                  </div>
                  <div className="snapshot__caption">
                    <p className="snapshot__client">{copy.client}</p>
                    <h3 className="snapshot__title">{copy.title}</h3>
                    <p className="snapshot__result">{copy.result}</p>
                  </div>
                </article>
              </Reveal>
            </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
