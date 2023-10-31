const ADMIN_ROLE = 'Admin'

class AuthUser {
  constructor(id, email, role, active) {
    this.id = id
    this.email = email
    this.role = role
    this.active = active
  }

  get isAdmin() {
    return this.role === ADMIN_ROLE
  }

  get isFull() {
    return !!this.id
  }

  get asJson() {
    return {
      id: this.id,
      email: this.email,
      role: this.role,
      active: this.active,
    }
  }

  static fromBrowser({ id, email, role, active } = {}) {
    return new AuthUser(id, email, role, active)
  }

  static fromAPI({ id, email, role, active } = {}) {
    return new AuthUser(id, email, role, active)
  }
}

export default AuthUser
