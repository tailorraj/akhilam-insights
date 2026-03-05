import type { ChartDataPoint } from '../types'

export const outstandingByCustomer: ChartDataPoint[] = [
  { name: 'Reliance Retail', outstanding: 1200000 },
  { name: 'Tata Consultancy', outstanding: 850000 },
  { name: 'Mahindra & Mah.', outstanding: 520000 },
  { name: 'Wipro Ltd', outstanding: 640000 },
  { name: 'Infosys BPO', outstanding: 420000 },
  { name: 'HCL Technologies', outstanding: 310000 },
]

export const remainingPaymentByProject: ChartDataPoint[] = [
  { name: 'SAP S/4 HANA', received: 5000000, remaining: 3500000 },
  { name: 'Fiori Migration', received: 3000000, remaining: 1200000 },
  { name: 'ERP Rollout', received: 5200000, remaining: 800000 },
  { name: 'ABAP Upgrade', received: 3400000, remaining: 2100000 },
  { name: 'BI Analytics', received: 2550000, remaining: 650000 },
]
