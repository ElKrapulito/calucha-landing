import './StatBoard.css'

export interface Stat {
  value: string
  label: string
}

interface StatBoardProps {
  stats: Stat[]
  /** Accessible name for the group of figures. */
  label: string
}

/** Retro scoreboard (like a festival countdown) for headline numbers. */
export function StatBoard({ stats, label }: StatBoardProps) {
  return (
    <div className="stat-board">
      <dl className="stat-board__screen" aria-label={label}>
        {stats.map((stat) => (
          <div key={stat.label} className="stat-board__item">
            <dt className="stat-board__label">{stat.label}</dt>
            <dd className="stat-board__value">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
