import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState} from 'react'




const InputCount=()=>{

    
    return(
        <>
        <Link to='/carrito'>
            <Button variant="primary">Ir al carrito</Button>
        </Link>
        <Link to='/'>
            <Button variant="primary">Seguir comprando</Button>
        </Link>
        </>
    )

}

const ButtonCount = ({handleInter})=>{
    return <Button variant="primary" onClick={handleInter}>Agregar al carrito</Button>
}


const Intercambiabilidad = () => {

    
    const [inputType, setInputType] = useState('button')
    
    const handleInter=()=>{
        setInputType("input")
    }

  return (
    <div>
        {
            inputType === 'button' ?
                <ButtonCount handleInter={handleInter} />
            :
                <InputCount />
        }
    </div>
  )
}

export default Intercambiabilidad