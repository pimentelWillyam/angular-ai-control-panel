export interface User {
  id: string
  email: string
  login: string
  password: string
  role: Role
  createdAt: Date
  updatedAt: Date
}

type Role = 'Admin' | 'User'
