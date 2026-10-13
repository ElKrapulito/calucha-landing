import { useI18n, type Locale } from '../../i18n'
import './LanguageSwitcher.css'

const options: { locale: Locale; short: string; name: string }[] = [
  { locale: 'es', short: 'ES', name: 'Español' },
  { locale: 'en', short: 'EN', name: 'English' },
]

/**
 * Two-state language toggle. Each option is named in its own language
 * (with a matching `lang`) so screen readers pronounce it correctly.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div role="group" aria-label={t.language.groupLabel} className={['lang-switch', className].filter(Boolean).join(' ')}>
      {options.map((option) => (
        <button
          key={option.locale}
          type="button"
          lang={option.locale}
          className="lang-switch__option"
          aria-pressed={locale === option.locale}
          onClick={() => setLocale(option.locale)}
        >
          {option.short}
          <span className="visually-hidden"> {option.name}</span>
        </button>
      ))}
    </div>
  )
}
