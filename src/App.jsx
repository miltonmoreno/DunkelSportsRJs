import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/CheckOut'
import { ToastContainer, toast } from 'react-toastify';
import PaginaError from './components/PaginaError/PaginaError'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Dunkel"}/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={ <PaginaError /> } />
          </Routes>
          <ToastContainer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
