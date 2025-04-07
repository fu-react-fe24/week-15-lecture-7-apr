import NavItem from '../NavItem/NavItem';
import './navBar.css';

function NavBar() {
    const navItems = [
        {
            name : 'Pokedex',
            endpoint : '/'
        },
        {
            name : 'Team Generator',
            endpoint : '/generator'
        },
        {
            name : 'Search Pokemon',
            endpoint : '/search'
        },
    ];

  return (
    <nav className="nav">
        <ul className="nav__list">
            {
                navItems.map((item, index) => {
                    return <NavItem 
                        key={index}
                        navItem={item}
                    />
                })
            }
        </ul>
    </nav>
  )
}

export default NavBar;
