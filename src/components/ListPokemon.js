import React, {useState, useEffect} from 'react'
import axios from 'axios';

const ListPokemon = (props) => {
    const [pokemon, setPokemon] = useState(null);
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response=>{setPokemon(response.data.results)})
    }, []);

    const mapRows = (value, index) => {
        return <li key={index} > {value.name}</li>
    };

    return (
        <>
            <ul> {pokemon?.map(mapRows)} </ul>
        </>
    );
};

export default ListPokemon;