import './logo.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <h1 className="header__logo">
      <Link to="/" className="header__link">
        MyPokeDB
      </Link>
    </h1>
  )
}

export default Logo;
