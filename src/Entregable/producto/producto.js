import React from 'react'
import Intercambiabilidad from '../../Extras/intercambiabilidad'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount';
import { CarroConst } from '../Context/CartContext';
import { useContext } from 'react';


const Producto = ({prod}) => {
    const {addItem}= useContext(CarroConst)

    const onAdd = (cantidad)=>{
        addItem({...prod, cantidad})
    }

  return (
    <div
        key={prod.id}
        style={{ alignContent: 'center'}}
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
                    <Intercambiabilidad prod={prod}/>  
                    <ItemCount onAdd={onAdd} stock={10} init={1}/>                                                 */}
                </div>
            </div>
        </Link>
    </div> 
  )
}

export default Producto