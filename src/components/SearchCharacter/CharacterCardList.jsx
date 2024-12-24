import React, { useContext } from 'react'
import { CharacterContext } from './CharacterContext'

function CharacterCardlist() {

  const {characters} = useContext(CharacterContext);


  return (
    
    <div>
            <div className="contenedor-personajes">
                { characters.map((character) =>
                //CARD
                <div
                key={character.id}
                >
                    <h3>{character.name}</h3>
                    <img src={character.image} alt="" />
                </div>
                )
                }
            </div>

    </div>
  )
}

export default CharacterCardlist