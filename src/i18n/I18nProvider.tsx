import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { I18nContext, locales, type Locale } from './context'
import { en } from './dictionaries/en'
import { es } from './dictionaries/es'

const dictionaries = { es, en }
const STORAGE_KEY = 'calucha-lang'

const isLocale = (value: unknown): value is Locale => locales.includes(value as Locale)

/**
 * Resolution order: `?lang=` in the URL (shareable links) → the visitor's
 * saved choice → browser language → Spanish.
 */
function detectLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // Storage can be blocked (private mode); fall through to detection.
  }
  const browser = navigator.languages?.[0] ?? navigator.language ?? 'es'
  return browser.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const t = dictionaries[locale]

  // Keep the document in sync so screen readers, search engines and tabs use the right language.
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)

    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Ignore — the choice simply won't persist.
    }

    const url = new URL(window.location.href)
    if (url.searchParams.get('lang') !== locale) {
      url.searchParams.set('lang', locale)
      window.history.replaceState(window.history.state, '', url)
    }
  }, [locale, t])

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
