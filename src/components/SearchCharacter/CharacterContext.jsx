import React, {createContext, useState, useEffect} from "react";


export const CharacterContext = createContext();


export const CharacterProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');

    const [open, setOpen] = useState(false);



    const handleSearch = async (name='',page =1) => {
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
            console.log(response);
            const data = await response.json();
            setCharacters(data.results);
            setTotalPages(data.info.pages);
            console.log('TOTAL PAGES', data.info.pages);
        } catch(error){
         setError(error);
        }
    };
    
    useEffect(() => {
        handleSearch(search, page);
      }, [page, search]);

      return (
        <CharacterContext.Provider
        value={
            {
                characters,
                setCharacters,
                error,
                setError,
                loading,
                setLoading,
                page,
                setPage,
                totalPages,
                setTotalPages,
                setSearch,
                search,
                open,
                setOpen
            }
        }
        >
            {children}
        </CharacterContext.Provider>
      )
    
}
       


   