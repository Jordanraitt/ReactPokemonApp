import React from 'react';

const Pokemon = (props) => {
  if (!props.pokemon) return null;

const type = props.pokemon[4].map((element,index) => {
  return <li key={index}>{element.type.name}</li>
});
  // props.getPokemonStats(props.pokemon.name)
  return(
    <div class="border">
    {/* <p>Pokedex entry: {props.pokemon.index}</p> */}
      <h3>{props.pokemon[0]}</h3>

      <p><b>Id:</b> {props.pokemon[7]}</p>

    <div class="border">
      <img src={props.pokemon[3]}/>
      <img src={props.pokemon[6]}/>
    </div>

      <p><b>Height:</b> {props.pokemon[1]}</p>
      <p><b>Weight:</b> {props.pokemon[2]}</p>

      <p><b>Type:</b> {type}</p>






  </div>
  )
}

export default Pokemon;
