const siguiente = document.querySelector(".bx-chevron-right");
const anterior = document.querySelector(".bx-chevron-left");

let contenedorItems = document.querySelector(".productos__items-contenedor");
const items = document.querySelectorAll(".item");

siguiente.addEventListener('click', siguienteProducto);
anterior.addEventListener('click', anteriorProducto);

function siguienteProducto(e) {
    let primero = document.querySelectorAll(".item")[0];
    contenedorItems.insertAdjacentElement('beforeend', primero);
    e.preventDefault();
}

function anteriorProducto(e) {
    let ultimo = document.querySelectorAll(".item")[items.length - 1];
    contenedorItems.insertAdjacentElement('afterbegin', ultimo);
    e.preventDefault();
}