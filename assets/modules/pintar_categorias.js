import baseDeDatos from "../database/database.js"

let descripcionDesplegable;
let contadorVeces = 0;
let categoriaActual = 0;

const contenedorProductos = document.querySelector(".productos__items-contenedor");

export default document.addEventListener('click', atraparCategorias);

export function getCategoriaActual(){
    return categoriaActual;
}

export function getContador(){
    return contadorVeces;
}

export function getDescripcionDesplegable(){
    return descripcionDesplegable;
}

function atraparCategorias(e) {
    e.target.classList.contains("bx__categoria") ?
    pintarCategoria(parseInt(e.target.getAttribute("data-categoria"))) :
    "";
}

function pintarCategoria(index_categoria){
    categoriaActual = index_categoria;
    contadorVeces++;
    contenedorProductos.innerHTML = "";
    let productsTemplateHTML = '';
    baseDeDatos[index_categoria].forEach((elemento) => {
    productsTemplateHTML += `

    <div class="item">
        <div class="item__body">
            <div class="item__imagen">
                <img src="${elemento.imagen}" alt="${elemento.descripcion}">
            </div>
            <p class="item__nombre">${elemento.nombre}</p>
            <button class="boton__agregarProducto" data-id="${elemento.id}">Agregar al carrito</button>
        </div>
        <p>$<span>${elemento.precio}</span></p>
        <div class="item__descripcion">
            <div class="item__description-texto">
                <p>${elemento.descripcion}</p>
            </div>
        </div>
        <i data-id="${elemento.id}" class='bx bx-menu-alt-left'></i>
    </div>
    `;
})

    contenedorProductos.insertAdjacentHTML('beforeend', productsTemplateHTML);
    descripcionDesplegable = document.querySelectorAll('.item__descripcion');
}