import { frappeGet } from '../client'
import type { ChartDataPoint } from '../../types'

export interface ProjectsData {
  timeSpentByProject: ChartDataPoint[]
  timeLoggedByEmployee: ChartDataPoint[]
  timeLoggedByProjectEmployee: ChartDataPoint[]
}

interface ProjectsRaw {
  time_spent_by_project: ChartDataPoint[]
  time_logged_by_employee: ChartDataPoint[]
  time_logged_by_project_employee: ChartDataPoint[]
}

export async function getProjectsData(period: 'month' | 'week'): Promise<ProjectsData> {
  const raw = await frappeGet<ProjectsRaw>(
    `/api/method/akhilam_insights.api.projects.get_time_data?period=${period}`
  )
  return {
    timeSpentByProject:          raw.time_spent_by_project,
    timeLoggedByEmployee:        raw.time_logged_by_employee,
    timeLoggedByProjectEmployee: raw.time_logged_by_project_employee,
  }
}
