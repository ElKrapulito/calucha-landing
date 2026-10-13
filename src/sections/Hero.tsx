import { Button, Glyph, Poster, PosterBand, StatBoard, Ticket, type GlyphName } from '../components'
import { useI18n } from '../i18n'
import './Hero.css'

const passes: { key: 'creativo' | 'datos' | 'software'; href: string; glyph: GlyphName }[] = [
  { key: 'creativo', href: '#servicio-estrategia', glyph: 'condor' },
  { key: 'datos', href: '#servicio-datos', glyph: 'chakana' },
  { key: 'software', href: '#software', glyph: 'tucan' },
]

export function Hero() {
  const { t } = useI18n()
  const h = t.hero

  return (
    <section id="inicio" className="hero section surface-dark" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <Poster pinned tilt={-1} className="hero__poster">
          <PosterBand tone="highlight" className="hero__band-top">
            <Glyph name="inti" tone="natural2" className="hero__sun" />
            <Glyph name="condor" tone="primary" className="hero__condor" />
            <p className="hero__eyebrow">{h.eyebrow}</p>
            <h1 id="hero-title" className="hero__title">
              <span className="hero__line hero__line--a">{h.titleA}</span>{' '}
              <span className="hero__line hero__line--b">{h.titleB}</span>{' '}
              <span className="hero__line hero__line--c">{h.titleC}</span>
            </h1>
          </PosterBand>

          <PosterBand tone="accent" className="hero__band-mid">
            <p className="hero__lead">{h.lead}</p>
            <div className="hero__flora" aria-hidden="true">
              <Glyph name="kantuta" tone="natural2" />
              <Glyph name="llama" tone="primary" />
              <Glyph name="paraba" tone="natural2" />
              <Glyph name="hoja" tone="primary" />
            </div>
          </PosterBand>

          <PosterBand tone="surface" className="hero__band-cta">
            <div className="hero__actions">
              <Button href="#contacto" size="lg">
                {h.ctaPrimary}
              </Button>
              <Button href="#servicios" variant="secondary" size="lg">
                {h.ctaSecondary}
              </Button>
            </div>
            <p className="hero__place">{h.places}</p>
          </PosterBand>
        </Poster>

        <div className="hero__side">
          <Ticket tone="surface" className="hero__ticket">
            <p className="hero__ticket-title">{h.ticketTitle}</p>
            <p className="hero__ticket-text">{h.ticketText}</p>
            <ul role="list" className="hero__passes">
              {passes.map((pass) => (
                <li key={pass.key}>
                  <a href={pass.href} className="hero__pass">
                    <Glyph name={pass.glyph} className="hero__pass-glyph" />
                    {h.passes[pass.key]}
                  </a>
                </li>
              ))}
            </ul>
          </Ticket>

          <StatBoard label={h.statsLabel} stats={h.stats} />

          <div className="hero__scene" aria-hidden="true">
            <Glyph name="mono" tone="highlight" className="hero__scene-glyph hero__scene-glyph--mono" />
            <Glyph name="jaguar" tone="highlight" className="hero__scene-glyph" />
            <Glyph name="victoria" tone="natural1" className="hero__scene-glyph" />
            <Glyph name="bufeo" tone="natural1" className="hero__scene-glyph" />
          </div>
        </div>
      </div>
    </section>
  )
}
