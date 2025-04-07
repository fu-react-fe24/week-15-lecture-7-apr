import Header from '../../components/Header/Header';
import './singlePokemon.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function SinglePokemon({pokemons}) {
    const [active, setActive] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const pokemon = pokemons.find(p => p.id === parseInt(id));
        setActive(pokemon);
    }, [id]);

  return (
    <>  
        <Header />
        <section className="single">
            <h1>{active?.name}'s Page</h1>
            {
                active && <PokemonCard pokemon={active} />
            }
        </section>
    </>
  )
}

export default SinglePokemon
