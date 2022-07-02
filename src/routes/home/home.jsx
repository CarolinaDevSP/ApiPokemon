import React from 'react'
import { useState, useEffect } from 'react'
import SearchBox from '../../components/SearchBox'
import CardList from '../../components/CardList'

const Home = () => {
  
    const [pokemons, setPokemon] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons)

  useEffect(() => {
    console.log('invoco al useefect');
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=15')
      .then(res => res.json())
      .then((res)=>res.results)
      .then(pokemons => {
        setPokemon(pokemons)
        console.log(pokemons);
      }).catch(err => console.log(err))
    }, [])
      //  const mostrar =() => {
      //    onMostrar(pokemons)
      //  }
  useEffect(() => {
    console.log('filtro de pokemons');
    const newFilteredPokemons = pokemons.filter(pokemon => 
      {return pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    })
    setFilteredPokemons(newFilteredPokemons)
  },[pokemons, searchField])

  const onSearchChangeHandler = (e) => {
    console.log('invocando onchange desde el componente searchbox');
      setSearchField(e.target.value)
  }
  
      return (
    <div className="App" style={{ border: ' 2px solid red'}}>   
    {/* llamado desde searchbox el ONSEARCHCHANGE    */}
      <SearchBox onSearchChange={onSearchChangeHandler}/>
      <CardList pokemons={filteredPokemons}/>
    </div>   
    )
  
}

export default Home