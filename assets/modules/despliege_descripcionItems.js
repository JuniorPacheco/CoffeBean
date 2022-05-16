import baseDeDatos from "../database/database.js"
import {getDescripcionDesplegable, getContador} from '/assets/modules/pintar_categorias.js'

let descripcionDesplegable = document.querySelectorAll('.item__descripcion');
export default document.addEventListener('click', atraparBotones);

function atraparBotones(e) {
    e.target.classList.contains("bx-menu-alt-left") ?
    desplegarDescripcion(e.target.getAttribute("data-id")) :
    "";
}

function desplegarDescripcion(data_id) {
    let resultado = encontrarIndex(parseInt(data_id));
    console.log(getContador())
    if(getContador()){
        console.log(getDescripcionDesplegable()[resultado])
        getDescripcionDesplegable()[resultado].classList.contains("active") ?
        getDescripcionDesplegable()[resultado].classList.remove("active") :
        getDescripcionDesplegable()[resultado].classList.add("active");
    }else {
        descripcionDesplegable[resultado].classList.contains("active") ?
        descripcionDesplegable[resultado].classList.remove("active") :
        descripcionDesplegable[resultado].classList.add("active");
    }
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