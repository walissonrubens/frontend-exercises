let btnShare = document.querySelector("#btnShare")

btnShare.addEventListener('click', (e) =>{
    let shareContainerDesktop = document.querySelector("div.share-btn-container")
    let shareContainerMobile = document.querySelector("div.share-btn-container-mobile")


    let bodyWidth = document.body.offsetWidth
    if(bodyWidth > 820){
        shareContainerDesktop.classList.toggle('hide')
    } else{
        shareContainerMobile.classList.toggle('hide')
        let btnShareMobile = document.querySelector("#btnShareMobile")
    btnShareMobile.addEventListener('click', ()=>{
        shareContainerMobile.classList.toggle('hide')
    })

    
    }

    
   

    
   
})