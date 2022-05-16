const siguiente = document.querySelector(".bx-chevron-right");
const anterior = document.querySelector(".bx-chevron-left");

let contenedorItems = document.querySelector(".productos__items-contenedor");
let botonSiguiente = siguiente.addEventListener('click', siguienteProducto);
let botonAnterior = anterior.addEventListener('click', anteriorProducto);

function siguienteProducto(e) {
    let primero = document.querySelectorAll(".item")[0];
    contenedorItems.insertAdjacentElement('beforeend', primero);
    e.preventDefault();
}

function anteriorProducto(e) {
    const items = document.querySelectorAll(".item");
    let ultimo = document.querySelectorAll(".item")[items.length - 1];
    contenedorItems.insertAdjacentElement('afterbegin', ultimo);
    e.preventDefault();
}

function cambioPrimeraVez() {
    const items = document.querySelectorAll(".item");
    let ultimoPrimeraVez = document.querySelectorAll(".item")[items.length - 1];
    contenedorItems.insertAdjacentElement('afterbegin', ultimoPrimeraVez);
}

const funciones = {
    cambioPrimeraVez: cambioPrimeraVez,
    botonSiguiente: botonSiguiente,
    botonAnterior: botonAnterior
}

export default funciones;