import { useEffect, useRef, useState } from 'react'
import { Button, Glyph, LanguageSwitcher, WavyEdge } from '../components'
import { useI18n } from '../i18n'
import caluchaIcon from '../assets/calucha-icon.svg'
import './SiteHeader.css'

const navKeys = ['servicios', 'software', 'proceso', 'trabajos', 'nosotros', 'contacto'] as const

export function SiteHeader() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__top">
        <div className="container site-header__bar">
          <a href="#inicio" className="brand" aria-label={t.header.homeLabel}>
            <img src={caluchaIcon} alt="" width="56" height="56" className="brand__icon" />
            <span className="brand__text" aria-hidden="true">
              <span className="brand__name">Calucha</span>
              <span className="brand__tag">Creative Data Hub</span>
            </span>
          </a>

          <div className="site-header__glyphs" aria-hidden="true">
            <Glyph name="llama" tone="primary" />
            <Glyph name="inti" tone="natural2" />
            <Glyph name="paraba" tone="primary" />
          </div>

          <div className="site-header__actions">
            <LanguageSwitcher />
            <Button href="#contacto" size="sm" variant="dark" className="site-header__cta">
              {t.header.cta}
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="site-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="menu-toggle__bars" aria-hidden="true" />
              <span className="menu-toggle__label">{open ? t.header.menuClose : t.header.menuOpen}</span>
            </button>
          </div>
        </div>
      </div>
      <WavyEdge color="var(--highlight)" className="site-header__wave" />

      <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label={t.header.navLabel}>
        <ul role="list" className="container site-nav__list">
          {navKeys.map((key) => (
            <li key={key}>
              <a href={`#${key}`} className="site-nav__link" onClick={() => setOpen(false)}>
                {t.header.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
