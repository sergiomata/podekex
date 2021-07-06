import axios from 'axios'

const KANTO_URL = 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151';

export const getKantoPokemon = async() => {
    try{
        const response =  await axios.get(KANTO_URL)
        const data = {data: response.data.results}
        return data.data
    }catch (err){
        console.log(err)
    }
};





