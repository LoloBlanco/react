import '../../Estilos.css';
import { useEffect, useState } from "react"
import { aFetch } from "../../Extras/afetch"
import { useParams } from 'react-router-dom';
import ProductoLista from '../productoLista/productoLista';



export const Contenido = () => {
   
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    const {idCategoria} = useParams()


    useEffect(()=>{
        if (idCategoria) {
            aFetch() 
            .then(resSgte => setProductos(resSgte.filter(producto => producto.categoria === idCategoria )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            aFetch() 
            .then(resSgte => setProductos(resSgte))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
      
    }, [idCategoria])

    return (
       <>
        <div>     
           <h3>GamerWorld</h3>
        </div> 
               { loading ? 
                <h2>Cargando...</h2> 
        
                    :
                <ProductoLista productos={productos}/>
               
            }
        </>)
    


    
}