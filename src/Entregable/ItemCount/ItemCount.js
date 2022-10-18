import { useState } from "react"
import Producto from "../producto/producto"


export const ItemCount = ({onAdd, stock, init}) => {
    
    const[count, setCount]= useState(init)

    const handleSumar = () => {
        if (count < stock){
            setCount (count + 1)
         }
    }
    
    const handleRemove = () => {
        if (count > init){
            setCount (count - 1)
        }
    }
  
    const handleOnAdd=()=>{
        onAdd(count)
    }
  
    return (
    <div>
        <button onClick={handleSumar}>+</button>
        <p>{count}</p>
        <button onClick={handleRemove}>-</button>
        <button onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  )
}
