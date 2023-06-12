// Filtro (lista-de-servicos.html)

const btnFiltro = document.querySelector('#filtrar-container')
const showFiltro = document.querySelector('#filtrar-items')

btnFiltro.addEventListener('click', ()=>{
    showFiltro.classList.toggle('show-filtro')
})