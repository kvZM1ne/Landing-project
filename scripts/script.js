const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-nav');
const closeButton = document.querySelector('.close-button');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
});