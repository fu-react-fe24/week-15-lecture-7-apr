import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import './header.css';

function Header() {
  return (
    <header className="header">
        <Logo />
        <NavBar />
    </header>
  )
}
export default Header;
