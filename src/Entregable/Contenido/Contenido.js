import '../../Estilos.css';
import { useEffect, useState } from "react"
import { aFetch } from "../../Extras/afetch"
import { Link, useParams } from 'react-router-dom';



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
                productos.map( prod =>  <div
                                                key={prod.id}
                                                style={{ marginLeft: 100}}
                                                className='col-md-3'
                                            >   
                                            <Link to={`/detalles/${prod.id}`}>                    
                                                <div id="tarjeta" className="card w-100 mt-5" >
                                                    <div className="card-header">
                                                        {`${prod.name} - ${prod.categoria}`}
                                                    </div>
                                                    <div className="card-body">
                                                        <img src={prod.foto} alt='' className='w-50' />     
                                                        US$ {prod.price}                                                            
                                                    </div>
                                            
                                                    <div className="card-footer">                                                        
                                                        {/* <button className="btn btn-outline-primary btn-block">
                                                            Detalles
                                                        </button> */}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div> ) 
            }
        </>)
    


    
}