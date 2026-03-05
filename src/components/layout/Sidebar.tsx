import { NavLink } from 'react-router-dom'
import { LayoutDashboard, TrendingUp, BookOpen, FolderKanban } from 'lucide-react'
import type { ElementType } from 'react'
import './Sidebar.css'

const navItems: { to: string; label: string; icon: ElementType }[] = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/sales', label: 'Sales', icon: TrendingUp },
  { to: '/accounts', label: 'Accounts', icon: BookOpen },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon className="sidebar-link-icon" size={17} strokeWidth={1.75} />
              <span className="sidebar-link-label">{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
