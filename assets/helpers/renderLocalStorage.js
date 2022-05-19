import pintarCarrito from "/assets/modules/pintar_carrito.js";
import { carrito } from '/assets/modules/agregar_carrito.js';

export default document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('carrito')) {
        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        Object.values(carritoLocalStorage).forEach((producto, i)=>{
            carrito[Object.values(carritoLocalStorage)[i]["id"]] = {
                categoria: Object.values(carritoLocalStorage)[i]["categoria"],
                nombre: Object.values(carritoLocalStorage)[i]["nombre"],
                precio: Object.values(carritoLocalStorage)[i]["precio"],
                imagen: Object.values(carritoLocalStorage)[i]["imagen"],
                cantidad: Object.values(carritoLocalStorage)[i]["cantidad"],
                id: Object.values(carritoLocalStorage)[i]["id"]
             }
        })
        pintarCarrito();
    }
})