import React from 'react'
// para interactuar con los datos de la url y extraer informacion
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import DescriptionPoke from '../../components/DescriptionPoke'


const Pokemon = () => {
  const {nameId} =useParams()
  const [datos, setDatos] = useState("")
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${nameId}`)
      .then(res => res.json())
      .then((pokeDatos)=>{
        setDatos(pokeDatos)
        console.log(pokeDatos)

    })
    },[])

    return (
    <>
      <div>Pokemon con nombre id : {nameId}</div>
      <DescriptionPoke datos={datos}></DescriptionPoke>
    </>
    )
}

export default Pokemon