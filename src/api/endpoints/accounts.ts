import { frappeGet } from '../client'
import type { ChartDataPoint } from '../../types'

export async function getOutstandingByCustomer(): Promise<ChartDataPoint[]> {
  return frappeGet<ChartDataPoint[]>('/api/method/akhilam_insights.api.accounts.get_outstanding_by_customer')
}

export async function getRemainingPaymentByProject(): Promise<ChartDataPoint[]> {
  return frappeGet<ChartDataPoint[]>('/api/method/akhilam_insights.api.accounts.get_remaining_payment_by_project')
}
