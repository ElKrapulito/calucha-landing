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

  /* ---------- Amazonía (Beni, Pando, Madidi) ---------- */

  /** Paraba barba azul — blue-throated macaw, endemic to the Beni savannas. */
  paraba: (
    <>
      <rect x="10" y="42" width="44" height="4" rx="2" />
      <path d="m25 37-8 26h6l9-23z" />
      <ellipse cx="31" cy="29" rx="9" ry="13" transform="rotate(18 31 29)" />
      <path fillRule="evenodd" d="M36 6a8 8 0 1 1 0 16 8 8 0 1 1 0-16zm1.5 4.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 1 0 0-4.4z" />
      <path d="M42 9q9-1 9 9-2-3-7-3z" />
    </>
  ),
  jaguar: (
    <>
      <path
        fillRule="evenodd"
        d="M20 22h26a9 9 0 0 1 0 18H20a9 9 0 0 1 0-18zm4 5a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 1 0 0-5.2zm9 4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 1 0 0-5.2zm6-7a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 1 0 0-5.2z"
      />
      <path fillRule="evenodd" d="M52 14a9 9 0 1 1 0 18 9 9 0 1 1 0-18zm2 5a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
      <circle cx="47" cy="14" r="3.2" />
      <circle cx="56" cy="13" r="3.2" />
      <rect x="13" y="34" width="5.5" height="22" rx="2" />
      <rect x="21" y="34" width="5.5" height="22" rx="2" />
      <rect x="38" y="34" width="5.5" height="22" rx="2" />
      <rect x="46" y="34" width="5.5" height="22" rx="2" />
      <path d="M12 28Q3 30 4 44q1 7 7 5" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </>
  ),
  /** Bufeo — Bolivian pink river dolphin. */
  bufeo: (
    <>
      <path
        fillRule="evenodd"
        d="M3 32q7-5 15-4 7-9 19-9 13 0 19 10l5-6v18l-6-5q-6 9-19 9-11 0-17-8-9 1-16-5zm19-3a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"
      />
      <path d="m33 20 4-7 5 8z" />
      <path d="m6 54 6-5 6 5 6-5 6 5 6-5 6 5 6-5 6 5" fill="none" stroke="currentColor" strokeWidth="3.5" />
    </>
  ),
  tucan: (
    <>
      <rect x="6" y="46" width="48" height="4" rx="2" />
      <path d="m19 46-5 16h6l6-14z" />
      <ellipse cx="25" cy="34" rx="10" ry="14" />
      <path fillRule="evenodd" d="M28 10a8 8 0 1 1 0 16 8 8 0 1 1 0-16zm1 4.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 1 0 0-4.4z" />
      <path d="M35 13q19-3 27 9-10 3-27 0z" />
    </>
  ),
  mono: (
    <>
      <path fillRule="evenodd" d="M32 4a9 9 0 1 1 0 18 9 9 0 1 1 0-18zm-3.5 7a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4z" />
      <circle cx="22" cy="13" r="3.5" />
      <circle cx="42" cy="13" r="3.5" />
      <ellipse cx="32" cy="36" rx="10" ry="13" />
      <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
        <path d="M24 28q-9 8-7 19" />
        <path d="M40 28q9 8 7 19" />
        <path d="M41 46q15 2 15-10 0-8-7-8-5 0-5 5 0 4 4 4" />
      </g>
      <ellipse cx="25" cy="54" rx="6" ry="4" />
      <ellipse cx="39" cy="54" rx="6" ry="4" />
    </>
  ),
  perezoso: (
    <>
      <rect x="2" y="6" width="60" height="4" rx="2" />
      <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
        <path d="m18 26-3-15" />
        <path d="m26 22-1-11" />
        <path d="m38 22 1-11" />
        <path d="m46 26 3-15" />
      </g>
      <ellipse cx="32" cy="28" rx="17" ry="9" />
      <path fillRule="evenodd" d="M46 30a8 8 0 1 1 0 16 8 8 0 1 1 0-16zm-4 6a2 1.4 0 1 0 0 2.8 2 1.4 0 1 0 0-2.8zm8 0a2 1.4 0 1 0 0 2.8 2 1.4 0 1 0 0-2.8z" />
    </>
  ),
  /** Lagarto / caimán del Beni. */
  caiman: (
    <>
      <path d="M2 30q14 2 22 0h18l8-3q10-1 12 3 1 4-5 5l-15 1H24q-10 1-22-6z" />
      <path d="m16 31 2-5 2 5zm7-1 2-5 2 5zm7 0 2-5 2 5zm7 0 2-5 2 5z" />
      <circle cx="50" cy="26" r="3" />
      <rect x="20" y="34" width="4.5" height="10" rx="2" />
      <rect x="36" y="34" width="4.5" height="10" rx="2" />
      <path d="m6 54 6-5 6 5 6-5 6 5 6-5 6 5 6-5 6 5" fill="none" stroke="currentColor" strokeWidth="3.5" />
    </>
  ),
  /** Sicurí — anaconda. */
  sicuri: (
    <>
      <path
        d="M6 54q0-14 14-14h16q12 0 12-11t-12-11H24"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <ellipse cx="20" cy="18" rx="8" ry="6" />
      <path d="M12 18H5l-2-3m2 3-2 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  /** Victoria boliviana — giant water lily described from the Llanos de Moxos. */
  victoria: (
    <>
      <path d="M2 42q30 10 60 0v-8h-5v4q-25 8-50 0v-4H2z" />
      <path d="M32 39q-15-3-18-17 9 3 12 8-1-12 6-19 7 7 6 19 3-5 12-8-3 14-18 17z" />
      <g fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M8 54h48" />
        <path d="M16 61h32" />
      </g>
    </>
  ),
  /** Castaña — Brazil-nut pod from Pando. */
  castana: (
    <>
      <rect x="29" y="4" width="6" height="10" rx="2" />
      <circle cx="32" cy="36" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
      {[0, 72, 144, 216, 288].map((angle) => (
        <path key={angle} d="M32 34q-5-9 0-16 5 7 0 16z" transform={`rotate(${angle} 32 36)`} />
      ))}
    </>
  ),
  cacao: (
    <>
      <rect x="30" y="2" width="4" height="8" rx="2" />
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M32 9q17 10 17 26T32 62Q15 52 15 35T32 9z" strokeWidth="4.5" />
        <path d="M32 14v43" strokeWidth="3" />
        <path d="M24 20q-3 15 0 32M40 20q3 15 0 32" strokeWidth="3" />
      </g>
    </>
  ),
  mariposa: (
    <>
      <path d="M31 30Q14 2 4 14q-2 14 27 18z" />
      <path d="M33 30q17-28 27-16 2 14-27 18z" />
      <path d="M31 34q-21 2-17 18 10 4 17-16z" />
      <path d="M33 34q21 2 17 18-10 4-17-16z" />
      <rect x="30.5" y="20" width="3" height="30" rx="1.5" />
      <path d="M31 21q-4-8-8-10m10 10q4-8 8-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  /** Large rainforest leaf with cut-out veins. */
  hoja: (
    <path
      fillRule="evenodd"
      d="M32 2q28 18 2 60h-4Q4 20 32 2zm-1 10v44h2V12zm2 12 9-6 1 1.6-10 6.4zm0 12 11-7 1 1.6-12 7.4zm-2-12-9-6-1 1.6 10 6.4zm0 12-11-7-1 1.6 12 7.4z"
    />
  ),
} satisfies Record<string, ReactNode>

export type GlyphName = keyof typeof glyphs
