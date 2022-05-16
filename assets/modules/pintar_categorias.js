import baseDeDatos from "../database/database.js"

const contenedorProductos = document.querySelector(".productos__items-contenedor");

let productsTemplateHTML = '';
baseDeDatos[0].forEach((elemento) => {

    productsTemplateHTML += `

    <div class="item">
        <div class="item__body">
            <div class="item__imagen">
                <img src="${elemento.imagen}" alt="${elemento.descripcion}">
            </div>
            <p class="item__nombre">${elemento.nombre}</p>
            <button data-id="${elemento.id}">Agregar al carrito</button>
        </div>
        <i class='bx bx-menu-alt-left'></i>
        <p>$<span>${elemento.precio}</span></p>
        <div class="item__descripcion">
            <div class="item__description-texto">
                <p>${elemento.descripcion}</p>
            </div>
        </div>
    </div>
    `;
})

export default contenedorProductos.insertAdjacentHTML('beforeend', productsTemplateHTML);