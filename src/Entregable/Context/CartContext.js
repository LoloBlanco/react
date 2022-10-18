import React, { createContext, useState } from 'react'

export const CarroConst = createContext([])

  const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (producto) =>{
        setCartList(...cartList, producto)
    }

    return (
      <CarroConst.Provider value={{
        cartList,
        addItem
      }}>
          
          {children}
      </CarroConst.Provider>
    )
}
export default CartContextProvider
