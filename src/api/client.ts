import { API_BASE_URL, DEFAULT_HEADERS } from './config'

async function handleResponse<T>(response: Response, path: string): Promise<T> {
  if (!response.ok) {
    const body = await response.json().catch(() => null) as { message?: string } | null
    throw new Error(body?.message ?? `API ${response.status}: ${response.statusText} — ${path}`)
  }
  return response.json() as Promise<T>
}

/**
 * Generic GET helper used by every endpoint.
 * Usage:  apiGet<MyType>('/some/path')
 */
export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
    credentials: 'include',
  })
  return handleResponse<T>(response, path)
}

/**
 * Generic POST helper — used for login and any write operations.
 * Usage:  apiPost<ResponseType>('/api/method/login', { usr, pwd })
 */
export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    credentials: 'include',
    body: JSON.stringify(body),
  })
  return handleResponse<T>(response, path)
}

/** Frappe wraps all responses in { message: T } — this unwraps it automatically */
export async function frappeGet<T>(path: string): Promise<T> {
  const res = await apiGet<{ message: T }>(path)
  return res.message
}
