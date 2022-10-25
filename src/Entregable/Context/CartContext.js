import React, { createContext, useState } from 'react'

export const CarroConst = createContext([])

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)

  const sumar = (prod) => {
    const tot = (parseInt(prod.cantidad)*parseInt(prod.price))
    console.log(tot)
    setTotal (total + tot)
    
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
        sumar(el)
        return(el)
      })
    } else {
      sumar(producto)
      setCartList([...cartList, producto]);
    }
  }
        
  

  return (
    <CarroConst.Provider value={{ 
      cartList,
      total,
      addItem
    }}>
          
      {children}
    </CarroConst.Provider>
    )
}
export default CartContextProvider
