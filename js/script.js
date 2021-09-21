
let openMenu = document.querySelectorAll('.openMenu')
let iOpen = document.querySelectorAll('i')
let headNavigation = document.querySelectorAll('.head-nav')
let menuCounter = 0;
openMenu[0].addEventListener('click', function() {
    if(menuCounter === 0) {
        headNavigation[0].style.display = 'flex'
        menuCounter += 1;
    } else if (menuCounter === 1) {
        headNavigation[0].style.display = 'none'
        menuCounter -= 1;
    }
})
let ModalImage = document.querySelectorAll('.sertificates')
let ModalImages = ModalImage[0].querySelectorAll('img')
let ModalSertificates = document.getElementById('modalSertificates')
let ModalSertificatesImg = ModalSertificates.querySelectorAll('img')
let ModalSertificatesBtn = ModalSertificates.querySelectorAll('button')
let ModalClose = ModalSertificates.querySelectorAll('span')
let ModalCounter = 0;
let ModalCounerOne = ModalImages.length - 1;
for (let i = 0; i < ModalImages.length; i++) {
    ModalImages[i].addEventListener('click', function() {
        ModalSertificates.style.display = 'flex';
        ModalSertificatesImg[0].src = ModalImages[i].src;
        ModalCounter = i;
        console.log(ModalCounter)
    })
}

ModalSertificatesBtn[0].addEventListener('click', function() {
    ModalSertificatesImg[0].src = ModalImages[ModalCounter-1].src;
    ModalCounter -= 1;
    console.log(ModalImages)
    console.log(ModalCounter)
    
})
ModalSertificatesBtn[1].addEventListener('click', function() {
    ModalSertificatesImg[0].src = ModalImages[ModalCounter+1].src;
    ModalCounter += 1;
    console.log(ModalImages)
    console.log(ModalCounter)
    
})
ModalClose[0].addEventListener('click', function() {
    ModalSertificates.style.display = 'none';
})