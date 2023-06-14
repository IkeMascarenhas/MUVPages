let adHidden = [...document.querySelectorAll('.hidden')]
let showAd = document.querySelector('#seeAds')

showAd.addEventListener('click', ()=>{
    showAd.remove()
    adHidden.map((ad)=>{
        ad.classList.toggle('show-ads')
    })

})

