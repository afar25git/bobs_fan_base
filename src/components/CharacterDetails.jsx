import React, { useState, useEffect } from "react"
import axios from "axios"

const CharacterDetails = (props) => {

    const [characterDetails, setCharacterDetails] = useState(null)

    useEffect(() => {
        const getDetails = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${props.selectedCharacter}`)
            console.log(response)
            setCharacterDetails(response.data)
        }
        getDetails()
    }, [props.selectedCharacter])

    return (
        <div>
            {characterDetails ? (
                <div className="details">
                    <div className="character-details">
                    <img src={`${characterDetails.image}`} alt="poster" />
                     <article className="character-info">
                        <h4>{characterDetails.name}</h4>
                        <p className="status">Status: {characterDetails.status}</p>
                        <p><em>Current Location:</em> {characterDetails.location.name}</p>
                        <p><em>From:</em> {characterDetails.origin.name}</p>
                        <p><em>Species:</em> {characterDetails.species}</p>
                    </article>
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