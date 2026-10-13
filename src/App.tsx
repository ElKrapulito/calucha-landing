import { GlyphBand, amazonGlyphs, andeanGlyphs } from './components'
import { useI18n } from './i18n'
import { Contact, Hero, Manifesto, Process, Services, SiteFooter, SiteHeader, Software, Work } from './sections'
import './App.css'

function App() {
  const { t } = useI18n()

  return (
    <>
      <a href="#contenido" className="skip-link">
        {t.skipLink}
      </a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="page">
        <Hero />
        <GlyphBand glyphs={andeanGlyphs} repeat={2} />
        <Services />
        <GlyphBand glyphs={amazonGlyphs} repeat={2} />
        <Software />
        <Process />
        <Work />
        <Manifesto />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
