import { useState, useEffect } from 'react'
import type { ProjectsData } from '../api/endpoints/projects'
import { getProjectsData } from '../api/endpoints/projects'

interface ProjectsState extends ProjectsData {
  loading: boolean
  error: string | null
}

export function useProjects(period: 'month' | 'week'): ProjectsState {
  const [data, setData] = useState<ProjectsData>({
    timeSpentByProject: [],
    timeLoggedByEmployee: [],
    timeLoggedByProjectEmployee: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getProjectsData(period)
      .then(setData)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : 'Failed to load projects data'))
      .finally(() => setLoading(false))
  }, [period])

  return { ...data, loading, error }
}
