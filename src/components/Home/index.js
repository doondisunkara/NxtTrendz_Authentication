import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-page-container">
    <Header />
    <div className="home-page-content-container">
      <div className="about-container">
        <h1 className="caption">Clothes That Get You Noticed</h1>
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been maker of the era and we
          are in a revolution. Your fashion makes you been seen and heard that
          way you are. So, celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button className="shop-now-btn" type="button">
          Shop Now
        </button>
      </div>
      <img
        className="clothes-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
