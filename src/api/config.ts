// ─────────────────────────────────────────────────────────────────────────────
// API CONFIGURATION
// Edit this file to point to your backend.
// ─────────────────────────────────────────────────────────────────────────────

/** Empty base URL — Vite proxy forwards /api/* to http://192.168.1.14 */
export const API_BASE_URL = ''

/** Headers sent with every request */
export const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
}

/** Session flag — Frappe uses HTTP-only cookies; we track login state here */
const LOGGED_IN_KEY = 'loggedIn'

export function setLoggedIn() {
  sessionStorage.setItem(LOGGED_IN_KEY, 'true')
}

export function isLoggedIn(): boolean {
  return sessionStorage.getItem(LOGGED_IN_KEY) === 'true'
}

export function clearLoggedIn() {
  sessionStorage.removeItem(LOGGED_IN_KEY)
}
