const starsRating = document.querySelectorAll(".filtroAva>ul>li")
const starsText = document.querySelectorAll(".rate>.stars>i")
console.log(starsRating,starsText)

starsRating.forEach((boxStars,i)=>{
    boxStars.addEventListener('click', (el)=>{
        console.log(el,i)
        starsText.forEach((el,i)=>{
            if(i==0){
                starsText.forEach((el)=>{
                    el.classList.remove("no-star")
                })
            }

            if(i==1){
                starsText.forEach((star,indexStar)=>{
                    console.log(indexStar)
                })
            }
        })
        
    })
})