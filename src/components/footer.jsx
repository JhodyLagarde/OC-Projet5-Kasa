import logo from '../assets/logo-footer.svg'
import '../styles/components-styles/footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img className="footer__img" src={logo} alt="Logo" />
        <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
