import './MetricCard.css'
import type { Metric } from '../../types'

export function MetricCard({ metric }: { metric: Metric }) {
  const isUp = metric.change >= 0
  const Icon = metric.icon

  return (
    <div className="metric-card">
      <div className={`metric-card-icon ${metric.iconColor}`}>
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <div className="metric-card-content">
        <div className="metric-card-value">{metric.value}</div>
        <div className="metric-card-label">{metric.label}</div>
        <div className="metric-card-footer">
          <span className={`badge ${isUp ? 'up' : 'down'}`}>
            {isUp ? '▲' : '▼'} {Math.abs(metric.change)}%
          </span>
          <span className="metric-card-period">{metric.changePeriod}</span>
        </div>
      </div>
    </div>
  )
}
