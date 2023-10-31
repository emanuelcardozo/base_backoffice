import AuthUser from './AuthUser.js'

class Session {
  constructor(accessToken, user) {
    this.accessToken = accessToken
    this.user = user
  }

  get asJson() {
    return {
      accessToken: this.accessToken,
      user: this.user.asJson,
    }
  }

  updateUser(user) {
    this.user = user
  }

  static fromBrowser({ accessToken, user }) {
    return new Session(accessToken, AuthUser.fromBrowser(user))
  }

  static fromAPI({ token, user }) {
    return new Session(token, AuthUser.fromAPI(user))
  }
}

export default Session
