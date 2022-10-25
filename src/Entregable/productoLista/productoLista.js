import React from 'react'
import { Link } from 'react-router-dom'

const ProductoLista = ({productos}) => {
  return (
    <div
        style={{
            display:'flex',
            flexDirection: 'column',
            padding: '20px',
            justifyContent: 'center',
            
            }}
            className='col-10 w-100'
        >
          {productos.map(prod =>  
          <Link to={`/detalles/${prod.id}`}>                    
             <div  style={{
            display:'flex',
            alignItems:'center',
            flexDirection: 'column',
            padding: '20px',
            margin: '20px'
            
            }} id="tarjeta" className="card bg-dark text-white w-50" >
              <div className="card-img-overlay"></div>
                 <div className="card-header w-100">
                     <img src={prod.foto} alt='' className='w-50' />  
                 </div>
                 <div className="card-body w-100">
                     {`${prod.name} - ${prod.categoria}`}                                                                                   
                 </div> 
                 <div>
                    US$ {prod.price}
                 </div>               
            </div>
            
         </Link>)}
         
    </div>
  )
}

export default ProductoLista