import React, { useEffect,useState } from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

const Card = ({results}) => {
  const {name,url} = results
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((pokemonData)=>{
    console.log(pokemonData)
    setPokemon(pokemonData)
  });
  },[])

  return (
    <Link className='card-container' to={`/pokemons/${name}`}>  
    {
    pokemon && (<img height={200} alt={`results${name}`}
    src={pokemon.sprites.other.home.front_default}/>)
    }
      <div >
        <h1 >{name}</h1>
       {pokemon&& <p>{pokemon.id}</p>}
        
      </div>
    </Link>
    
  )
}

 export default Card