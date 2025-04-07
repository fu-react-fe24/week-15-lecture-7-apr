import { useState, useEffect } from 'react';
import './pokemonSearchInput.css';

function PokemonSearchInput({pokemons, setActivePokemon}) {
    const [userInput, setUserInput] = useState('');
    const [pokemonResults, setPokemonResults] = useState([]);

    useEffect(() => {
        if(userInput !== ''){
            let filtered = pokemons.filter(pokemon => pokemon.name.includes(userInput));
            setPokemonResults([...filtered]); 
        }  
        console.log(pokemonResults);
        
    }, [userInput]);

    const handlePokemonClick = (pokemon) => {
        setActivePokemon(pokemon);
        setPokemonResults([]);
        setUserInput('');
    }
  
    return (
        <section className="search__section">
            <input
                onChange={(e) => setUserInput(e.target.value)} 
                type="text" 
                className="search__input" 
                placeholder="Enter name of pokemon..."
                value={userInput}
            />  
            <ul 
                className={pokemonResults.length < 1 
                    ? "search__dropdown" 
                    : "search__dropdown search__dropdown--active"}
            >
                {
                    pokemonResults.map(pokemon => {
                        return <li
                            onClick={() => handlePokemonClick(pokemon)}
                            className="search__item"
                            key={pokemon.id}
                        >
                            {pokemon.name}
                        </li>
                    })
                }
            </ul>  
        </section>
    )
}

export default PokemonSearchInput
