import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Dunkel"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detail/:idProducto" element={<ItemDetailContainer />} />
          
          <Route path="*" element={ <div>Error 404 - Página no encontrada</div> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
