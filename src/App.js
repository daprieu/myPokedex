import { useEffect, useState } from 'react';
import './App.css';



function App() {
const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon"
const IMAGE_API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const [pokemon, setPokemon] = useState([])
const [pokemonColor, setPokemonColor] = useState([])


const loadPokemon = async () => {
  const res = await fetch(POKEMON_API_URL);
  const data = await res.json();
  console.log('data', data.results)
  // const colorRes = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
  // const colorData = await colorRes.json();
  // console.log('colorData', colorData)
  setPokemon(data.results)
}

useEffect(() => {
  loadPokemon()
}, [])


  return (
    <div className="App">
      <header className="App-header">
          <div className='pokedex'>
            <div className='silverCircle'><div className='blueCircle'><div className='blueCircleHighlight'></div></div></div>
            <div className='threeCircles'><div className='circle1'><div className='highlight1'></div></div><div className='circle2'><div className='highlight2'></div></div><div className='circle3'><div className='highlight3'></div></div></div>
            <div className='innerBorder'><div className='screen'>
                {pokemon.map(p => {
                  return <div className='pokemon' key={p.name}><div className='pokemonImg'><img style={{backgroundColor: 'skyblue', borderRadius: 100}} src={IMAGE_API_URL + p.url.split('').slice(34).join('').replace('/','') +'.png' }/></div>{p.name}</div>
                })}
                
             
              </div></div>
          </div>
      </header>
    </div>
  );
}

export default App;
