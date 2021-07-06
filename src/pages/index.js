import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader/Loader'
import { getKantoPokemon } from '../api/PokemonAPI'

const Home = () => {

    const [kantoData, setKantoData] = useState(false)
  
    useEffect(() => {

      async function getFirstPokemon() {
        const res = await getKantoPokemon();
        console.log({res})
        setKantoData(res)
      }

      getFirstPokemon()
    }, [])

  return (
    <div>
      {kantoData? <h1>hay data</h1>:
      <Loader></Loader>}
    </div>
  )
}

export default Home