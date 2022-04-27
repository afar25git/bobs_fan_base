import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'
import { LOGO, RICK, MORTY } from './globals'


const App = () => {
  const [characters, setCharacters] = useState (null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const selectCharacter = (data) => {
    setSelectedCharacter(data)
  }

  const goBack = () => {
    setSelectedCharacter(null)
  }

  const refreshPage = () => {
    window.location.reload(false)
  }  

  const randomPage = Math.floor(Math.random() * 42) + 1


  useEffect(() => {
    const getCharacters = async () => {
      
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
      console.log(response.data)
      setCharacters(response.data.results)
    }
    getCharacters()

  }, [])



  return (
    <div className="App">
      <h1>Welcome to the</h1>
      <img src={LOGO} alt='Rick and Morty' />
      <h2>Fan Zone</h2>
      <h3>Click on the image to learn more about your favorite characters</h3>
      <button onClick={refreshPage}>Click to get more characters</button>
      {selectedCharacter ? (
        <CharacterDetails selectedCharacter={selectedCharacter} goBack={goBack} />
      ) : (
        <CharacterList characters={characters} selectCharacter={selectCharacter} />
      )}
      <img src={MORTY} alt='Morty' id='Morty' />
      <img src={RICK} alt='Rick' id='Rick' />
    </div>
  )
}

export default App
