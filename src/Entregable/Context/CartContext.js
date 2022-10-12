import React, { createContext } from 'react'

export const carroConst = createContext([])

const CartContextProvider = ({children}) => {
  return (
    <carroConst.Provider value={[]}>
        {children}
    </carroConst.Provider>
  )
}

