import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState, useContext } from 'react'
import { aFetch } from "../../Extras/afetch"
import { CarroConst } from '../Context/CartContext';
import Producto from '../producto/producto';



export const Detalles = () => {


   const {idProducto} = useParams() 
   useEffect(()=>{
    aFetch(idProducto)     
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  })

   const [ producto, setProductos ] = useState({})
   const [ loading, setLoading ] = useState(true)
   
   const {addItem, cartList}= useContext(CarroConst)

const OnAdd = (cantidad=2)=>{
  addItem({...producto, cantidad})
 }

 
 
  return (
    
    <div>
      { loading ? 
      <h2>Cargando...</h2> 
      :
      <div>
        <Producto prod={producto}/>       
      </div>
    }
  </div>
 
  )
}

