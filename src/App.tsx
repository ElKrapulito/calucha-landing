import { GlyphBand } from './components'
import { Contact, Hero, Manifesto, Process, Services, SiteFooter, SiteHeader, Work } from './sections'
import './App.css'

function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="page">
        <Hero />
        <GlyphBand repeat={3} />
        <Services />
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
