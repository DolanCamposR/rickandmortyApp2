import React from 'react'
import CharacterCardList from '../components/SearchCharacter/CharacterCardlist'
import CharacterInput from '../components/SearchCharacter/CharacterInput'
import CharacterPagination from '../components/SearchCharacter/CharacterPagination'
import { CharacterProvider } from '../components/SearchCharacter/CharacterContext'

function SearchCharacterPage() {
    
     

  return (
    <div> 
        <CharacterProvider>

     

    


                <CharacterPagination />
                <CharacterInput />
                <CharacterCardList />


 

          </CharacterProvider>


    </div>
  )
}

export default SearchCharacterPage 