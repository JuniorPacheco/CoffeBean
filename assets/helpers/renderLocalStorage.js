import pintarCarrito from "/assets/modules/pintar_carrito.js";
import { carrito } from '/assets/modules/agregar_carrito.js';

export default document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('carrito')) {
        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        for(let codigoId in carritoLocalStorage){
            carrito[codigoId] = {
                categoria: carritoLocalStorage[codigoId]["categoria"],
                nombre: carritoLocalStorage[codigoId]["nombre"],
                precio: carritoLocalStorage[codigoId]["precio"],
                imagen: carritoLocalStorage[codigoId]["imagen"],
                cantidad: carritoLocalStorage[codigoId]["cantidad"],
                id: carritoLocalStorage[codigoId]["id"]
             }

        }
        pintarCarrito();
    }
})