window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav')

    if (scrollY > 5) {
        nav.classList.add('nav-scroll')
    } else {
        nav.classList.remove('nav-scroll')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
