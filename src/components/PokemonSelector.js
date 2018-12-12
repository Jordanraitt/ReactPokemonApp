import React from 'react';

const PokemonSelector = (props) => {
  const options = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index}>
      {pokemon.name}
      {pokemon.index}
    </option>
  })
  function handleChange(event) {
    // console.log("this url:", event.target.key);
    props.onPokemonSelected(event.target.value);
  }

  return(
    <select id="pokemon" defaultValue='default' onChange={handleChange}>
    <option disabled value='default'>Choose a pokemon</option>
      {options}
    </select>
  )
}

export default PokemonSelector;
