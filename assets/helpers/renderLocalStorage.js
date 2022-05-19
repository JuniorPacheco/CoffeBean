import pintarCarrito from "/assets/modules/pintar_carrito.js";
import { carrito } from '/assets/modules/agregar_carrito.js';

export default document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('carrito')) {
        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        for(let codigoId in carritoLocalStorage){
            const { categoria, nombre, precio, imagen, cantidad, id } = carritoLocalStorage[codigoId];
            carrito[codigoId] = {
                categoria: categoria,
                nombre: nombre,
                precio: precio,
                imagen: imagen,
                cantidad: cantidad,
                id: id
             }

        }
        pintarCarrito();
    }
})