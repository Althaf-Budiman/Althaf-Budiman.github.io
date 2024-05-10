window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav')

    if (scrollY > 5) {
        nav.classList.add('nav-scroll')
        console.log(scrollY)
        console.log(nav)
    } else {
        nav.classList.remove('nav-scroll')
    }
})
