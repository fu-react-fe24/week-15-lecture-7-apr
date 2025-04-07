import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import './header.css';

function Header({handleRouting}) {
  return (
    <header className="header">
        <Logo />
        <NavBar handleRouting={handleRouting} />
    </header>
  )
}
export default Header;
