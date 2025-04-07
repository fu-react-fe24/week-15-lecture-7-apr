import NavItem from '../NavItem/NavItem';
import './navBar.css';

function NavBar({handleRouting}) {
    const navItems = ['Pokedex', 'Team Generator', 'Search Pokemon'];

  return (
    <nav className="nav">
        <ul className="nav__list">
            {
                navItems.map((item, index) => {
                    return <NavItem 
                        key={index}
                        text={item}
                        handleRouting={handleRouting}
                    />
                })
            }
        </ul>
    </nav>
  )
}

export default NavBar;
