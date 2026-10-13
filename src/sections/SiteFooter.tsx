import { Glyph, type GlyphName } from '../components'
import { useI18n } from '../i18n'
import './SiteFooter.css'

// Andean and Amazonian plants side by side along the "ground" of the footer.
const plants: { name: GlyphName; size: number; tone: 'primary' | 'natural2' }[] = [
  { name: 'motacu', size: 7, tone: 'primary' },
  { name: 'patuju', size: 5, tone: 'natural2' },
  { name: 'hoja', size: 5.5, tone: 'primary' },
  { name: 'quinua', size: 4.5, tone: 'primary' },
  { name: 'cactus', size: 6, tone: 'primary' },
  { name: 'kantuta', size: 4, tone: 'natural2' },
  { name: 'motacu', size: 8, tone: 'primary' },
  { name: 'victoria', size: 4.5, tone: 'natural2' },
  { name: 'cacao', size: 4, tone: 'natural2' },
  { name: 'hoja', size: 6.5, tone: 'primary' },
  { name: 'quinua', size: 5, tone: 'primary' },
  { name: 'patuju', size: 6, tone: 'natural2' },
  { name: 'motacu', size: 6.5, tone: 'primary' },
]

const footerKeys = ['servicios', 'software', 'trabajos', 'nosotros', 'contacto'] as const

export function SiteFooter() {
  const { t } = useI18n()

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
          <nav aria-label={t.footer.navLabel}>
            <ul role="list" className="site-footer__links">
              {footerKeys.map((key) => (
                <li key={key}>
                  <a href={`#${key}`}>{t.header.nav[key]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="site-footer__credit">
            <Glyph name="chakana" className="site-footer__mark" /> © {new Date().getFullYear()} {t.footer.credit}
          </p>
        </div>
      </div>
    </footer>
  )
}
