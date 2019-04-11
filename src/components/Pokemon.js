import React from 'react';

const Pokemon = (props) => {
  if (!props.pokemon) return null;

  // props.getPokemonStats(props.pokemon.name)
  return(
    <div class="blorange">
    {/* <p>Pokedex entry: {props.pokemon.index}</p> */}
    <h3>{props.pokemon[0]}</h3>
    <img src={props.pokemon[3]}/>
    <img src={props.pokemon[6]}/>





  </div>
  )
}

export default Pokemon;
