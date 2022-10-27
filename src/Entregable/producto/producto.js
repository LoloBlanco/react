import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount';
import { CarroConst } from '../Context/CartContext';
import { useContext } from 'react';


const Producto = ({prod}) => {
    const [isCount, setIsCount]= useState(true)
    const {addItem}= useContext(CarroConst)
    
    

      
    const onAdd = (cantidad)=>{
        addItem({...prod, cantidad})
        setIsCount(false)
    }

  return (    
  
     <div
         key={prod.id}
         id="cuerpo"
       >   
         <Link to={`/detalles/${prod.id}`}>                    
             <div id="tarjeta"  style={{
                    display:'flex',
                    alignItems:'center',
                    flexDirection: 'column',
                    padding: '20px',
                    margin: '20px'            
            }}  className="card bg-dark text-white w-50" >
                 <div className="card-header">
                     {`${prod.name} - ${prod.categoria}`}
                 </div>
                 <div className="card-body">
                     <img src={prod.foto} alt='' style={{width:'400px', height:'400px'}} />     
                                                                             
                 </div>

                 <div className="card-footer" style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'space-evenly', margin:'10px'}}>  
                 US$ {prod.price} 
                  {
                         isCount ? 
                             <ItemCount onAdd={onAdd} stock={prod.stock} init={1}/> 
                             :
                             <div >
                                 <Link to="/carrito">
                                     <button type="button" className="btn btn-primary">Terminar compra</button>
                                     </Link><br></br>
                                 <Link to="/">
                                     <button type="button" className="btn btn-primary">Continuar comprando</button>
                                    </Link>
                             </div>

                     }                                                                   
                </div>
            </div>
         </Link>
    </div> 
   )
}

export default Producto