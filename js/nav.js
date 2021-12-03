/*code inspired from https://www.youtube.com/watch?v=gXkqy0b4M5g*/
const navSlide = () => {
    // get burger and nav-links elements
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // when the burger is clicked, hide/show the side menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        nav.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
            }
        })

        burger.classList.toggle('toggle')

    });


};

navSlide();