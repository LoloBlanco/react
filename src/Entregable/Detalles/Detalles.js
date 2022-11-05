import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect , useState} from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Producto from '../producto/producto';



export const Detalles = () => {

   const [ producto, setProducto ] = useState({})
   const [ loading, setLoading ] = useState(true)
   const {idProducto} = useParams() 

   useEffect(() => {
    const db= getFirestore()
    const queryDoc = doc(db, 'productos', idProducto)
    getDoc(queryDoc)
    .then(resp => setProducto({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])

 

 
 
  return (
    
    <div >
      { loading ? 
        <div className="spinner-border" role="status">
          
        </div>
      
      :
      <div>
        <Producto prod={producto}/>       
      </div>
    }
  </div>
 
  )
}

