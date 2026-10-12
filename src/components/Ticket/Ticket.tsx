import type { ReactNode } from 'react'
import './Ticket.css'

interface TicketProps {
  /** Left-hand stub content (number, glyph…). */
  stub?: ReactNode
  children: ReactNode
  tone?: 'surface' | 'highlight' | 'natural1' | 'accent'
  className?: string
  as?: 'div' | 'article' | 'li'
}

/**
 * Admission-ticket card with scalloped side notches and a perforated stub,
 * inspired by the festival "tickets on sale" panel.
 */
export function Ticket({ stub, children, tone = 'surface', className, as: Tag = 'div' }: TicketProps) {
  return (
    <Tag className={['ticket', `ticket--${tone}`, className].filter(Boolean).join(' ')}>
      <div className="ticket__paper">
        {stub && <div className="ticket__stub">{stub}</div>}
        <div className="ticket__body">{children}</div>
      </div>
    </Tag>
  )
}
