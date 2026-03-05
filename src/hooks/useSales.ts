import { useState, useEffect } from 'react'
import type { ChartDataPoint } from '../types'
import { getMonthlyRevenueTrend, getRevenueByCustomer } from '../api/endpoints/sales'

interface SalesState {
  monthlyRevenue: ChartDataPoint[]
  revenueByCustomer: ChartDataPoint[]
  loading: boolean
  error: string | null
}

export function useSales(): SalesState {
  const [monthlyRevenue, setMonthlyRevenue] = useState<ChartDataPoint[]>([])
  const [revenueByCustomer, setRevenueByCustomer] = useState<ChartDataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([getMonthlyRevenueTrend(), getRevenueByCustomer()])
      .then(([revenue, byCustomer]) => {
        setMonthlyRevenue(revenue)
        setRevenueByCustomer(byCustomer)
      })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load sales data'))
      .finally(() => setLoading(false))
  }, [])

  return { monthlyRevenue, revenueByCustomer, loading, error }
}
