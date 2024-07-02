// burger menu
let burger = document.querySelector('.menu__btn-burger');
let menu = document.querySelector('.burger-menu__list');
let menuLinks = menu.querySelectorAll('.burger-menu__nav-item');


burger.addEventListener('click',
    function () {
        burger.classList.toggle('menu__btn-burger--active');
        menu.classList.toggle('burger-menu__list--active');
    }
);



menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('menu__btn-burger--active');
        menu.classList.remove('burger-menu__list--active');
    })
});


document.body.addEventListener('click', function (e) {
    if (e.target != menu && e.target != burger) {
        burger.classList.remove("menu__btn-burger--active");
        menu.classList.remove("burger-menu__list--active");
    }
});