import { frappeGet } from '../client'
import { Package, Banknote, Clock, FolderOpen, Wrench } from 'lucide-react'
import type { Metric } from '../../types'

interface DashboardMetricsRaw {
  total_orders: number
  total_orders_change: number
  total_orders_period: string
  total_revenue: number
  total_revenue_change: number
  total_revenue_period: string
  outstanding_amount: number
  outstanding_amount_change: number
  outstanding_amount_period: string
  active_projects: number
  active_projects_change: number
  active_projects_period: string
  active_amc: number
  active_amc_change: number
  active_amc_period: string
}

export interface DashboardMetrics {
  salesMetrics: Metric[]
  accountsMetrics: Metric[]
  projectsMetrics: Metric[]
}

function formatINR(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}

const TEMPLATES = {
  totalOrders:       { label: 'Total Orders',       icon: Package,    iconColor: 'blue'   as const },
  totalRevenue:      { label: 'Total Revenue',      icon: Banknote,   iconColor: 'green'  as const },
  outstandingAmount: { label: 'Outstanding Amount', icon: Clock,      iconColor: 'orange' as const },
  activeProjects:    { label: 'Active Projects',    icon: FolderOpen, iconColor: 'purple' as const },
  activeAmc:         { label: 'Active AMC',         icon: Wrench,     iconColor: 'blue'   as const },
}

/** Single API call — splits result into the three dashboard sections */
export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const raw = await frappeGet<DashboardMetricsRaw>('/api/method/akhilam_insights.api.dashboard.get_metrics')
  return {
    salesMetrics: [
      { ...TEMPLATES.totalOrders,  value: String(raw.total_orders),     change: raw.total_orders_change,  changePeriod: raw.total_orders_period },
      { ...TEMPLATES.totalRevenue, value: formatINR(raw.total_revenue), change: raw.total_revenue_change, changePeriod: raw.total_revenue_period },
    ],
    accountsMetrics: [
      { ...TEMPLATES.outstandingAmount, value: formatINR(raw.outstanding_amount), change: raw.outstanding_amount_change, changePeriod: raw.outstanding_amount_period },
    ],
    projectsMetrics: [
      { ...TEMPLATES.activeProjects, value: String(raw.active_projects), change: raw.active_projects_change, changePeriod: raw.active_projects_period },
      { ...TEMPLATES.activeAmc,      value: String(raw.active_amc),      change: raw.active_amc_change,      changePeriod: raw.active_amc_period },
    ],
  }
}
