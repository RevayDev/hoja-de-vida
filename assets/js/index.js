function toggleMenu() {
    const menu_items = document.querySelector(".nav_items-nav")
    const menu = document.querySelector('.nav__menu');
    const navbar = document.getElementById("navbar");
    menu.classList.toggle('activo');
    menu_items.classList.toggle('activo')
  
// Este codigo ya lo entendi
    document.addEventListener("click", event => {       
    if (!navbar.contains(event.target)) {
        menu_items.classList.remove('activo')
        menu.classList.remove('activo');

    }

  
    
});


    
}

// Este codigo ya lo entendi
let prevScrollPos = window.scrollY;

if (prevScrollPos <= 0 ){
    prevScrollPos = 7
}

const navbar = document.getElementById("navbar");
const menu_items = document.querySelector(".nav_items-nav")
const menu = document.querySelector('.nav__menu');


window.onscroll = function() {
    let currentScrollPos = window.scrollY;


    if (prevScrollPos <= currentScrollPos || menu.classList.contains("activo")) {
        navbar.style.top = "-170px"; 
        menu.classList.remove("activo");
        menu_items.classList.remove("activo");

    } else {

        navbar.style.top = "0"; 
    }
    prevScrollPos = currentScrollPos;
};



// Este codigo lo pedi a Chat-GPT y actualmente lo estoy aprendiendo como funciona.

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = document.getElementById(link.getAttribute("href").slice(1)) || document.body;
            const offset = 110; 
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            const menu_items = document.querySelector(".nav_items-nav")
            const menu = document.querySelector('.nav__menu');


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

            menu.classList.remove('activo');
            menu_items.classList.remove('activo')

        });
    });
});