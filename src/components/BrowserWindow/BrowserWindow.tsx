import type { ReactNode } from 'react'
import './BrowserWindow.css'

interface BrowserWindowProps {
  /** Fake address shown in the URL bar. */
  url: string
  /** Accessible name for the whole mock-up. */
  label: string
  children: ReactNode
  className?: string
}

/** Cartoon browser window used to frame software / product previews. */
export function BrowserWindow({ url, label, children, className }: BrowserWindowProps) {
  return (
    <figure className={['browser', className].filter(Boolean).join(' ')} aria-label={label}>
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <span className="browser__dot browser__dot--a" />
          <span className="browser__dot browser__dot--b" />
          <span className="browser__dot browser__dot--c" />
        </span>
        <span className="browser__url">{url}</span>
      </div>
      <div className="browser__viewport">{children}</div>
    </figure>
  )
}

const KEYWORDS = new Set(['const', 'let', 'await', 'async', 'return', 'function', 'import', 'export'])
const TOKEN = /(?<comment>\/\/.*$)|(?<str>'[^']*')|(?<fn>\b\w+(?=\())|(?<word>\b\w+\b)/g

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const match of line.matchAll(TOKEN)) {
    const { comment, str, fn, word } = match.groups ?? {}
    const start = match.index ?? 0
    if (start > last) out.push(line.slice(last, start))
    const cls = comment ? 'code__comment' : str ? 'code__str' : fn ? 'code__fn' : word && KEYWORDS.has(word) ? 'code__kw' : null
    out.push(cls ? <span key={start} className={cls}>{match[0]}</span> : match[0])
    last = start + match[0].length
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

/** Tiny syntax highlighter for decorative snippets — keywords, strings, calls and comments. */
export function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <pre className="code">
      <code>
        {lines.map((line, i) => (
          <span key={i} className="code__line">
            {highlight(line)}
            {'\n'}
          </span>
        ))}
      </code>
    </pre>
  )
}
