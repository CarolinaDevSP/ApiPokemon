import React from 'react'

const DescriptionPoke = ({datos}) => {
    
  return (
    <div>
        <div>
            <h1>Descripcion</h1>
            <ul>
                <li>Altura: {datos.height}</li>
                <li>Peso: {datos.weight}</li>
                <li>Tipos:
                    <ul>
                        {datos && datos.types.map((tipo)=>{
                            console.log(tipo.type.name)
                            return <li>{tipo.type.name}</li>;
                        })}
                    </ul>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default DescriptionPoke