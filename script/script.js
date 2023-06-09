//menu Hamburguer(Geral)

let menu = document.querySelector('#menu-container')
let menuItems = document.querySelector('#menu-items')
menu.addEventListener("click", ()=>{
    menuItems.classList.toggle("show-items")
})


// Filtro (lista-de-servicos.html)

const btnFiltro = document.querySelector('#filtrar-container')
const showFiltro = document.querySelector('#filtrar-items')

console.log(showFiltro)

btnFiltro.addEventListener('click', ()=>{
    showFiltro.classList.toggle('show-filtro')
})