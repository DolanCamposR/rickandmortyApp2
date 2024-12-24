import React, { useRef, useContext } from 'react'
import { CharacterContext } from './CharacterContext';

function CharacterInput() {
  const {setSearch, setPage} = useContext(CharacterContext); // nuevo seteo para el onSearch, el antigui
     
const inputRef = useRef(null);

const  handleOnSearch = () => {
        setSearch(inputRef.current.value);
        setPage(1);
        console.log(inputRef.current.value)
        
    }



  return (
    <div>

      <input 
            type="text"
            placeholder="Buscar personaje"
            ref={inputRef}
            />

            <button
            onClick={handleOnSearch}
            >
                BUSCAR
            </button>
            <button>
              ver mas
            </button>

    </div>
  )
}

export default CharacterInput