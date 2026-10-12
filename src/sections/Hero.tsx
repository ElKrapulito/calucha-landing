import { Button, Glyph, Poster, PosterBand, StatBoard, Ticket, type Stat } from '../components'
import './Hero.css'

const quickLinks = [
  { href: '#servicio-estrategia', label: 'Estrategia', glyph: 'condor' },
  { href: '#servicio-contenido', label: 'Contenido', glyph: 'llama' },
  { href: '#servicio-datos', label: 'Datos', glyph: 'chakana' },
] as const

// TODO: replace with real agency figures
const stats: Stat[] = [
  { value: '+80', label: 'marcas acompañadas' },
  { value: '12M', label: 'personas alcanzadas' },
  { value: '4.2x', label: 'más interacción' },
]

export function Hero() {
  return (
    <section id="inicio" className="hero section surface-dark" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <Poster pinned tilt={-1} className="hero__poster">
          <PosterBand tone="highlight" className="hero__band-top">
            <Glyph name="inti" tone="natural2" className="hero__sun" />
            <Glyph name="condor" tone="primary" className="hero__condor" />
            <p className="hero__eyebrow">Agencia de marketing y contenido · Hecho en Bolivia</p>
            <h1 id="hero-title" className="hero__title">
              Contenido con sabor, <span className="hero__title-accent">decisiones con datos</span>
            </h1>
          </PosterBand>

          <PosterBand tone="accent" className="hero__band-mid">
            <p className="hero__lead">
              Somos un hub creativo boliviano que mezcla storytelling, diseño y analítica para que tu marca
              conecte de verdad: con raíces locales y alcance sin fronteras.
            </p>
            <div className="hero__flora" aria-hidden="true">
              <Glyph name="kantuta" tone="natural2" />
              <Glyph name="llama" tone="primary" />
              <Glyph name="patuju" tone="natural2" />
            </div>
          </PosterBand>

          <PosterBand tone="surface" className="hero__band-cta">
            <div className="hero__actions">
              <Button href="#contacto" size="lg">
                Agenda una charla
              </Button>
              <Button href="#servicios" variant="secondary" size="lg">
                Ver servicios
              </Button>
            </div>
            <p className="hero__place">La Paz · Cochabamba · Santa Cruz · online</p>
          </PosterBand>
        </Poster>

        <div className="hero__side">
          <Ticket tone="surface" className="hero__ticket">
            <p className="hero__ticket-title">¡Agenda abierta!</p>
            <p className="hero__ticket-text">Elige por dónde empezar tu próxima campaña:</p>
            <ul role="list" className="hero__passes">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hero__pass">
                    <Glyph name={link.glyph} className="hero__pass-glyph" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Ticket>

          <StatBoard label="Calucha en números" stats={stats} />
        </div>
      </div>
    </section>
  )
}
