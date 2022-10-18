import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState, useContext } from 'react'
import { aFetch, aFetch1 } from "../../Extras/afetch"
import Card from 'react-bootstrap/Card';
import Intercambiabilidad from '../../Extras/intercambiabilidad';
import { CarroConst } from '../Context/CartContext';


export const Detalles = () => {


   const {idProducto} = useParams() 
   console.log(idProducto)
   const [ producto, setProductos ] = useState([])
   const [ loading, setLoading ] = useState(true)
   
   const {addItem, cartList}= useContext(CarroConst)

const OnAdd = (cantidad=2)=>{
  addItem({...producto, cantidad})
 }

 useEffect(()=>{
    aFetch() 
    
    .then(resp => {console.log(producto)})
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
})
  
  // useEffect(()=>{
  //        aFetch() 
  //        .then(resSgte => setProductos(resSgte.find(producto => producto.id === idProducto )))
  //        .catch(err => console.log(err))
  //        .finally(()=> setLoading(false))
  // })

  
  return (
    
    <div>
      { loading ? 
      <h2>Cargando...</h2> 
      :
      <div style={{ marginLeft: 100}}
      className='col-md-3'>
        
       <Card id="tarjeta" className="text-center">
         <Card.Header> {`${producto.categoria}`}</Card.Header>
         <Card.Body>
         <Card.Title>{`${producto.name}`}</Card.Title>
         <Card.Text>
           <img src={producto.foto} alt='' className='w-50' />                                                            
         </Card.Text>
         <Intercambiabilidad prod={producto}/>
         
         
       </Card.Body>
       <Card.Footer className="text-muted">PRECIO US$ {producto.price}</Card.Footer>
      </Card>
      
      </div>
    }
  </div>
 
  )
}

