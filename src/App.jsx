import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      < BrowserRouter >
        < Navbar />
        < Routes >
          < Route path='/' element={ < ItemListContainer greeting={'Bienvenidos a la tienda de Aluminios Antioquia'} /> } />
          < Route path='/category/:categoryId' element={ < ItemListContainer greeting={'Productos de la categoria'} /> } />
          < Route path='/item/:itemId' element={ < ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App