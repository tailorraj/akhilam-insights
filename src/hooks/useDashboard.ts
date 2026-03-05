import { useState, useEffect } from 'react'
import type { Metric } from '../types'
import { getDashboardMetrics } from '../api/endpoints/dashboard'

interface DashboardState {
  salesMetrics: Metric[]
  accountsMetrics: Metric[]
  projectsMetrics: Metric[]
  loading: boolean
  error: string | null
}

export function useDashboard(): DashboardState {
  const [salesMetrics, setSalesMetrics] = useState<Metric[]>([])
  const [accountsMetrics, setAccountsMetrics] = useState<Metric[]>([])
  const [projectsMetrics, setProjectsMetrics] = useState<Metric[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getDashboardMetrics()
      .then(({ salesMetrics, accountsMetrics, projectsMetrics }) => {
        setSalesMetrics(salesMetrics)
        setAccountsMetrics(accountsMetrics)
        setProjectsMetrics(projectsMetrics)
      })
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load dashboard'))
      .finally(() => setLoading(false))
  }, [])

  return { salesMetrics, accountsMetrics, projectsMetrics, loading, error }
}
