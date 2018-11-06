var Toggle = document.querySelector('.main-nav__toggle');
var Close = document.querySelector('main-nav__close');
var Menu = document.querySelector('.menu');

Toggle.addEventListener('click',function(event) {
    event.preventDefault();
    Menu.classList.add('menu--show');
});

Close.addEventListener('click',function(event) {
    event.preventDefault();
    Menu.classList.remove('menu--show');
});
