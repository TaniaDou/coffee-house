const sliderWrapper = document.querySelector(".slider__wrapper");
const sliderItem = document.querySelectorAll(".coffee__slider");
const forwardBtn = document.querySelector(".slider__forward");
const backBtn = document.querySelector(".slider__back");
const sliderPag = document.querySelectorAll(".coffee__pag");
let sliderWidth = document.querySelector(".coffee__slider").offsetWidth;
let j = 0;

function swipeSlide(){
    sliderWrapper.style.transform = `translateX(${- j * sliderWidth}px)`;
}
function slideBackward(){
    j--;
    if (j < 0){
        j = sliderItem.length - 1;
    }
    sliderPag.forEach(i => i.classList.remove('active__pag'));
    sliderPag[j].classList.add('active__pag')
    swipeSlide()
}
function slideForward(){
    j++;
    if (j >= sliderItem.length){
        j = 0;
    }
    sliderPag.forEach(i => i.classList.remove('active__pag'));
    sliderPag[j].classList.add('active__pag')
    swipeSlide()
}
forwardBtn.addEventListener('click', slideForward);
backBtn.addEventListener('click', slideBackward);
sliderPag.forEach((pag, number) => {
    pag.addEventListener('click', () => {
        j = number;
        swipeSlide();
        sliderPag.forEach(i => i.classList.remove('active__pag'));
        sliderPag[j].classList.add('active__pag')
    })
})
setInterval(()=>{
    slideForward()
},7000)