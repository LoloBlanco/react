import React from 'react'
import Producto from '../producto/producto'

const ProductoLista = ({productos}) => {
  return (
    <div
        style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
        >
            {productos.map( prod =>  
                                   <Producto prod={prod}/>
                            ) 
            } 
    </div>
  )
}

export default ProductoLista