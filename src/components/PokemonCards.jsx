import React, {useEffect, useState}  from 'react'
import Pokedex from '../lib/pokedex';

export const PokemonCards = ({name = '', url = ''}) => {

   const [pokemon, setPokemon] = useState({});
   const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png')

   useEffect(() => {

      const peticion = async () => {
         await Pokedex.getPokemonByName(name)
         .then((pokedexResponse) => {
            setPokemon(pokedexResponse)
            // console.log(pokedexResponse)
            setImage(pokedexResponse.sprites.front_default)
         })
      }

      peticion()

   }, [name])

   return (
      <article className="pokemon-card">
         <header>
         <img  
            src={image}
             alt="pokemo"/>
         </header>
         <footer>
           {name}
         </footer>
      </article>
   )
}
