const burger = document.querySelector('.burger');
const navBurger = document.querySelector('.navBurger');

burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    } );

burger.onclick = () => {
    navBurger.classList.toggle('navOpen');
}