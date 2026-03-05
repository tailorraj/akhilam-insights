import { Outlet, useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'
import { useAuth } from '../../auth/AuthContext'
import './AppShell.css'

export function AppShell() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="navbar-logo">AI</div>
        <span className="navbar-title">Akhilam Insights</span>
        <span className="navbar-subtitle">ERP Analytics</span>
        <button className="navbar-logout" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="app-shell-body">
        <Sidebar />
        <main className="app-shell-main">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
