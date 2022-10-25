
const productos = [
    { id: '1', name: 'Consola Microsoft Xbox Series S Ssd 512gb White', price: 800, stock: 10, categoria: 'Consolas', foto:'https://www.unicom.com.uy/WS/Fotos_WEB/Articulos/GMXBOXS512W/1200x1200_1.JPG'},
    { id: '2', name: 'Consola Nintendo Switch Grey', price: 850, stock: 20, categoria: 'Consolas', foto:'https://www.unicom.com.uy/WS/Fotos_WEB/Articulos/GNSW2/1200x1200_1.JPG' },
    { id: '3', name: ' EVGA Nvidia Rtx 3070ti 8GB ddr6', price: 1600, stock: 30, categoria: 'Accesorios', foto:'https://www.unicom.com.uy/WS/Fotos_WEB/Articulos/VERTX3070TIU/1200x1200_1.JPG' },
    { id: '4', name: 'Joystick Inalámbrico Sony Ps5 Dualsense White', price: 160, stock: 40, categoria: 'Accesorios', foto:'https://www.unicom.com.uy/WS/Fotos_WEB/Articulos/JISPS5WH/1200x1200_1.JPG'},
    { id: '5', name: 'Notebook Asus ROG G513qy-hf017t Ryzen 9 Rx 6800m', price: 3990, stock: 2, categoria: 'Computadoras', foto:'https://www.unicom.com.uy/WS/Fotos_WEB/Articulos/AAG513QY/1200x1200_1.JPG'}
]


export const aFetch = (id) => {
    return new Promise ((res)=>{
        setTimeout(()=>{
            res(id ? productos.find(prod => prod.id === id) : productos)
           }, 3000)
       
        }
            
        
    )}







