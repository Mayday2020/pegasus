' use strict';

const toggleMenu = () => {
    const btnMenu = document.querySelector('.nav_button'),
            menu = document.querySelector('.menu'),
            menuA = menu.querySelectorAll('a');
    const handlerMenu = () => {
            menu.classList.toggle('active-menu');
    };
    menu.addEventListener('click', (event) => {
        let target = event.target;
        if (target){
            menuA.forEach((item) => {
                if(item === target){
                    handlerMenu();
                }
            });
        }
    });
    btnMenu.addEventListener('click', handlerMenu);
};
toggleMenu();