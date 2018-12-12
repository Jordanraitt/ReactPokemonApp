import React from 'react';

const Pokemon = (props) => {
  if (!props.pokemon) return null;

  // props.getPokemonStats(props.pokemon.name)
  return(
    <>
    {/* <p>Pokedex entry: {props.pokemon.index}</p> */}
    <h3>{props.pokemon.name}</h3>





  </>
  )
}

export default Pokemon;
