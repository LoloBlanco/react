import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../Estilos.css';
import { Link } from 'react-router-dom';
import { CarroConst } from '../Context/CartContext'
import { useContext } from 'react';


export const NavBar = (props) => {
    const {cantidad} = useContext(CarroConst)
    const{logoIco, seccionUno, seccionDos, seccionTres, carro}= props;
    return <>
        <Navbar id="navbarestilos" >
            <Nav><Link to="/">{logoIco}</Link></Nav>
            <Nav>         
                <Link style={{color: 'white',textDecoration:'none'}} to="/categoria/Computadoras">{seccionUno} </Link>
            </Nav>
            <Nav>
                <Link style={{color: 'white',textDecoration:'none'}} to="/categoria/Consolas">{seccionDos} </Link>
                </Nav>
            <Nav>
                <Link style={{color: 'white',textDecoration:'none'}} to="/categoria/Accesorios"> {seccionTres}  </Link>
            </Nav>
            <Nav>
            
                <Link to="/carrito">
                    <button type="button" className="btn btn-primary">
                        {carro}
                        <span className="badge badge-light">{cantidad}</span>
                    </button>
                    
                </Link>
                
              
            </Nav>
        </Navbar>
    
    </>
 
}