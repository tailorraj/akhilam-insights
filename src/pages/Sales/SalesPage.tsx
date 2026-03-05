import './SalesPage.css'
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { SectionHeader } from '../../components/shared/SectionHeader'
import { ChartCard } from '../../components/shared/ChartCard'
import { useSales } from '../../hooks/useSales'


function formatLakhs(value: number | undefined) {
  if (value === undefined) return ''
  return `₹${(value / 100000).toFixed(1)}L`
}

export function SalesPage() {
  const { monthlyRevenue, revenueByCustomer, loading, error } = useSales()

  if (error) return <div className="page-error">{error}</div>
  if (loading) return <div className="page-loading">Loading…</div>

  return (
    <div className="sales-page">
      <SectionHeader title="Sales" subtitle="Revenue trends and customer breakdown" />

      <div className="charts-grid">
        <ChartCard title="Monthly Revenue Trend">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyRevenue} margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={formatLakhs} tick={{ fontSize: 12 }} width={60} />
              <Tooltip formatter={formatLakhs} />
              <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2.5} dot={{ r: 3 }} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Revenue by Customer">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={revenueByCustomer}
              layout="vertical"
              margin={{ top: 4, right: 60, left: 8, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
              <XAxis type="number" tickFormatter={formatLakhs} tick={{ fontSize: 11 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={160} />
              <Tooltip formatter={formatLakhs} />
              <Bar dataKey="value" fill="#4f46e5" radius={[0, 4, 4, 0]} name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
