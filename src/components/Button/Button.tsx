import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Decorative icon rendered before the label (hidden from screen readers). */
  icon?: ReactNode
  /** Decorative icon rendered after the label. */
  iconEnd?: ReactNode
  fullWidth?: boolean
  children: ReactNode
}

type AsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export type ButtonProps = AsLink | AsButton

/**
 * Chunky cartoon button. Renders an `<a>` when `href` is passed,
 * otherwise a native `<button>` (type="button" by default).
 */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconEnd,
    fullWidth = false,
    className,
    children,
    ...rest
  } = props

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
      <span className="btn__label">{children}</span>
      {iconEnd && <span className="btn__icon" aria-hidden="true">{iconEnd}</span>}
    </>
  )

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} type={type} {...buttonRest}>
      {content}
    </button>
  )
}
