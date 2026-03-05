import './DashboardPage.css'
import { MetricCard } from '../../components/shared/MetricCard'
import { SectionHeader } from '../../components/shared/SectionHeader'
import { useDashboard } from '../../hooks/useDashboard'

export function DashboardPage() {
  const { salesMetrics, accountsMetrics, projectsMetrics, loading, error } = useDashboard()

  if (error) return <div className="page-error">{error}</div>
  if (loading) return <div className="page-loading">Loading…</div>

  return (
    <div className="dashboard-page">
      <SectionHeader title="Dashboard" subtitle="Key metrics across all departments" />

      <section className="dashboard-section">
        <h3 className="dashboard-section-label">Sales</h3>
        <div className="metrics-grid">
          {salesMetrics.map((m) => <MetricCard key={m.label} metric={m} />)}
        </div>
      </section>

      <section className="dashboard-section">
        <h3 className="dashboard-section-label">Accounts</h3>
        <div className="metrics-grid">
          {accountsMetrics.map((m) => <MetricCard key={m.label} metric={m} />)}
        </div>
      </section>

      <section className="dashboard-section">
        <h3 className="dashboard-section-label">Project Management</h3>
        <div className="metrics-grid">
          {projectsMetrics.map((m) => <MetricCard key={m.label} metric={m} />)}
        </div>
      </section>
    </div>
  )
}
