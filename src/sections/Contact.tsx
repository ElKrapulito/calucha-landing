import { useState, type FocusEvent, type FormEvent } from 'react'
import { Button, FormField, Glyph, Poster, PosterBand, SectionHeading } from '../components'
import './Contact.css'

type Fields = 'name' | 'email' | 'service' | 'message'
type Errors = Partial<Record<Fields, string>>

const serviceOptions = [
  { value: '', label: 'Elige una opción' },
  { value: 'estrategia', label: 'Estrategia de marca' },
  { value: 'contenido', label: 'Contenido y redes' },
  { value: 'pauta', label: 'Pauta digital' },
  { value: 'datos', label: 'Datos y analítica' },
  { value: 'todo', label: 'Un poco de todo' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (!name) errors.name = 'Escribe tu nombre para saber cómo llamarte.'
  if (!email) errors.email = 'Necesitamos un correo para responderte.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Revisa el correo: debe tener el formato nombre@dominio.com.'
  if (message.length < 10) errors.message = 'Cuéntanos un poco más (al menos 10 caracteres).'
  return errors
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  // Re-validate a field on blur only once it already shows an error, so we don't nag while typing.
  const handleBlur = (e: FocusEvent<HTMLFormElement>) => {
    const field = (e.target as unknown as { name?: string }).name as Fields
    if (!errors[field]) return
    const next = validate(new FormData(e.currentTarget))
    setErrors((prev) => ({ ...prev, [field]: next[field] }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const found = validate(new FormData(form))
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Fields[])[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    setStatus('sending')
    // TODO: connect to the real form endpoint (e.g. Formspree, a serverless function or your CRM)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('sent')
    form.reset()
  }

  return (
    <section id="contacto" className="section contact surface-dark" aria-labelledby="contacto-title">
      <div className="container">
        <SectionHeading
          id="contacto-title"
          eyebrow="Contacto"
          glyph="picaflor"
          title="¿Armamos algo juntos?"
          intro="Cuéntanos de tu marca y te respondemos en menos de 48 horas hábiles."
        />

        <div className="contact__grid">
          <Poster pinned tilt={0.6} className="contact__poster">
            <PosterBand tone="surface">
              <form className="contact__form" noValidate onSubmit={handleSubmit} onBlur={handleBlur}>
                <p className="contact__legend">
                  Los campos con <span aria-hidden="true">*</span> son obligatorios.
                </p>
                <div className="contact__row">
                  <FormField
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    required
                    error={errors.name}
                  />
                  <FormField
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    error={errors.email}
                  />
                </div>
                <FormField as="select" label="¿Qué necesitas?" name="service" options={serviceOptions} />
                <FormField
                  as="textarea"
                  label="Tu mensaje"
                  name="message"
                  hint="¿Qué quieres lograr? ¿Para cuándo?"
                  required
                  error={errors.message}
                />
                <div className="contact__submit">
                  <Button type="submit" size="lg" disabled={status === 'sending'} iconEnd={<Glyph name="picaflor" />}>
                    {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                  </Button>
                  <p className="contact__status" role="status" aria-live="polite">
                    {status === 'sent' && '¡Gracias! Recibimos tu mensaje y te escribiremos muy pronto.'}
                  </p>
                </div>
              </form>
            </PosterBand>
          </Poster>

          <aside className="contact__aside" aria-label="Otras formas de contacto">
            <div className="contact__card">
              <h3 className="contact__card-title">Escríbenos directo</h3>
              {/* TODO: replace with real contact details */}
              <ul role="list" className="contact__list">
                <li>
                  <span className="contact__label">Correo</span>
                  <a href="mailto:hola@calucha.bo">hola@calucha.bo</a>
                </li>
                <li>
                  <span className="contact__label">WhatsApp</span>
                  <a href="https://wa.me/59170000000">+591 700 00000</a>
                </li>
                <li>
                  <span className="contact__label">Estudio</span>
                  La Paz, Bolivia
                </li>
              </ul>
            </div>
            <div className="contact__card contact__card--social">
              <h3 className="contact__card-title">Síguenos</h3>
              <ul role="list" className="contact__social">
                <li><Button href="https://instagram.com" size="sm" variant="ghost">Instagram</Button></li>
                <li><Button href="https://tiktok.com" size="sm" variant="ghost">TikTok</Button></li>
                <li><Button href="https://linkedin.com" size="sm" variant="ghost">LinkedIn</Button></li>
              </ul>
            </div>
            <div className="contact__critters" aria-hidden="true">
              <Glyph name="rana" tone="accent" />
              <Glyph name="cactus" tone="highlight" />
              <Glyph name="choclo" tone="natural1" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
