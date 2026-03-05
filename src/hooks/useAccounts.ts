import { useState, useEffect } from 'react'
import type { ChartDataPoint } from '../types'
import { getOutstandingByCustomer, getRemainingPaymentByProject } from '../api/endpoints/accounts'

interface AccountsState {
  outstandingByCustomer: ChartDataPoint[]
  remainingPaymentByProject: ChartDataPoint[]
  loading: boolean
  error: string | null
}

export function useAccounts(): AccountsState {
  const [outstandingByCustomer, setOutstandingByCustomer] = useState<ChartDataPoint[]>([])
  const [remainingPaymentByProject, setRemainingPaymentByProject] = useState<ChartDataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([getOutstandingByCustomer(), getRemainingPaymentByProject()])
      .then(([outstanding, remaining]) => {
        setOutstandingByCustomer(outstanding)
        setRemainingPaymentByProject(remaining)
      })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load accounts data'))
      .finally(() => setLoading(false))
  }, [])

  return { outstandingByCustomer, remainingPaymentByProject, loading, error }
}
