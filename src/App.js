import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {
  const [clicked,setClicked] = useState(false);
  const [pokemonNames,setPokemonNames] = useState([]);


  const handleClick = () =>{
        setClicked(true)
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=810")
            .then(response => {
              return response.data
            })
            .then(data=>{
              let names = data.results.map(pokemon=>pokemon.name)
              setPokemonNames([...names]);
            })
            .catch(err=>{
              console.log(err);
          });
  }

  return (
    <div className="App">
    {
      clicked
      ?<button className="btn btn-default btn-sml" disabled >Fetch Pokemons</button>
      :<button className="btn btn-default btn-sml" onClick={handleClick}>Fetch Pokemons</button>
    }
    <ul className="list-group">
    {
      pokemonNames.map(pokemon=><li className="list-group-item">{pokemon}</li>)
    }
    </ul>
    </div>
  );
}

export default App;
