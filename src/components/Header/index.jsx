// Write your code here
import websiteLogo from '../../assets/login-logo.png'
import profileImage from '../../assets/profile.png'

import {Link, NavLink, useNavigate, useLocation} from 'react-router-dom'

import {HiOutlineSearch} from 'react-icons/hi'

import './index.css'

const Header = props => {
  const {searchInput, changeSearchInput, getMoviesWithInitialValue} = props

  const navigate = useNavigate()

  const location = useLocation()

  const isSearchRoute = location.pathname === '/search'

  const onClickSearch = () => {
    navigate('/search')

    if (getMoviesWithInitialValue) {
      getMoviesWithInitialValue()
    }
  }

  return (
    <nav className="header-container">
      <div className="header-content">
        <div className="header-left">
          <Link to="/">
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
          </Link>

          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/popular" className="nav-link">
                Popular
              </Link>
            </li>
          </ul>
        </div>

        <div className="header-right">
          {isSearchRoute && (
            <div className="search-input-container">
              <input
                type="search"
                className="search-input"
                value={searchInput}
                onChange={e => changeSearchInput(e.target.value)}
              />

              <button
                type="button"
                className="search-button"
                data-testid="searchButton"
                onClick={onClickSearch}
              >
                <HiOutlineSearch />
              </button>
            </div>
          )}

          {!isSearchRoute && (
            <button
              type="button"
              className="search-icon-button"
              data-testid="searchButton"
              onClick={() => navigate('/search')}
            >
              <HiOutlineSearch />
            </button>
          )}

          <Link to="/account">
            <img
              src={profileImage}
              alt="profile"
              className="profile-image"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
