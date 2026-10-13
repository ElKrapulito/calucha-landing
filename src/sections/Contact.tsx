import { useState, type FocusEvent, type FormEvent } from 'react'
import { Button, FormField, Glyph, Poster, PosterBand, SectionHeading } from '../components'
import { useI18n, type Dict } from '../i18n'
import './Contact.css'

type Fields = 'name' | 'email' | 'service' | 'message'
type ErrorKey = keyof Dict['contact']['errors']
// Store message keys (not text) so visible errors follow a language switch.
type Errors = Partial<Record<Fields, ErrorKey>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (!name) errors.name = 'nameRequired'
  if (!email) errors.email = 'emailRequired'
  else if (!EMAIL_RE.test(email)) errors.email = 'emailInvalid'
  if (message.length < 10) errors.message = 'messageShort'
  return errors
}

export function Contact() {
  const { t } = useI18n()
  const c = t.contact
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
          eyebrow={c.eyebrow}
          glyph="picaflor"
          title={c.title}
          intro={c.intro}
        />

        <div className="contact__grid">
          <Poster pinned tilt={0.6} className="contact__poster">
            <PosterBand tone="surface">
              <form className="contact__form" noValidate onSubmit={handleSubmit} onBlur={handleBlur}>
                <p className="contact__legend">
                  {c.requiredNote}
                </p>
                <div className="contact__row">
                  <FormField
                    label={c.fields.name}
                    name="name"
                    autoComplete="name"
                    required
                    error={errors.name && c.errors[errors.name]}
                  />
                  <FormField
                    label={c.fields.email}
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    error={errors.email && c.errors[errors.email]}
                  />
                </div>
                <FormField
                  as="select"
                  label={c.fields.service}
                  name="service"
                  options={c.serviceOptions}
                  optionalText={c.optional}
                />
                <FormField
                  as="textarea"
                  label={c.fields.message}
                  name="message"
                  hint={c.fields.messageHint}
                  required
                  error={errors.message && c.errors[errors.message]}
                />
                <div className="contact__submit">
                  <Button type="submit" size="lg" disabled={status === 'sending'} iconEnd={<Glyph name="picaflor" />}>
                    {status === 'sending' ? c.sending : c.submit}
                  </Button>
                  <p className="contact__status" role="status" aria-live="polite">
                    {status === 'sent' && c.sent}
                  </p>
                </div>
              </form>
            </PosterBand>
          </Poster>

          <aside className="contact__aside" aria-label={c.asideLabel}>
            <div className="contact__card">
              <h3 className="contact__card-title">{c.directTitle}</h3>
              {/* TODO: replace with real contact details */}
              <ul role="list" className="contact__list">
                <li>
                  <span className="contact__label">{c.labels.email}</span>
                  <a href="mailto:hola@calucha.bo">hola@calucha.bo</a>
                </li>
                <li>
                  <span className="contact__label">{c.labels.whatsapp}</span>
                  <a href="https://wa.me/59170000000">+591 700 00000</a>
                </li>
                <li>
                  <span className="contact__label">{c.labels.studio}</span>
                  {c.studio}
                </li>
              </ul>
            </div>
            <div className="contact__card contact__card--social">
              <h3 className="contact__card-title">{c.socialTitle}</h3>
              <ul role="list" className="contact__social">
                <li><Button href="https://instagram.com" size="sm" variant="ghost">Instagram</Button></li>
                <li><Button href="https://tiktok.com" size="sm" variant="ghost">TikTok</Button></li>
                <li><Button href="https://linkedin.com" size="sm" variant="ghost">LinkedIn</Button></li>
              </ul>
            </div>
            <div className="contact__critters" aria-hidden="true">
              <Glyph name="mono" tone="accent" />
              <Glyph name="cactus" tone="highlight" />
              <Glyph name="tucan" tone="natural1" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
