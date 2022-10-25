import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState, useContext } from 'react'
import { aFetch } from "../../Extras/afetch"
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
   
 

 
 
  return (
    
    <div >
      { loading ? 
        <div class="spinner-border" role="status">
          
        </div>
      
      :
      <div>
        <Producto prod={producto}/>       
      </div>
    }
  </div>
 
  )
}

