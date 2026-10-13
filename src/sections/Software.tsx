import { BrowserWindow, Button, CodeBlock, Glyph, Reveal, SectionHeading, WavyEdge, type GlyphName } from '../components'
import { useI18n } from '../i18n'
import './Software.css'

const capabilityGlyphs: GlyphName[] = ['paraba', 'tucan', 'jaguar', 'sicuri']

export function Software() {
  const { t } = useI18n()
  const s = t.software

  return (
    <section id="software" className="software" aria-labelledby="software-title">
      <WavyEdge color="var(--background)" flip />
      <div className="software__band section">
        <div className="software__canopy" aria-hidden="true">
          <Glyph name="hoja" className="software__leaf software__leaf--1" />
          <Glyph name="hoja" className="software__leaf software__leaf--2" />
          <Glyph name="mariposa" className="software__leaf software__leaf--3" />
          <Glyph name="hoja" className="software__leaf software__leaf--4" />
        </div>

        <div className="container software__grid">
          <div className="software__copy">
            <SectionHeading
              id="software-title"
              eyebrow={s.eyebrow}
              glyph="jaguar"
              title={s.title}
              intro={s.intro}
              surface="light"
            />

            <ul role="list" className="software__caps">
              {s.capabilities.map((cap, i) => (
                <li key={cap.title} className="software__cap">
                  <span className="software__cap-icon" aria-hidden="true">
                    <Glyph name={capabilityGlyphs[i]} />
                  </span>
                  <span>
                    <strong className="software__cap-title">{cap.title}</strong>
                    <span className="software__cap-text">{cap.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="software__visual">
            <BrowserWindow url={s.windowUrl} label={s.windowLabel}>
              <CodeBlock lines={s.code} />
              <ul role="list" className="software__checklist">
                {s.checklist.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="software__check">
                      <circle cx="10" cy="10" r="9" fill="currentColor" />
                      <path d="m5.5 10.5 3 3 6-7" fill="none" stroke="var(--background)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </BrowserWindow>

            <div className="software__stack">
              <p className="software__stack-label">{s.stackLabel}</p>
              <ul role="list" className="software__chips">
                {s.stack.map((tech) => (
                  <li key={tech} className="software__chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="#contacto" variant="dark" size="lg" iconEnd={<Glyph name="paraba" />}>
              {s.cta}
            </Button>
          </Reveal>
        </div>
      </div>
      <WavyEdge color="var(--background)" />
    </section>
  )
}
