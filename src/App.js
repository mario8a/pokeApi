import React, {useEffect, useState} from 'react';
import Pokedex from './lib/pokedex'
import './styles/index.scss';
//compoennts
import { PokemonCards } from './components/PokemonCards';

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    Pokedex.getPokemonsList({limit: 20})
      .then((PokeResponse) => {
        // console.log(PokeResponse.results);
        setPokemons(PokeResponse.results)
      })
  })

  return (
    <>
      <nav>
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
          alt="PokeapiLogo"
          className="logo"
          />
      </nav>
      <main>
        <section className="results">
          {
            pokemons.map((pokemon) => {
              return <PokemonCards key={pokemon.name} name={pokemon.name}/>
            })
          }
        </section>
      </main>
    </>
  );
}

export default App;
