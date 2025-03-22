export {}

// Create a type for the roles
export type Roles = 'admin' | 'teacher' | 'pupil'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}