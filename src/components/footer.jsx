import logo from '../assets/logo-footer.svg'
import '../styles/components-styles/footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
