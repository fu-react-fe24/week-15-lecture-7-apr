import Nav from '../../components/Nav/Nav';
import './singleProductPage.css';
import {useParams} from 'react-router-dom';

function SingleProductPage() {
  const {id} = useParams();

  return (
    <section className="page single-page">
        <Nav />
        <h1>Single Product Page</h1>
        <h2>Du har kommit till {id}'s sida</h2>
    </section>
  )
}

export default SingleProductPage
