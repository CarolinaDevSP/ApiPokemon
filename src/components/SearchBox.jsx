import React from 'react'
import '../styles/SearchBox.css'

const SearchBox = ({onSearchChange}) => {
  return (

    <input className='buscar' 
        type='search' 
        placeholder='Buscar' 
        
        onChange={onSearchChange}
        
    />
    

  )
}

export default SearchBox