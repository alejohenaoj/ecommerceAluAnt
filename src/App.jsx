import Navbar from "./components/Navbar/Navbar"
import CartView from "./components/CartView/CartView"
import Checkout from "./components/Checkout/Checkout"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotificationProvider } from "./notification/NotificationsService"

function App() {
  
  return (
    <>
      < BrowserRouter >
        <NotificationProvider>
          <CartProvider>
            < Navbar />
            < Routes >
              < Route path='/' element={ < ItemListContainer greeting={'Bienvenidos a la tienda de Aluminios Antioquia'} /> } />
              < Route path='/category/:categoryId' element={ < ItemListContainer greeting={'Productos de la categoria'} /> } />
              < Route path='/item/:itemId' element={ < ItemDetailContainer /> } />
              < Route path='/cart' element={ < CartView /> } />
              < Route path='/checkout' element={ < Checkout /> } />
              < Route path='*' element={ <h1> 404 NOT FOUND </h1> } />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App