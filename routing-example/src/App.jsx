import './App.css'
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />,
    errorElement : <ErrorPage />
  },
  {
    path : '/about',
    element : <AboutPage />
  },
  {
    path : '/contact',
    element : <ContactPage /> 
  },
  {
    path : '/products',
    element : <ProductsPage /> 
  },
  {
    path : '/products/:id',
    element : <SingleProductPage /> 
  }
]);

function App() {

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
