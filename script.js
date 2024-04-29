const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navvlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navvlist.classList.toggle('activate');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navvlist.classList.remove('activate');
};