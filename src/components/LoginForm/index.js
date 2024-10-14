import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isFailed: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    console.log(jwtToken)
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({isFailed: true, errorMsg})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  loginAuth = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isFailed, errorMsg} = this.state
    return (
      <div className="login-page-bg-container">
        <div className="login-page-content-container">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.loginAuth}>
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
              onChange={this.changeUsername}
              placeholder="Username"
              value={username}
            />
            <label htmlFor="password" className="labels">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-fields"
              onChange={this.changePassword}
              placeholder="Password"
              value={password}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {isFailed && <p className="error-msg"> *{errorMsg} </p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
