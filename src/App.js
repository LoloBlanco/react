import './App.css';
import './Estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Contenido} from "./Entregable/Contenido/Contenido";
import {NavBar} from "./Entregable/Navbar/NavBar";
import {CartWidget} from "./Entregable/Cart/CartWidget";
import {Logo} from "./Entregable/Logo/Logo";
import CartContextProvider, { CarroConst } from './Entregable/Context/CartContext';
import {Detalles} from "./Entregable/Detalles/Detalles";
import { PaginaCarrito } from "./Entregable/Cart/PaginaCarrito";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar logoIco={<Logo/>} seccionUno={"Computadoras"} seccionDos={"Consolas"} seccionTres={"Accesorios"} carro={<CartWidget/> } />
        <Routes>
          <Route path='/' element={<div id="cuerpo"><Contenido /></div> } />
          <Route path='/categoria/:idCategoria' element={<div id="cuerpo"><Contenido /></div> } />
          <Route path='/detalles/:idProducto' element={<Detalles /> } />
          <Route path='/carrito' element={<PaginaCarrito /> } />
          {<Route path='*' element={<Navigate to='/' /> } /> }
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
      
  )
}

export default App;
