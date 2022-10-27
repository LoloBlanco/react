import React, { createContext, useState, useEffect } from 'react'

export const CarroConst = createContext([])

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)
  const [cantidad, setCantidad] = useState(0)

  const sumar = () => {
    var tot = 0
    cartList.map(el => {
     tot += (parseInt(el.cantidad)*parseInt(el.price))
    })  
    
    setTotal (tot)
    
  }

  const totalItems=()=>{
    var tot = 0
    cartList.map ((item) => {tot += parseInt(item.cantidad)})
    setCantidad(tot)
}

  useEffect(() => {
    sumar()
    totalItems()

  })

  const vaciarCarro=() =>{
    setCartList([])
    setTotal(0)
    setCantidad(0)
  }


  const isInCart = (itemId) => {
    return cartList.find(item => item.id === itemId)
 }

 const deleteItem = (producto) =>{
  cartList.map(el => {
    if(el.id === producto.id)  {
      setCartList(cartList.filter( el => el !== producto ))      
      }       
   })
  
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
    }
        

  }        
  

  return (
    <CarroConst.Provider value={{ 
      cartList,
      total,
      cantidad,
      vaciarCarro,
      deleteItem,
      addItem,
      totalItems
    }}>
          
      {children}
    </CarroConst.Provider>
    )
}
export default CartContextProvider
