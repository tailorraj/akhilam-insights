import './ChartCard.css'
import type { ReactNode } from 'react'

interface ChartCardProps {
  title: string
  children: ReactNode
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="chart-card">
      <h3 className="chart-card-title">{title}</h3>
      <div className="chart-card-body">{children}</div>
    </div>
  )
}
