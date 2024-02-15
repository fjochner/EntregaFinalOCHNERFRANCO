import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="container p-5 row">
      <BrowserRouter>

        <CartProvider>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer saludo="Bienvenido a Warehouse" />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenido a Warehouse" />} />
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<div>Error: La pagina no existe</div>} />
          </Routes>
        </CartProvider>

      </BrowserRouter>

    </div>

  )
}

export default App