import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../Estilos.css';

export const NavBar = (props) => {
    const{logoIco, seccionUno, seccionDos, seccionTres, carro, entregable}= props;
    return <>
        <Navbar id="navbarestilos" bg="primary" variant="dark">
            {logoIco}
            <Nav id="navbarestilos2">
                <Nav.Link href="#computadoras">{seccionUno}</Nav.Link>
                <Nav.Link href="#consolas">{seccionDos}</Nav.Link>
                <Nav.Link href="#accesorios">{seccionTres}</Nav.Link>
                {carro}
            </Nav>
            {entregable}
        </Navbar>
    
    </>
 
}