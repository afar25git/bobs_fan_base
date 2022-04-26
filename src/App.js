import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'


const App = () => {
  const [characters, setCharacters] = useState (null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const selectCharacter = (id) => {
    setSelectedCharacter(id)
  }

  const goBack = () => {
    setSelectedCharacter(null)
  }

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character`)
      // console.log(response.data.results)
      setCharacters(response.data.results)
    }
    getCharacters()

  }, [])



  return (
    <div className="App">
      <h1>Rick and Morty Fan Zone</h1>
      <h2>Learn more about your favorite characters</h2>
      {selectCharacter ? (
        <CharacterDetails selectedCharacter={selectedCharacter} goBack={goBack} />
      ) : (
        <CharacterList characters={characters} selectCharacter={selectCharacter} />
      )}
    </div>
  )
}

export default App
