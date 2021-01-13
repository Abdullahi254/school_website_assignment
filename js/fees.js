function scrollAppear(){
    let sideCard = document.querySelector('.feeCards');
    let sideCardPosition = sideCard.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(sideCardPosition < screenPosition*.5){
        sideCard.classList.add('feeCards-appear')
    }
}

window.addEventListener('scroll',scrollAppear)