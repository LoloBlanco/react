import React from 'react'
import { useParams } from 'react-router-dom'

export const Detalles = () => {

   const {idProducto}= useParams() 
   console.log(idProducto) 
  return (
    <div>Detalles</div>
  )
}

