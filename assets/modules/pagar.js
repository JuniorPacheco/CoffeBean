import { carrito } from '/assets/modules/agregar_carrito.js';
import pintarCarrito from '/assets/modules/pintar_carrito.js';

const botonPagar = document.querySelector(".car__pagar");

botonPagar.addEventListener("click", pagarPedido);

export default function pagarPedido() {
    for(let i = Object.values(carrito).length - 1; i >= 0 ; i--){
        delete carrito[Object.values(carrito)[i].id];
    }
    pintarCarrito();
    alert("Su pedido ha sido procesado");
}