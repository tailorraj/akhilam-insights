import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { loginApi } from '../api/endpoints/auth'
import { setLoggedIn, isLoggedIn, clearLoggedIn } from '../api/config'

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>  // throws on failure
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => isLoggedIn())

  async function login(username: string, password: string) {
    // loginApi throws on HTTP error — caller catches and shows error message
    await loginApi(username, password)
    setLoggedIn()
    setIsAuthenticated(true)
  }

  function logout() {
    clearLoggedIn()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
