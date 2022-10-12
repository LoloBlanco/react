import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../Estilos.css';
import { Link, NavLink } from 'react-router-dom';



export const NavBar = (props) => {
    const{logoIco, seccionUno, seccionDos, seccionTres, carro, entregable}= props;
    return <>
        <Navbar id="navbarestilos" bg="primary" variant="dark">
            <Nav >
                <Link to="/">{logoIco}</Link>

                <Link style={{color: 'green'}} to="/categoria/Computadoras">{seccionUno}</Link><br/>
                <Link style={{color: 'green'}} to="/categoria/Consolas">{seccionDos}</Link>
                <Link style={{color: 'green'}} to="/categoria/Accesorios">{seccionTres}</Link>
                <Link to="/carrito">{carro}</Link>
            </Nav>
            
        </Navbar>
    
    </>
 
}