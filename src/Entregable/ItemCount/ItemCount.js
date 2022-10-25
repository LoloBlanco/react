import { useState } from "react"


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
    <div id="itemCount">
        <div id="contador" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', margin:'10px'}}>
            <button onClick={handleSumar} type="button" class="btn btn-primary"> + </button>
            <p>{count}</p>
            <button onClick={handleRemove} type="button" class="btn btn-primary"> - </button>
        </div>
        <div>
            <button onClick={handleOnAdd} type="button" class="btn btn-primary">Agregar al carrito</button>
        </div>
        
    </div>
  )
}
