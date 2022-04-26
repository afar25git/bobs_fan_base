import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterList from './components/CharacterList'


const App = () => {

const [characters, setCharacters] = useState (null) 

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character`)
      console.log(response.data.results)
      setCharacters(response.data.results)
    }
    getCharacters()

  }, [])



  return (
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  )
}

export default App
