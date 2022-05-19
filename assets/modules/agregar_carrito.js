import pintarCarrito from '/assets/modules/pintar_carrito.js';
import baseDeDatos from '/assets/dataBase/dataBase.js'
import {getCategoriaActual} from '/assets/modules/pintar_categorias.js'

export default document.addEventListener('click', atraparBotones);

export let carrito = {};

function atraparBotones(e) {
   if (e.target.classList.contains("boton__agregarProducto")) {
      agregarAlCarrito(e.target.getAttribute("data-id"));
   }
}

function agregarAlCarrito(dataId) {
   baseDeDatos[getCategoriaActual()].forEach((producto) => {
      if (producto.id === parseInt(dataId)) {
         if (carrito[producto.id]) {
            carrito[producto.id].cantidad += 1;
         } else {
            carrito[producto.id] = {
               categoria: producto.categoria,
               nombre: producto.nombre,
               precio: producto.precio,
               imagen: producto.imagen,
               cantidad: 1,
               id: producto.id
            }
         }
      }
   })
   pintarCarrito();
}