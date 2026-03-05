import { frappeGet } from '../client'
import type { ChartDataPoint } from '../../types'

export async function getMonthlyRevenueTrend(): Promise<ChartDataPoint[]> {
  return frappeGet<ChartDataPoint[]>('/api/method/akhilam_insights.api.sales.get_monthly_revenue')
}

export async function getRevenueByCustomer(): Promise<ChartDataPoint[]> {
  return frappeGet<ChartDataPoint[]>('/api/method/akhilam_insights.api.sales.get_revenue_by_customer')
}
