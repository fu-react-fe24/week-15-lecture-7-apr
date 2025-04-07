import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
        <Link className="nav__link" to="/">Home</Link>
        <Link className="nav__link" to="/about">About</Link>
        <Link className="nav__link" to="/contact">Contact</Link>
        <Link className="nav__link" to="/products">Products</Link>
    </nav>
  )
}

export default Nav
