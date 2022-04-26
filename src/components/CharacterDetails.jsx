import React, { useState, useEffect } from "react"
import axios from "axios"

const CharacterDetails = (props) => {

useEffect(() => {
    const getDetails = async () => {
        const response = await axios.get(`https://bobsburgers-api.herokuapp.com/characters`)
        console.log(response)
    }
    getDetails()
}, [])

return (
    <div>

    </div>
)

}

export default CharacterDetails