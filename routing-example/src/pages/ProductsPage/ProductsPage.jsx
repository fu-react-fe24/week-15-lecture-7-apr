import Nav from '../../components/Nav/Nav';
import './productsPage.css';
import {Link} from 'react-router-dom';

function ProductsPage() {
  return (
    <section className="page products-page">
        <Nav />
        <h1>ProductsPage</h1>
        <nav>
          <Link to="/products/shirts">Shirts</Link>
          <Link to="/products/jackets">Jackets</Link>
          <Link to="/products/mittens">Mittens</Link>
          <Link to="/products/shoes">Shoes</Link>
        </nav>
    </section>
  )
}

export default ProductsPage
