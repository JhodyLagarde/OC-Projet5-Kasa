import logo from '../assets/logo-header.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../styles/components-styles/header.scss'

export default function Header() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo kasa" />
      </Link>
      <nav className="header__nav">
        <ul>
          <li className="header__nav__li">
            <Link
              className={`header__nav__li__link ${
                splitLocation[1] === '' ? 'header__nav__li__link__active' : ''
              }`}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li className="header__nav__li">
            <Link
              className={`header__nav__li__link ${
                splitLocation[1] === 'a-propos'
                  ? 'header__nav__li__link__active'
                  : ''
              }`}
              to="/a-propos"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
