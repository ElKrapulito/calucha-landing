import { createContext } from 'react'
import type { Dict } from './dictionaries/es'

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]

export interface I18nValue {
  locale: Locale
  t: Dict
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nValue | null>(null)
