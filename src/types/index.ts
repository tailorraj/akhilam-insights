import type { ElementType } from 'react'

export interface Metric {
  label: string
  value: string
  icon: ElementType
  iconColor: 'blue' | 'green' | 'orange' | 'purple' | 'red'
  change: number
  changePeriod: string
}

export interface ChartDataPoint {
  name: string
  [key: string]: string | number
}
