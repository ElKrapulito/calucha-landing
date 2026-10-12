import type { ReactNode } from 'react'

/*
 * Hieroglyph-style Bolivian flora & fauna.
 * Every glyph is drawn on a 64×64 grid with flat, single-colour shapes
 * (`currentColor`) so it can be tinted with any palette token via CSS `color`.
 */

const kantutaBells = [
  { x: 16, len: 16 },
  { x: 32, len: 24 },
  { x: 48, len: 18 },
]

const quinoaGrains = [
  [32, 5],
  [29, 10], [35, 10],
  [26, 15], [32, 15], [38, 15],
  [24, 21], [30, 21], [36, 21], [41, 21],
  [26, 27], [32, 27], [38, 27],
  [29, 32], [35, 32],
]

const cornKernels = [18, 24, 30, 36].flatMap((y) => [27, 32, 37].map((x) => [x, y]))

const sunRays = [0, 45, 90, 135, 180, 225, 270, 315]

export const glyphs = {
  llama: (
    <>
      <rect x="10" y="28" width="34" height="14" rx="7" />
      <rect x="36" y="11" width="9" height="24" rx="3" />
      <rect x="37" y="9" width="19" height="8" rx="4" />
      <path d="M38 11 39 2l4 8zM43 10l2-8 3 8z" />
      <rect x="12" y="38" width="5" height="20" rx="1.5" />
      <rect x="20" y="38" width="5" height="20" rx="1.5" />
      <rect x="32" y="38" width="5" height="20" rx="1.5" />
      <rect x="39" y="38" width="5" height="20" rx="1.5" />
      <circle cx="10" cy="31" r="4" />
    </>
  ),
  condor: (
    <>
      <ellipse cx="32" cy="36" rx="7" ry="12" />
      <circle cx="32" cy="19" r="5" />
      <path d="M30 21.5h4l-2 5z" />
      <path d="M27 30Q14 22 2 24l4 4-3 3 5 2-3 4h6l-2 4 7-2q6 1 11 1z" />
      <path d="M37 30q13-8 25-6l-4 4 3 3-5 2 3 4h-6l2 4-7-2q-6 1-11 1z" />
      <path d="m28 46 4 13 4-13z" />
    </>
  ),
  picaflor: (
    <>
      <ellipse cx="30" cy="35" rx="13" ry="7" transform="rotate(-25 30 35)" />
      <circle cx="42" cy="25" r="6" />
      <path d="m46 22 16-6-14 10z" />
      <path d="M26 31Q21 11 37 3q-3 15-5 28z" />
      <path d="M21 39 6 51h6l-4 6 15-14z" />
    </>
  ),
  rana: (
    <>
      <ellipse cx="32" cy="36" rx="13" ry="16" />
      <ellipse cx="32" cy="20" rx="10" ry="8" />
      <circle cx="25" cy="13" r="4" />
      <circle cx="39" cy="13" r="4" />
      <path d="M21 42Q6 44 8 58l6-2q-2-8 8-8z" />
      <path d="M43 42q15 2 13 16l-6-2q2-8-8-8z" />
      <path d="M22 26q-10-2-12-10l4-1q2 7 10 7z" />
      <path d="M42 26q10-2 12-10l-4-1q-2 7-10 7z" />
    </>
  ),
  trucha: (
    <path
      fillRule="evenodd"
      d="M5 32q16-18 37-6l14-10q-4 16 0 32L42 38Q21 50 5 32zm12-6a3 3 0 1 0 0 6 3 3 0 1 0 0-6zm9-2 7-10 3 11z"
    />
  ),
  kantuta: (
    <>
      <path d="M8 8q24-6 48 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {kantutaBells.map(({ x, len }) => (
        <path
          key={x}
          d={`M${x - 2.5} 6h5v${len}l7 12-5-2-3 3-2-3-2 3-3-3-5 2 7-12z`}
        />
      ))}
    </>
  ),
  patuju: (
    <>
      <rect x="30" y="4" width="4" height="56" rx="2" />
      <path d="M31 8 10 13l21 10zM31 28 12 33l19 10z" />
      <path d="M33 18l21 5-21 10zM33 38l19 5-19 10z" />
    </>
  ),
  quinua: (
    <>
      <rect x="30" y="30" width="4" height="30" rx="2" />
      {quinoaGrains.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" />
      ))}
      <path d="M32 50Q18 46 11 35q13 2 21 11z" />
      <path d="M32 46q14-4 21-15-13 2-21 11z" />
    </>
  ),
  cactus: (
    <>
      <rect x="26" y="6" width="12" height="52" rx="6" />
      <path d="M26 38H16q-5 0-5-5V22a4 4 0 0 1 8 0v8h7z" />
      <path d="M38 30h10q5 0 5-5V16a4 4 0 0 0-8 0v6h-7z" />
      <rect x="12" y="56" width="40" height="4" rx="2" />
    </>
  ),
  choclo: (
    <>
      <ellipse cx="32" cy="26" rx="10" ry="20" fill="none" stroke="currentColor" strokeWidth="4" />
      {cornKernels.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.2" />
      ))}
      <path d="M23 30Q10 50 32 62 18 44 27 34z" />
      <path d="M41 30q13 20-9 32 14-18 5-28z" />
    </>
  ),
  motacu: (
    <>
      <path d="M30 30h4l2 30h-8z" />
      <path d="M32 30Q16 12 2 20q15-1 30 12z" />
      <path d="M32 30q16-18 30-10-15-1-30 12z" />
      <path d="M32 30Q22 8 8 6q16 6 24 26z" />
      <path d="M32 30q10-22 24-24-16 6-24 26z" />
      <path d="M32 31Q32 10 32 2q3 14 1 29z" />
    </>
  ),
  inti: (
    <>
      <circle cx="32" cy="32" r="12.5" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="32" cy="32" r="4" />
      {sunRays.map((angle) => (
        <path key={angle} d="m32 1 4.5 11h-9z" transform={`rotate(${angle} 32 32)`} />
      ))}
    </>
  ),
  chakana: (
    <path
      fillRule="evenodd"
      d="M24 4h16v8h8v12h12v16H48v12h-8v8H24v-8h-8V40H4V24h12V12h8zm8 22a6 6 0 1 0 0 12 6 6 0 1 0 0-12z"
    />
  ),
  illimani: (
    <path
      fillRule="evenodd"
      d="M2 56 20 22l8 12 10-20 12 20 4-6 8 28zm36-36-5 10 3-2 2 3 2-3 3 2z"
    />
  ),
  agua: (
    <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter">
      <path d="m4 20 7-6 7 6 7-6 7 6 7-6 7 6 7-6 7 6" />
      <path d="m4 34 7-6 7 6 7-6 7 6 7-6 7 6 7-6 7 6" />
      <path d="m4 48 7-6 7 6 7-6 7 6 7-6 7 6 7-6 7 6" />
    </g>
  ),
} satisfies Record<string, ReactNode>

export type GlyphName = keyof typeof glyphs
