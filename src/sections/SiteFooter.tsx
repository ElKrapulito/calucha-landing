import { Glyph, type GlyphName } from '../components'
import './SiteFooter.css'

const plants: { name: GlyphName; size: number; tone: 'primary' | 'natural2' }[] = [
  { name: 'motacu', size: 7, tone: 'primary' },
  { name: 'patuju', size: 5, tone: 'natural2' },
  { name: 'quinua', size: 4.5, tone: 'primary' },
  { name: 'cactus', size: 6, tone: 'primary' },
  { name: 'kantuta', size: 4, tone: 'natural2' },
  { name: 'motacu', size: 8, tone: 'primary' },
  { name: 'quinua', size: 5, tone: 'primary' },
  { name: 'patuju', size: 6, tone: 'natural2' },
  { name: 'cactus', size: 4.5, tone: 'primary' },
  { name: 'motacu', size: 6.5, tone: 'primary' },
]

const footerLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__garden" aria-hidden="true">
        {plants.map((plant, i) => (
          <Glyph
            key={i}
            name={plant.name}
            tone={plant.tone}
            className="site-footer__plant"
            style={{ fontSize: `${plant.size}rem` }}
          />
        ))}
      </div>
      <div className="site-footer__ground">
        <div className="container site-footer__inner">
          <nav aria-label="Pie de página">
            <ul role="list" className="site-footer__links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="site-footer__credit">
            <Glyph name="chakana" className="site-footer__mark" /> © {new Date().getFullYear()} Calucha · Creative Data Hub
          </p>
        </div>
      </div>
    </footer>
  )
}
