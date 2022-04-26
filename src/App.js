import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterList from './components/CharacterList'


const App = () => {

const [characters, setCharacters] = useState (null) 

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://bobsburgers-api.herokuapp.com/characters`)
      console.log(response.data)
      setCharacters(response.data)
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
