import { useState} from 'react';
import App from '../App';
import '../styles/cardList.css';
import Card from './Card';

const CardList = ({pokemons}) => {
    return (
    <div className='card-list'>
     {pokemons.map(results => {
       console.log(results);
       return <Card key={results.name} results={results}/>
        })          
     }
     </div>
    )
}

export default CardList