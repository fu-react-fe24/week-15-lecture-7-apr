import './App.css'
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage pokemons={pokemons} />,
    errorElement : <ErrorPage />
  },
  {
    path : '/about',
    element : <AboutPage />
  },
  {
    path : '/contact',
    element : <ContactPage /> 
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
