import logo from "../assets/LOGO.svg";

function Header() {
  return (
    <header className="header">
        <img className="logo" src={logo} alt="logo kasa" />
    </header>
  );
}

export default Header