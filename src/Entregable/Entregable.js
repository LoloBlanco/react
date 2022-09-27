import {Contenido} from "./Contenido/Contenido";
import {NavBar} from "./Navbar/NavBar";
import {CartWidget} from "./Cart/CartWidget";
import {Logo} from "./Logo/Logo";

export const Entregable = () => {
    return <section>
        <NavBar logoIco={<Logo/>} seccionUno={"Computadoras"} seccionDos={"Consolas"} seccionTres={"Accesorios"} carro={<CartWidget/>}/>
    
        <Contenido/>
    </section>
}