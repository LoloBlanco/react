
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, {useContext, useState} from 'react'
import { CarroConst } from '../Context/CartContext'


export const PaginaCarrito = () => {
  const {cartList, cartListLength, total, vaciarCarro, deleteItem}= useContext(CarroConst)
  const [dataForm, setDataForm] = useState({
    name:'',
    phone:'',
    email:'',
    confEmail:''
  })
  const [orderNumber, setOrderNumber] = useState()


  const handleDelete=(producto)=>{
    deleteItem(producto)
}

const dataInfo = (e) =>{
  e.preventDefault()
  if(dataForm.email === dataForm.confEmail){
    generarOrden(e)
  }else{    
    document.getElementById("error").innerText="El campo confirmar email no coincide!";
  }
}


const generarOrden = (e) =>{
    e.preventDefault()
    const orden = {}

    orden.items = cartList.map(prod => {
      const {id, name, price } = prod 
      return (id, name, price) 
    })
    orden.buyer={
    name: dataForm.name,
    phone:dataForm.phone,
    email: dataForm.email
    }
  
    orden.total = total
  
    const db = getFirestore()
    const orders = collection(db, 'orders')
    addDoc(orders, orden)
    .then(resp => setOrderNumber(resp.id))
    .catch(err => console.log(err))
    
   
    vaciarCarro()
    setDataForm("","","","")
   
}
 
const handleInputChange = (e) =>{
  setDataForm({...dataForm,
  [e.target.name]: e.target.value
  })
}

  
  return (
    <>
      <div id="cuerpo" style={{display:'flex',justifyContent:'center'}}>
        <h1>Carrito de compras</h1>
          {orderNumber && <h2>Orden generada con éxito Nro: {orderNumber}</h2>}
          <div>
            {cartList.map ((item) => 
           
              
              <div className="row" style={{padding:'1px', margin:'10px', border:'solid', width:'80%'}}>
                <div className="col"><img src={item.foto} style={{width:'100px', height:'100px'}}/></div>
                <div className="col" style={{width:'250px' }}>{item.name}</div>
                <div className="col"> {item.cantidad}</div>
                <div className="col">${item.price}</div>
                <div className="col">${`${parseInt(item.cantidad)*parseInt(item.price)}`}</div>
                
                <button onClick={ () => handleDelete(item)} type="button" className="btn btn-primary">Eliminar</button>
                
              </div>)

           
        }</div>
        
      
      </div>
      {   
      
          (cartListLength == 0)  ?  
          
             <div id="cuerpo">
              <h2>Carro vacío</h2>
             </div>

            : 
            <div id="cuerpo" style={{display:'flex',justifyContent:'center'}}>
              
              TOTAL: $ {total}<br></br>

              <form id="formulario" onSubmit={dataInfo}>
                <input name="name" value={dataForm.name} onChange={handleInputChange} type="text" placeholder="Nombre" required />
                <input name="phone" value={dataForm.phone} onChange={handleInputChange} type="text" placeholder="Teléfono" required />
                <input name="email" value={dataForm.email} onChange={handleInputChange} type="text" placeholder="Email" required />
                <input name="confEmail" value={dataForm.confEmail} onChange={handleInputChange} type="text" placeholder="Confirmar Email" required />
                <label id="error"></label>
                <button  type="submit" className="btn btn-primary">Terminar orden</button><br></br>   
              </form>
     
              <button style={{width:'300px'}}   onClick={vaciarCarro} type="button" className="btn btn-primary">VACIAR EL CARRO</button>
            </div>
       }
    </>

  )
}
