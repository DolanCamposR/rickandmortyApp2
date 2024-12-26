import react from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";

// paginas
import SearchCharacterPage from './pages/SearchCharacterPage'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/*home*/}
      <Route path="/home" element={<Home />} />
         {/*buscador*/}
      <Route path="/search" element={<SearchCharacterPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
