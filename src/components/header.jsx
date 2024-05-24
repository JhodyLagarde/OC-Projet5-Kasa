import logo from '../assets/logo-header.svg'
import { Link } from 'react-router-dom'
import '../styles/components-styles/header.scss'

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
