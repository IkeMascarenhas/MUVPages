let adHidden = [...document.querySelectorAll('.hidden')]
let showAd = document.querySelector('#seeAds')

showAd.addEventListener('click', ()=>{
    showAd.innerHTML='Ver menos'
    adHidden.map((ad)=>{
        ad.classList.toggle('show-ads')
    })
})