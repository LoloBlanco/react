import React, { createContext, useState } from 'react'

export const CarroConst = createContext([])

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)

  const sumar = () => {
    var tot = 0
    cartList.map(el => {
     tot += (parseInt(el.cantidad)*parseInt(el.price))
    })
    
    
    setTotal (tot)
    
  }

  const vaciarCarro=() =>{
    setCartList([])
  }


  const isInCart = (itemId) => {
    return cartList.find(item => item.id === itemId)
 }

 
  const addItem = (producto) =>{
    if(isInCart(producto.id)){
      cartList.map(el => {
        if(el.id === producto.id)  {
          el.cantidad += producto.cantidad
        }
        return(el)
      })
    } else {      
      setCartList([...cartList, producto]);
      console.log(cartList.length)
    }
    sumar()
  }
        
  

  return (
    <CarroConst.Provider value={{ 
      cartList,
      total,
      vaciarCarro,
      addItem
    }}>
          
      {children}
    </CarroConst.Provider>
    )
}
export default CartContextProvider
