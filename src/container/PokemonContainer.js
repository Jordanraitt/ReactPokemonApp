import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector.js';
import Pokemon from '../components/Pokemon.js';


class PokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      currentPokemon: null
    }
  this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({pokemon: data.results})
    });
    request.send();
  }
  handlePokemonSelected(index) {
    // console.log("url:", url );
    // const selectedPokemon = this.state.pokemon[index];
    // this.setState({currentPokemon: selectedPokemon})
    let pokedex = parseInt(index) + 1;
    this.loadOnePokemon('https://pokeapi.co/api/v2/pokemon/' + pokedex + '/');
  }

  loadOnePokemon(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        const info = [data.name, data.height, data.weight, data.sprites.front_default, data.types, data.moves, data.sprites.front_shiny, data.id]
        this.setState({currentPokemon: info});
      }
    }
    request.send();
  }

  render() {
    return (
      <div>
      <h2>Pokemon!</h2>
      <PokemonSelector
        pokemon={this.state.pokemon}
        onPokemonSelected={this.handlePokemonSelected}
      />
      <Pokemon
        pokemon ={this.state.currentPokemon}
      />
    </div>
    )
  }
}
export default PokemonContainer;
