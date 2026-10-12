import { useEffect, useRef, useState } from 'react'
import { Button, Glyph, WavyEdge } from '../components'
import caluchaIcon from '../assets/calucha-icon.svg'
import './SiteHeader.css'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
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
          <a href="#inicio" className="brand" aria-label="Calucha, Creative Data Hub — inicio">
            <img src={caluchaIcon} alt="" width="56" height="56" className="brand__icon" />
            <span className="brand__text" aria-hidden="true">
              <span className="brand__name">Calucha</span>
              <span className="brand__tag">Creative Data Hub</span>
            </span>
          </a>

          <div className="site-header__glyphs" aria-hidden="true">
            <Glyph name="kantuta" tone="natural2" />
            <Glyph name="llama" tone="primary" />
            <Glyph name="inti" tone="natural2" />
          </div>

          <Button href="#contacto" size="sm" variant="dark" className="site-header__cta">
            Hablemos
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
            <span className="menu-toggle__label">{open ? 'Cerrar' : 'Menú'}</span>
          </button>
        </div>
      </div>
      <WavyEdge color="var(--highlight)" className="site-header__wave" />

      <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Principal">
        <ul role="list" className="container site-nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav__link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
