import logo from '../assets/logo-footer.svg'
import '../styles/components-styles/footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
