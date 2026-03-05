import './ProjectManagementPage.css'
import { useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { SectionHeader } from '../../components/shared/SectionHeader'
import { ChartCard } from '../../components/shared/ChartCard'
import { useProjects } from '../../hooks/useProjects'

const EMPLOYEE_COLORS = ['#4f46e5', '#22c55e', '#f97316', '#a855f7']

type Period = 'month' | 'week'

export function ProjectManagementPage() {
  const [period, setPeriod] = useState<Period>('month')
  const { timeSpentByProject, timeLoggedByEmployee, timeLoggedByProjectEmployee, loading, error } = useProjects(period)

  // Derive employee keys dynamically from the API data — excludes 'name' column
  const employeeKeys = timeLoggedByProjectEmployee.length > 0
    ? Object.keys(timeLoggedByProjectEmployee[0]).filter(k => k !== 'name')
    : []

  if (error) return <div className="page-error">{error}</div>

  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <SectionHeader title="Project Management" subtitle="Time tracking across projects and team" />
        <div className="period-toggle">
          <button className={`period-toggle-btn ${period === 'month' ? 'active' : ''}`} onClick={() => setPeriod('month')}>This Month</button>
          <button className={`period-toggle-btn ${period === 'week' ? 'active' : ''}`} onClick={() => setPeriod('week')}>This Week</button>
        </div>
      </div>

      {loading ? <div className="page-loading">Loading…</div> : (
        <div className="charts-grid">
          <ChartCard title="Time Spent by Project (hrs)">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={timeSpentByProject} margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="hours" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Hours" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Time Logged by Employee (hrs)">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={timeLoggedByEmployee} layout="vertical" margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={110} />
                <Tooltip />
                <Bar dataKey="hours" fill="#a855f7" radius={[0, 4, 4, 0]} name="Hours" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="chart-full-width">
            <ChartCard title="Time Logged by Project vs Employee (hrs)">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={timeLoggedByProjectEmployee} margin={{ top: 4, right: 16, left: 8, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef1ff" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  {employeeKeys.map((key, i) => (
                    <Bar
                      key={key}
                      dataKey={key}
                      fill={EMPLOYEE_COLORS[i % EMPLOYEE_COLORS.length]}
                      radius={[4, 4, 0, 0]}
                      name={key.charAt(0).toUpperCase() + key.slice(1)}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      )}
    </div>
  )
}
