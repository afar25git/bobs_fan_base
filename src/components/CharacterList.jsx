import React from 'react'

const CharacterList = (props) => {
    return (
        <div className="character-grid">
            {
                props.characters?
                props.characters.map((character) => (
                    <div className="character-card" key={character.id} onClick={() => props.selectCharacter(character.id)}>
                        <img src={`${character.image}`} alt={`${character.name}`} />
                        <h3>{character.name}</h3>

                    </div>
                )) : "loading"
            }
    
        </div>
    )

}

export default CharacterList