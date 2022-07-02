import React from 'react'
import { useState, useEffect } from 'react'
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'
import { Routes, Route } from 'react-router-dom'
import Layout from './routes/layout/layout'
import Home from './routes/home/home'
import Pokemon from './routes/pokemons/pokemon'
import About from './routes/about/about'

import './App.css'

//*OUTLET es un componente que cuando existe una ruta nesteada y en su seccion inserte sus componentes***
const App =({}) =>{
    return (
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* con index hereda el path del padre el anterior es decir va a mostrar esa ruta cuando este en '/' */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* traemos informacion de la api con una variable */}
          <Route path='pokemons/:nameId' element={<Pokemon />} />
        </Route>
        <Route path="/home" element={<Home />} />
       
      </Routes>
    )
  
}
export default App

