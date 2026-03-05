import './AccountsPage.css'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { SectionHeader } from '../../components/shared/SectionHeader'
import { ChartCard } from '../../components/shared/ChartCard'
import { useAccounts } from '../../hooks/useAccounts'

function formatLakhs(value: number | undefined) {
  if (value === undefined) return ''
  return `₹${(value / 100000).toFixed(1)}L`
}

export function AccountsPage() {
  const { outstandingByCustomer, remainingPaymentByProject, loading, error } = useAccounts()

  if (error) return <div className="page-error">{error}</div>
  if (loading) return <div className="page-loading">Loading…</div>

  return (
    <div className="accounts-page">
      <SectionHeader title="Accounts" subtitle="Outstanding receivables and project payments" />

      <div className="charts-grid">
        <ChartCard title="Outstanding by Customer">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={outstandingByCustomer} layout="vertical" margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
              <XAxis type="number" tickFormatter={formatLakhs} tick={{ fontSize: 11 }} width={60} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={120} />
              <Tooltip formatter={formatLakhs} />
              <Bar dataKey="outstanding" fill="#f97316" radius={[0, 4, 4, 0]} name="Outstanding" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Remaining Payment of Active Projects">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={remainingPaymentByProject} margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tickFormatter={formatLakhs} tick={{ fontSize: 11 }} width={60} />
              <Tooltip formatter={formatLakhs} />
              <Legend />
              <Bar dataKey="received" stackId="a" fill="#22c55e" name="Received" />
              <Bar dataKey="remaining" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} name="Remaining" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
