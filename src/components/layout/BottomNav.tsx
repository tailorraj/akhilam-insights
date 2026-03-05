import { NavLink } from 'react-router-dom'
import { LayoutDashboard, TrendingUp, BookOpen, FolderKanban } from 'lucide-react'
import type { ElementType } from 'react'
import './BottomNav.css'

const navItems: { to: string; label: string; icon: ElementType }[] = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/sales', label: 'Sales', icon: TrendingUp },
  { to: '/accounts', label: 'Accounts', icon: BookOpen },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `bottom-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={20} strokeWidth={1.75} />
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
