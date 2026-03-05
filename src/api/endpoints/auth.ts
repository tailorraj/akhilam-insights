import { apiPost } from '../client'

// Frappe login endpoint: POST /api/method/login
// Body:  { usr, pwd }
// Response on success: { message: "Logged In" }
// Response on failure: HTTP 401

export interface LoginResponse {
  message: string
}

export async function loginApi(username: string, password: string): Promise<LoginResponse> {
  return apiPost<LoginResponse>('/api/method/login', { usr: username, pwd: password })
}
