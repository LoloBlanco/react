import '../../Estilos.css';
import { useEffect, useState } from "react"
import {collection, where, query, getDocs, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom';
import ProductoLista from '../productoLista/productoLista';



export const Contenido = () => {
   
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    const {idCategoria} = useParams()


    useEffect(()=>{
        if (idCategoria) {
            const db= getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryFilter = query(queryCollection, where('categoria', '==', idCategoria))
            getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data() })  )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            const db= getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data() })  )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    },[idCategoria])

  
    return (
       <>
        <div>     
           <h3>Gamer World</h3>
        </div> 
               { loading ? 
                   <div className="spinner-border" role="status">
          
                   </div> 
        
                    :
                    <div style={{
                        display:'flex',
                        
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '20px',
                        margin: '20px'            
                }}>
                        <ProductoLista productos={productos}/>
                    </div>
                
               
            }
        </>)
    


    
}