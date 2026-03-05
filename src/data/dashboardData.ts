import { Package, Banknote, Clock, FolderOpen, Wrench } from 'lucide-react'
import type { Metric } from '../types'

export const dashboardSalesMetrics: Metric[] = [
  {
    label: 'Total Orders',
    value: '126',
    icon: Package,
    iconColor: 'blue',
    change: 12.4,
    changePeriod: 'vs last month',
  },
  {
    label: 'Total Revenue',
    value: '₹1,12,40,000',
    icon: Banknote,
    iconColor: 'green',
    change: 9.8,
    changePeriod: 'vs last month',
  },
]

export const dashboardAccountsMetrics: Metric[] = [
  {
    label: 'Outstanding Amount',
    value: '₹34,20,000',
    icon: Clock,
    iconColor: 'orange',
    change: -5.2,
    changePeriod: 'vs last month',
  },
]

export const dashboardProjectsMetrics: Metric[] = [
  {
    label: 'Active Projects',
    value: '14',
    icon: FolderOpen,
    iconColor: 'purple',
    change: 16.7,
    changePeriod: 'vs last quarter',
  },
  {
    label: 'Active AMC',
    value: '31',
    icon: Wrench,
    iconColor: 'blue',
    change: 6.9,
    changePeriod: 'vs last quarter',
  },
]
