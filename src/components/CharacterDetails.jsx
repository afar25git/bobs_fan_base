import React, { useState, useEffect } from "react"
import axios from "axios"

const CharacterDetails = (props) => {

    const [characterDetails, setCharacterDetails] = useState(null)

    useEffect(() => {
        const getDetails = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character`)
            console.log(response)
            setCharacterDetails(response.data.results)
        }
        getDetails()
    }, [props.selectedCharacter])

    return (
        <div>
            {characterDetails ? (
                <div className="details">
                    <div className="character-card">
                    <img src={`${characterDetails.image}`} alt="poster" />
                        <h2>{characterDetails.name}</h2>
                        <p>{characterDetails.status}</p>
                        <p>From: {characterDetails.origin}</p>
                        <p>Species: {characterDetails.species}</p>
                    </div>
                    <button onClick={props.goBack}>Go Back</button>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
)

}

export default CharacterDetails