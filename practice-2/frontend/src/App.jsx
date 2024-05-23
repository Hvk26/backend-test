import { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    axios.get('/api/pokemon')
  .then((response)=> {
    setPokemon(response.data);
  })
  .catch((error)=> {
    console.log(error);
  })
  })
  


  return (
    <>
      <h1>Hvk frontend</h1>
      {/* array.length is used to take data from an array to print at the frontend */}
      <p>Pokemon: {pokemon.length}</p>
      {
        pokemon.map((pokemon, index)=>(
         <div key={pokemon.id}>
          <h3>name: {pokemon.name}</h3>
          <h3>type: {pokemon.type}</h3>
          <h3>power: {pokemon.power}</h3>
          <h3>agility: {pokemon.agility}</h3>
         </div>
        ))
      }
    </>
  )
}

export default App
