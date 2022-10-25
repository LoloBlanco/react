import React, {useContext} from 'react'
import { CarroConst } from '../Context/CartContext'


export const PaginaCarrito = () => {
  const {cartList, total, vaciarCarro}= useContext(CarroConst)

 

  
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
              
              <div class="row" style={{padding:'1px', margin:'10px', border:'solid', width:'80%'}}>
                <div class="col"><img src={item.foto} style={{width:'100px', height:'100px'}}/></div>
                <div class="col" style={{width:'250px' }}>{item.name}</div>
                <div class="col"> {item.cantidad}</div>
                <div class="col">${item.price}</div>
                <div class="col">${`${parseInt(item.cantidad)*parseInt(item.price)}`}</div>
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
