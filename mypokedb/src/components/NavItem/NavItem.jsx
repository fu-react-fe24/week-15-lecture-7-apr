import './navItem.css';
import { Link } from 'react-router-dom';

function NavItem({navItem}) {
  return (
    <li  
      className="nav__item"
    >
      <Link to={navItem.endpoint} className="nav__link">
        {navItem.name}
      </Link>
    </li>
  )
}

export default NavItem;
