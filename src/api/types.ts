// ─────────────────────────────────────────────────────────────────────────────
// RAW API RESPONSE TYPES
// These match exactly what your backend returns (snake_case JSON).
// Rename fields here if your API uses different keys.
// ─────────────────────────────────────────────────────────────────────────────

// ── Dashboard ─────────────────────────────────────────────────────────────────
export interface DashboardApiResponse {
  total_orders: number
  total_revenue: number         // in rupees
  outstanding_amount: number    // in rupees
  active_projects: number
  active_amc: number
  changes: {
    total_orders: number        // percentage, negative = decline
    total_revenue: number
    outstanding_amount: number
    active_projects: number
    active_amc: number
  }
  change_period: {
    total_orders: string        // e.g. "vs last month"
    total_revenue: string
    outstanding_amount: string
    active_projects: string
    active_amc: string
  }
}

// ── Sales ─────────────────────────────────────────────────────────────────────
export interface MonthlyRevenuePoint {
  name: string    // e.g. "Apr"
  revenue: number // in rupees
}

export interface RevenueByCustomerPoint {
  name: string    // customer name
  value: number   // in rupees
}

// ── Accounts ──────────────────────────────────────────────────────────────────
export interface OutstandingByCustomerPoint {
  name: string
  outstanding: number // in rupees
}

export interface RemainingPaymentPoint {
  name: string        // project name
  received: number    // in rupees
  remaining: number   // in rupees
}

// ── Projects ──────────────────────────────────────────────────────────────────
export interface TimeSpentPoint {
  name: string  // project name
  hours: number
}

export interface TimeByEmployeePoint {
  name: string  // employee name
  hours: number
}

export interface TimeByProjectEmployeePoint {
  name: string  // project name
  [employee: string]: string | number  // one key per employee, value = hours
}

export interface ProjectsApiResponse {
  time_spent_by_project: TimeSpentPoint[]
  time_logged_by_employee: TimeByEmployeePoint[]
  time_logged_by_project_employee: TimeByProjectEmployeePoint[]
}
