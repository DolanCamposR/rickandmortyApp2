import React, {useContext} from 'react'
import { CharacterContext } from './CharacterContext'

function CharacterPagination(  ) {

  const {page,setPage,totalPages} = useContext(CharacterContext);


  //handles de conpaginacion
  const handleOnPrev = () => {
    setPage(page - 1)
  }

  const handleOnNext = () => {
    setPage(page + 1)
  }





  return (
    
    <div>
            <button
            onClick={handleOnPrev}
            disabled={page === 1}
            >
                PAGINA ANTERIOR
            </button>

            <button
            onClick={handleOnNext}
            disabled={page === totalPages}

            >    
                PAGINA SIGUIENTE
            </button>


    </div>
  )
}

export default CharacterPagination