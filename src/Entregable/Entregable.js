import {Contenido} from "./Contenido/Contenido";
import {NavBar} from "./Navbar/NavBar";
import {CartWidget} from "./Cart/CartWidget";
import {Logo} from "./Logo/Logo";
import {Detalles} from "./Detalles/Detalles";
import { PaginaCarrito } from "./Cart/PaginaCarrito";
import { BrowserRouter, Route, Router } from "react-router-dom";

export const Entregable = () => {
    return <BrowserRouter>
        <NavBar logoIco={<Logo/>} seccionUno={"Computadoras"} seccionDos={"Consolas"} seccionTres={"Accesorios"} carro={<CartWidget/>}/>
        <Router>
            <Route path='/contenido' element={<div id="cuerpo"><Contenido/></div>}></Route>
            <Route path='/detalles' element={<Detalles/>}></Route>
            <Route path='/carrito' element={<PaginaCarrito/>}></Route>
            
        </Router>
        
    </BrowserRouter>
}