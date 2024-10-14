import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: 'John',
    password: '',
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-page-bg-container">
        <div className="login-page-content-container">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="form-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <label htmlFor="username" className="labels">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input-fields"
              value={username}
            />
            <label htmlFor="password" className="labels">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-fields"
              value={password}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
