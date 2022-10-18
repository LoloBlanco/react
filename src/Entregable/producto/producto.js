import React from 'react'
import { Link } from 'react-router-dom'

const Producto = ({prod}) => {
  return (
    <div
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
                </div>
            </div>
        </Link>
    </div> 
  )
}

export default Producto