
import React, {useContext} from 'react'
import { CarroConst } from '../Context/CartContext'


export const PaginaCarrito = () => {
  const {cartList, total, vaciarCarro, deleteItem}= useContext(CarroConst)

  const handleDelete=(producto)=>{
    deleteItem(producto)
}

const generarOrden = (e) =>{
  e.preventDefalut()

  const orden = {}

  orden.items = cartList.map(prod => {const {id, name, price} = prod
    return {id, name, price}
  }),
  orden.buyer={
    name: 'Prueba',
    phone:'00000000',
    email:'prueba@prueba.com'
  }
  
  orden.total = total
}
 

  
  return (
    <>
      <div id="cuerpo" style={{display:'flex',justifyContent:'center'}}>
        <h1>Carrito de compras</h1>
      
        {
          (cartList.lenght >= 1)  ?  
          
             <div>
              <h2>Carro vacío</h2>
             </div>

            : 
                       cartList.map ((item) => 
              
              <div className="row" style={{padding:'1px', margin:'10px', border:'solid', width:'80%'}}>
                <div className="col"><img src={item.foto} style={{width:'100px', height:'100px'}}/></div>
                <div className="col" style={{width:'250px' }}>{item.name}</div>
                <div className="col"> {item.cantidad}</div>
                <div className="col">${item.price}</div>
                <div className="col">${`${parseInt(item.cantidad)*parseInt(item.price)}`}</div>
                <button onClick={ () => handleDelete(item)} type="button" class="btn btn-primary">Eliminar</button>
                <button onClick={ () => generarOrden} type="button" class="btn btn-primary">Terminar orden</button>
              </div>)
           
        }
      
      </div>
      <div id="cuerpo" style={{display:'flex',justifyContent:'center'}}>
        TOTAL: $ {total}
        <button onClick={vaciarCarro} type="button" class="btn btn-primary">VACIAR EL CARRO</button>
      </div>
    </>

  )
}
