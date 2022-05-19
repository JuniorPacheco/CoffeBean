const btnMenu = document.querySelector(".bx-menu");
const menuDesplegable = document.querySelector(".barra__navbar");

export default btnMenu.addEventListener('click', desplegarMenu);

function desplegarMenu() {
   menuDesplegable.classList.contains("active") ?
   menuDesplegable.classList.remove("active") :
   menuDesplegable.classList.add("active");
}

