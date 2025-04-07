import Header from "./components/Header/Header"
import Pokedex from "./pages/Pokedex/Pokedex"
import TeamGenerator from './pages/TeamGenerator/TeamGenerator';
import SearchPokemon from './pages/SearchPokemon/SearchPokemon';
import { useState } from 'react';
import pokemons from './assets/pokemons';
import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [pokemonList, setPokemonList] = useState(pokemons);

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Pokedex pokemons={pokemonList} />
    },
    {
      path : '/generator',
      element : <TeamGenerator pokemons={pokemonList} />
    },
    {
      path : '/search',
      element : <SearchPokemon pokemons={pokemonList} />
    }
  ]);

  return (
    <section className="app">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
