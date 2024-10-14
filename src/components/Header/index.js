import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <img
      className="website-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="nav-items-container">
      <li className="nav-items">Home</li>
      <li className="nav-items">Products</li>
      <li className="nav-items">Cart</li>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
