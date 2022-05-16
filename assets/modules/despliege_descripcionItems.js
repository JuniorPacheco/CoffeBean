const descripcionDesplegable = document.querySelectorAll('.item__descripcion');
import baseDeDatos from "../database/database.js"

export default document.addEventListener('click', atraparBotones);

function atraparBotones(e) {
    e.target.classList.contains("bx-menu-alt-left") ?
    desplegarDescripcion(e.target.getAttribute("data-id")) :
    "";
}

function desplegarDescripcion(data_id) {
    let resultado = encontrarIndex(parseInt(data_id));
    descripcionDesplegable[resultado].classList.contains("active") ?
    descripcionDesplegable[resultado].classList.remove("active") :
    descripcionDesplegable[resultado].classList.add("active");
}

function encontrarIndex(id){
    let resultado = "Nada";
    baseDeDatos.forEach((categoria)=>{
        categoria.forEach((producto, indiceProducto)=>{
            if(producto.id === id){
                resultado = indiceProducto;
            }
        })
    })
    return resultado;
}